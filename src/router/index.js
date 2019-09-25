import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home.vue'
import Course from '@/pages/courses/course.vue'
import Courses from '@/pages/courses/course_home.vue'
import Path from '@/pages/path/path_home.vue'
import CoursePath from '@/pages/path/course_path.vue'
import QuestionsHome from '@/pages/questions/questions_home.vue'
import Question from '@/pages/questions/question.vue'
import User from '@/pages/user/user.vue'
import Profile from '@/pages/user/profile/profile.vue'
import Search from '@/pages/search/search.vue'
import NotFound from '@/pages/404.vue'
import Library from '@/pages/library/library.vue'
import Login from '@/pages/client_area/login.vue'
import Report from '@/pages/courses/reports/report.vue'
import Reports from '@/pages/courses/reports/reports.vue'
import Publish from '@/pages/questions/publish.vue'


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


export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/courses',
        name: 'courses',
        component: Courses
        // children: [
        //     {
        //         path: 'reports',
        //         component: Reports,
        //         name: 'reports'
        //     },
        //     {
        //         path: 'reports/:id',
        //         component: Report,
        //         name: 'report'
        //     },
        //     {
        //         path: ':id',
        //         name: 'course',
        //         component: Course
        //     }
        // ]
    },
    {
        path: '/courses/reports',
        component: Reports,
        name: 'reports'
    },
    {
        path: '/courses/reports/:id',
        component: Report,
        name: 'report'
    },
    {
        path: '/courses/:id',
        name: 'course',
        component: Course
    },
    {
        path: '/path',
        name: 'path',
        component: Path
    },
    {
        path: '/path/:id',
        name: 'coursePath',
        component: CoursePath
    },
    {
        path: '/questions',
        name: 'questions',
        component: QuestionsHome
    },
    {
        path: '/questions/publish',
        name: 'publish',
        component: Publish
    },
    {
        path: '/questions/:id',
        name: 'question',
        component: Question
    },
    {
        path: '/user/profile',
        name: 'userProfile',
        component: Profile
    },
    {
        path: '/user/:id',
        name: 'user',
        component: User
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/library',
        name: 'library',
        component: Library
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '*',
        name: 'notfound',
        component: NotFound
    }
  ]
})
