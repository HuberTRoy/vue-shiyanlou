import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
import utils from '@/utils/base.js'

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
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'Home',
        component: __import__('home'),
        meta: {
            title: '在线做实验，高效学编程 - 实验楼'
        }
    },
    {
        path: '/courses',
        name: 'courses',
        component: __import__('courses/course_home'),
        meta: {
            title: '精选项目课程_IT热门课程_实验楼课程 - 实验楼'
        }
    },
    {
        path: '/courses/reports',
        name: 'reports',
        component: __import__('courses/reports/reports'),
        meta: {
            title: '实验报告 - 实验楼'
        }
    },
    {
        path: '/courses/reports/:id',
        name: 'report',
        component: __import__('courses/reports/report'),
        meta: {
            title: '实验楼'
        }
    },
    {
        path: '/courses/:id',
        name: 'course',
        component: __import__('courses/course'),
        meta: {
            title: '实验楼'
        }
    },
    {
        path: '/path',
        name: 'path',
        component: __import__('path/path_home'),
        meta: {
            title: 'IT工程师学习路线_养成路径_实验楼学习路径 - 实验楼'
        }
    },
    {
        path: '/path/:id',
        name: 'coursePath',
        component: __import__('path/course_path'),
        meta: {
            title: 'IT工程师学习路线_养成路径_实验楼学习路径 - 实验楼'
        }
    },
    {
        path: '/questions',
        name: 'questions',
        component: __import__('questions/questions_home'),
        meta: {
            title: 'IT项目技术问答讨论平台_实验楼讨论 - 实验楼'
        }
    },
    {
        path: '/questions/publish',
        name: 'publish',
        component: __import__('questions/publish'),
        meta: {
            title: '发布帖子 - 实验楼'
        }
    },
    {
        path: '/questions/:id',
        name: 'question',
        component: __import__('questions/question'),
        meta: {
            title: '实验楼'
        }
    },
    {
        path: '/user/profile',
        name: 'userProfile',
        component: __import__('user/profile/profile'),
        meta: {
            title: '个人设置 - 实验楼',
            login: true
        }
    },
    {
        path: '/user/:id',
        name: 'user',
        component: __import__('user/user'),
        meta: {
            title: '实验楼'
        }
    },
    {
        path: '/search',
        name: 'search',
        component: __import__('search/search'),
        meta: {
            title: '实验楼'
        }
    },
    {
        path: '/library',
        name: 'library',
        component: __import__('library/library'),
        meta: {
            title: '教程库-精品编程学习教程库 - 实验楼'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: __import__('client_area/login'),
        meta: {
            title: '登录 - 实验楼'
        }
    },
    {
        path: '/live',
        name: 'live',
        component: __import__('live/live'),
        meta: {
            title: '代码直播课程 - 实验楼'
        }
    },
    {
        path: '/contests',
        name: 'contests',
        component: __import__('contests/contests'),
        meta: {
            title: '编程比赛_编程能力测试_IT挑战_实验楼比赛 - 实验楼'
        }
    },
    {
        path: '*',
        name: 'notfound',
        component: __import__('404'),
        meta: {
            title: 'Sorry，页面走丢了... - 实验楼'
        }
    }
  ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.login) {
        if (!store.state.loginState.sign_on) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    }
    next()   
})

router.afterEach((to, from) => {
    window.scrollTo(0, 0)
})

export default router

