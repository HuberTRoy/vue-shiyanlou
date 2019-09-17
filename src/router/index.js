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

Vue.use(Router)

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
        path: '*',
        name: 'notfound',
        component: NotFound
    }
  ]
})
