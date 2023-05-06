<template>
  <div class="category main-width">
    <!-- 这个板有四个维度的筛选条件 -->
    <div class="filter">
      <span class="filter-title">方向：</span>

      <div class="filter-inner">
        <div
          class="filter-item"
          v-for="cate in categoryData"
          :key="cate.name"
          :class="[activeFilter.category === cate.name ? 'active' : '']"
          @click="
            activeFilter.category = cate.name;
            activeFilter.tag = cate.tags[0].name;
          "
        >
          {{ cate.name }}
        </div>
      </div>
    </div>

    <div class="filter">
      <span class="filter-title">标签：</span>
      <div class="filter-inner">
        <div
          class="filter-item"
          :class="[activeFilter.tag === '全部' ? 'active' : '']"
          @click="activeFilter.tag = '全部'"
        >
          全部
        </div>
        <div
          class="filter-item"
          v-for="cate in curTagsData"
          :key="cate.name"
          :class="[activeFilter.tag === cate.name ? 'active' : '']"
          @click="activeFilter.tag = cate.name"
        >
          {{ cate.name }}
        </div>
      </div>
    </div>

    <div class="filter">
      <span class="filter-title">类型：</span>
      <div class="filter-inner">
        <div
          class="filter-item"
          v-for="cate in feeTypeCategory"
          :key="cate"
          :class="[activeFilter.feeType === cate ? 'active' : '']"
          @click="activeFilter.feeType = cate"
        >
          {{ cate }}
        </div>
      </div>
    </div>

    <div class="filter">
      <span class="filter-title">难度：</span>
      <div class="filter-inner">
        <div
          class="filter-item"
          v-for="cate in levelCategory"
          :key="cate"
          :class="[activeFilter.level === cate ? 'active' : '']"
          @click="activeFilter.level = cate"
        >
          {{ cate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IGetCoursesCategory, coursesCategory } from "@/api/courses";
import { useCoursesStore } from "@/store/courses";
import { computed, onMounted, ref } from "vue";

const feeTypeCategory = ["全部", "免费", "会员", "实战营"];
const levelCategory = ["全部", "初级", "中级", "高级"];

const courseStore = useCoursesStore();

const categoryData = ref<IGetCoursesCategory[]>([]);
const activeFilter = courseStore.activeFilter;

const curTagsData = computed(() => {
  return (
    categoryData.value.find((i) => i.name === activeFilter.category)?.tags || []
  );
});

const getCoursesCategory = async () => {
  const res = await coursesCategory();

  if (res.status === 200) {
    categoryData.value = res.data;
  }
};

onMounted(() => {
  getCoursesCategory();
});
</script>

<style scoped lang="less">
.category {
  margin-top: 10px;
  background: #fff;
  border-radius: 10px;
  padding: 20px 20px 8px;
  display: flex;
  flex-direction: column;

  .filter {
    display: flex;
    margin-bottom: 10px;

    &-title {
      color: #000;
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
      padding: 4px 0;
      flex-shrink: 0;
    }

    &-inner {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      cursor: pointer;
      display: inline-block;
      line-height: 14px;
      margin: 0 0 12px 8px;
      padding: 4px 12px;

      &.active {
        background: #eaf2fd;
        border-radius: 11px;
        color: #2e7eee;
        font-weight: 500;
      }
    }
  }
}
</style>
