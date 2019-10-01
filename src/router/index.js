import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// 关于路由
// 好像一开始就配置的不合理。
// children 要配合 router-view 来使用这样共用一套公共组件。
// 现在先分开写，等整理完功能再重新配置路由。
// 在这里先写一下构思,以免一会忘记了。
// 看了看语法就开始写了，一直没有整体上的把握。
// Vue 除去配置文件，一开始是从 App.vue 开始的，
// 教程上只在里面写了 <router-view></router-view> 然后开始写各种components 配顶层路由
// 也没多想， Vue 从 App.vue 进来，加载路由 <router-view></router-view>
// 这个router-view 显示的是顶层路由所配置的组件，
// 如果这个组件里也有router-view那应该展示的是children
// children 应该还能再嵌套...


const __import__ = file => () => import(`@/pages/${file}.vue`)

const router = new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: __import__('home')
    },
    {
        path: '/courses',
        name: 'courses',
        component: __import__('courses/course_home')
    },
    {
        path: '/courses/reports',
        name: 'reports',
        component: __import__('courses/reports/reports')
    },
    {
        path: '/courses/reports/:id',
        name: 'report',
        component: __import__('courses/reports/report')
    },
    {
        path: '/courses/:id',
        name: 'course',
        component: __import__('courses/course')
    },
    {
        path: '/path',
        name: 'path',
        component: __import__('path/path_home')
    },
    {
        path: '/path/:id',
        name: 'coursePath',
        component: __import__('path/course_path')
    },
    {
        path: '/questions',
        name: 'questions',
        component: __import__('questions/questions_home')
    },
    {
        path: '/questions/publish',
        name: 'publish',
        component: __import__('questions/publish')
    },
    {
        path: '/questions/:id',
        name: 'question',
        component: __import__('questions/question')
    },
    {
        path: '/user/profile',
        name: 'userProfile',
        component: __import__('user/profile/profile')
    },
    {
        path: '/user/:id',
        name: 'user',
        component: __import__('user/user')
    },
    {
        path: '/search',
        name: 'search',
        component: __import__('search/search')
    },
    {
        path: '/library',
        name: 'library',
        component: __import__('library/library')
    },
    {
        path: '/login',
        name: 'login',
        component: __import__('client_area/login')
    },
    {
        path: '*',
        name: 'notfound',
        component: __import__('404')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//     console.log(to.meta.login)
//     if (!to.meta.login) {
//         next({name: 'notfound'})
//     } else {
//         next()
//     }
// })

router.afterEach((to, from) => {
    window.scrollTo(0, 0)
})

export default router

