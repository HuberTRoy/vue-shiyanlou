<template>
    <div>
        <Header></Header>
        <Category></Category>
        <Courses :courses-items="testData">
            <img src="@/assets/ad.png" alt="">
        </Courses>
    </div>
</template>

<script setup lang="ts">
import Header from './components/header.vue'
import Category from './components/category.vue'
import Courses from './components/courses.vue'

const testData = [
            {
                tabName: "春招急救",
                tabKey: "春招急救",
                tabCourses: [{
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
                }]
            },
            {
                tabName: "春招急救2",
                tabKey: "春招急救2",
                tabCourses: [{
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
                }]
            }
        ]
</script>

<style scoped>

</style>