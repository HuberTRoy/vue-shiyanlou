import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: () =>  import('@/pages/index/index.vue') },
    { path: '/courses', component: () =>  import('@/pages/courses/index.vue'), name: "courses" },
    { path: '/course-detail/:id', component: () =>  import('@/pages/course-detail/index.vue'), name: "course-detail" },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

