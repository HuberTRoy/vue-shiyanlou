<template>
  <div class="courses main-width">
    <!-- 这里面是具体的课程卡片 -->
    <div
      class="course-card"
      v-for="course in coursesData"
      :key="course.id"
      @click="
        router.push({
          name: 'course-detail',
          params: {
            id: course.id,
          },
        })
      "
    >
      <img :src="course.picture_url" alt="" />

      <div class="course-card-title">{{ course.name }}</div>

      <div class="course-card-tags">
        <div class="course-card-tag" v-for="tag in course.tags" :key="tag">
          {{ tag }}
        </div>
      </div>

      <div class="course-card-info">
        <span>初级</span>
        <span> · </span>
        <span>{{ course.students_count }}人学过</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IGetCourses, coursesInfo } from "@/api/courses";
import { useCoursesStore } from "@/store/courses";
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useInfiniteScroll } from "@vueuse/core";

const router = useRouter();
const courseStore = useCoursesStore();
const coursesData = ref<IGetCourses["results"]>([]);
const curPage = ref(1);
const loading = ref(false);
const finished = ref(false);
const filterComputed = computed(() => {
  return { ...courseStore.activeFilter, page: curPage.value };
});

const getCourses = async (type: "reset" | "next" = "reset") => {
  if (loading.value) return;
  if (finished.value) return;
  loading.value = true;
  try {
    const res = await coursesInfo(filterComputed.value);

    if (res.status === 200) {
      if (type === "reset") {
        coursesData.value = res.data.results;
      } else {
        coursesData.value = [...coursesData.value, ...res.data.results];
      }
      curPage.value += 1;
      if (!res.data.next) {
        finished.value = true;
      }
    }
  } finally {
    loading.value = false;
  }
};

useInfiniteScroll(
  document.querySelector("#app") as HTMLDivElement,
  () => {
    getCourses("next");
  },
  {
    distance: 100,
  }
);

watch(
  () => courseStore.activeFilter,
  () => {
    curPage.value = 1;
    finished.value = false;
    getCourses();
  },
  {
    deep: true,
  }
);

onMounted(() => {
  getCourses();
});
</script>

<style scoped lang="less">
.courses {
  display: grid;
  margin-top: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  row-gap: 20px;
  .course-card {
    background: #fff;
    border-radius: 10px;
    display: inline-block;
    padding: 15px 15px 19px;
    width: 270px;
    cursor: pointer;

    img {
      border-radius: 10px;
      height: 136px;
      width: 240px;
    }

    &-title {
      color: #000;
      font-size: 14px;
      font-weight: 500;
      height: 20px;
      line-height: 20px;
      margin: 12px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &-tags {
      color: #999;
      display: flex;
      flex-wrap: wrap;
      font-size: 12px;
      font-weight: 400;
      height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 30px;
    }

    &-tag {
      background: #fafafa;
      border-radius: 12px;
      padding: 0 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-info {
      color: #999;
      display: flex;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>
