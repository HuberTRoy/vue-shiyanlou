<template>
  <div class="courses main-width">
    <div class="courses-title">
      <slot name="cover"></slot>
      <div class="courses-title-tab" v-if="props.coursesItems">
        <span
          class="tab-item"
          v-for="tabItem in props.coursesItems"
          :key="tabItem.tabKey"
          @click="currentActive = tabItem"
          :class="[tabItem.tabKey === currentActive?.tabKey ? 'active' : '']"
          >{{ tabItem.tabName }}</span
        >
      </div>

      <span>全部 >></span>
    </div>

    <div class="courses-wrapper">
      <div
        class="course-item"
        v-for="course in currentActive?.tabCourses"
        :key="course.title"
        @click="
          router.push({
            name: 'course-detail',
            params: {
              id: 1,
            },
          })
        "
      >
        <img :src="course.cover" alt="" class="course-item-img" />
        <div class="course-item-title">
          {{ course.desc }}
        </div>

        <div class="course-item-desc">
          {{ course.desc }}
        </div>

        <div class="course-item-tags">
          <span>{{ course.level }}</span>
          <span> · </span>
          <span>{{ course.count }}人学过</span>
        </div>
      </div>

      <div class="courses-right">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface courseItem {
  tabName: string;
  tabKey: string;
  tabCourses: {
    cover: string;
    title: string;
    desc: string;
    level: string;
    count: number;
  }[];
}
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const props = defineProps<{
  coursesItems: courseItem[];
}>();

const currentActive = ref<courseItem>();

const router = useRouter();

onMounted(() => {
  if (props.coursesItems && props.coursesItems.length !== 0) {
    currentActive.value = props.coursesItems[0];
  }
});
</script>

<style scoped lang="less">
.courses {
  margin-top: 60px;

  display: flex;
  flex-direction: column;

  &-title {
    display: flex;

    /deep/img {
      width: 200px;
    }

    &-tab {
      margin-left: 25px;
      display: flex;
      flex-grow: 1;

      .tab-item {
        border-radius: 16px;
        color: #000;
        cursor: pointer;
        font-size: 16px;
        padding: 4px 14px;
        position: relative;

        & + .tab-item {
          margin-left: 16px;
        }

        &.active {
          background: linear-gradient(318deg, #2d58ff, #3c8dff);
          color: #fff;
        }
      }
    }
  }

  &-wrapper {
    display: flex;
    margin-top: 10px;

    .course-item {
      background: #fff;
      border: none;
      border-radius: 10px;
      box-shadow: 0 2px 10px 0 rgba(230, 235, 240, 0.5);
      padding: 15px;
      height: 271px;
      overflow: hidden;
      cursor: pointer;

      &-img {
        width: 100%;
        height: 106px;
        border-radius: 10px;
        transition: all 0.2s;
      }

      &-title {
        margin-top: 12px;
        color: #333;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &-desc {
        background: #fafafa;
        border-radius: 5px;
        color: #999;
        font-size: 14px;
        height: 60px;
        line-height: 23px;
        margin: 10px 0;
        padding: 10px;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &-tags {
        font-size: 14px;
        color: #999;
      }

      & + .course-item {
        margin-left: 10px;
      }

      &:hover {
        .course-item-img {
          transform: scale(1.1);
        }
      }
    }
  }

  &-right {
    width: 20%;
    flex-shrink: 0;
    margin-left: 10px;

    /deep/img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
