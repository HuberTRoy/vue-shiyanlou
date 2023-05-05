import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: () =>  import('@/pages/index/index.vue') },
    { path: '/courses', component: () =>  import('@/pages/courses/index.vue'), name: "courses" },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

