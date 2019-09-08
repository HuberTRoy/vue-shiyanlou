import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home/home.js'
import scrollBar from './modules/scroll_bar/scroll_bar.js'
import coursesCategory from './modules/courses_category/courses_category.js'
import course from './modules/course/course.js'
import loginState from './modules/login_state/login_state.js'
import path from './modules/path/path.js'
import question from './modules/questions/question.js'
import questions from './modules/questions/questions.js'
import user from './modules/user/user.js'
import loggedInfo from './modules/logged_info/logged_info.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        home,
        scrollBar,
        coursesCategory,
        course,
        loginState,
        path,
        questions,
        question,
        user,
        loggedInfo
    },
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
