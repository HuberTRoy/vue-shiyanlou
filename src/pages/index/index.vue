<template>
  <div>
    <Category></Category>
    <Courses :courses-items="testData">
      <template #cover>
        <img src="@/assets/hot.png" alt="" />
      </template>
      <img src="@/assets/ad.png" alt="" />
    </Courses>
    <Courses :courses-items="testData">
      <template #cover>
        <img src="@/assets/race.png" alt="" />
      </template>
      <img src="@/assets/ad.png" alt="" />
    </Courses>
    <Courses :courses-items="testData">
      <template #cover>
        <img src="@/assets/practice.png" alt="" />
      </template>
      <img src="@/assets/ad.png" alt="" />
    </Courses>
  </div>
</template>

<script setup lang="ts">
import Category from "./components/category.vue";
import Courses from "./components/courses.vue";

const testData = [
  {
    tabName: `dsn: ${import.meta.env.VITE_SENTRY_DSN}`,
    tabKey: "春招急救",
    tabCourses: [
      {
        cover: "src/assets/1.png",
        title: "春招急救",
        desc: "春招急救",
        level: "春招急救",
        count: 888,
      },
      {
        cover: "src/assets/1.png",
        title: "春招急救",
        desc: "春招急救",
        level: "春招急救",
        count: 888,
      },
      {
        cover: "src/assets/1.png",
        title: "春招急救",
        desc: "春招急救",
        level: "春招急救",
        count: 888,
      },
      {
        cover: "src/assets/1.png",
        title: "春招急救",
        desc: "春招急救",
        level: "春招急救",
        count: 888,
      },
    ],
  },
  {
    tabName: "春招急救2",
    tabKey: "春招急救2",
    tabCourses: [
      {
        cover: "src/assets/1.png",
        title: "春招急救2",
        desc: "春招急救2",
        level: "春招急救2",
        count: 888,
      },
      {
        cover: "src/assets/1.png",
        title: "春招急救2",
        desc: "春招急救2",
        level: "春招急救2",
        count: 888,
      },
      {
        cover: "src/assets/1.png",
        title: "春招急救",
        desc: "春招急救",
        level: "春招急救",
        count: 888,
      },
      {
        cover: "src/assets/1.png",
        title: "春招急救",
        desc: "春招急救",
        level: "春招急救",
        count: 888,
      },
    ],
  },
];
</script>

<style scoped></style>
