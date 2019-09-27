import UserApi from '@/api/user/user.js'
import cookies from 'vue-cookies'

const state = {
    user_id: 0,
    user_info: {},
    user_learning_record: {},
    user_stuff_nav: '课程',
    // courses
    courses_content: {},
    courses_nav: 'studied',
    courses_question: {},
    courses_report: {},
    loading_state: true,
    // path
    path_content: {},

    // report
    report_content: {},

    // discuss
    discuss_content: {},

    nav_to_api: {
        '课程': 'get_and_change_courses_content',
        '路径': 'get_and_change_path_content',
        '报告': 'get_and_change_report_content',
        '讨论': 'get_and_change_discuss_content'
    },

    courses_content_userstatus: {},

    beans: 0
}

const mutations = {
    change_user_id (state, userId) {
        state.user_id = userId
    },
    change_user_info (state, userInfo) {
        state.user_info = userInfo
    },
    change_user_learning_record (state, userLearningRecord) {
        state.user_learning_record = userLearningRecord
    },
    change_user_stuff_nav (state, navTitle) {
        state.user_stuff_nav = navTitle
    },

    // courses
    change_courses_content (state, content) {
        state.courses_content = content
    },
    change_courses_nav (state, navTitle) {
        state.courses_nav = navTitle
    },
    change_courses_question (state, question) {
        state.courses_question = question
    },
    change_courses_report (state, report) {
        state.courses_report = report
    },
    change_loading_state (state, loadingState) {
        state.loading_state = loadingState
    },

    // path
    change_path_content (state, pathContent) {
        state.path_content = pathContent
    },

    // report
    change_report_content (state, reportContent) {
        state.report_content = reportContent
    },

    // discuss
    change_discuss_content (state, discussContent) {
        state.discuss_content = discussContent
    },

    change_courses_content_userstatus (state, userstatus) {
        // [{0},{1},{2}]
        // to
        // {0: {},
        //  1: {}}

        let _userstatus = {}
        let content = state.courses_content.results
        for (var i = content.length - 1; i >= 0; i--) {
            _userstatus[content[i].id] = userstatus[i]
        }

        state.courses_content_userstatus = _userstatus
    },

    change_beans (state, beans) {
        state.beans = beans
    }
}

const actions = {
    get_and_change_user_info ({state, commit}) {
        UserApi.get_user_info({'id': state.user_id}).then((response) => {
            commit('change_user_info', response.data)
        })
    },

    set_user_info (context, userInfo) {
        context.commit('change_user_info', userInfo)
    },

    change_user_id (context, userId) {
        context.commit('change_user_id', userId)
    },

    get_and_change_user_learning_record ({state, commit}, userArgs) {
        // userArgs
        // id
        // end_time
        let userLearningRecord = UserApi.get_user_learning_record(userArgs)
        commit('change_user_learning_record', userLearningRecord)
    },

    // courses
    get_and_change_courses_content (context, args) {
        // args
        // id
        // type
        // let content = UserApi.get_user_courses_info(args)
        UserApi.get_user_courses_info(args).then((response)=> {
            context.commit('change_courses_content', response.data)
        })
    },
    change_courses_nav (context, navTitle) {
        context.commit('change_courses_nav', navTitle)
    },
    get_user_courses_question (context, args) {
        // args
        // user_id
        // courses_id
        // page
        context.commit('change_loading_state', true)

        UserApi.get_user_courses_question(args).then((response) => {
            context.commit('change_loading_state', false)
            context.commit('change_courses_question', response.data)
        })
    },
    get_user_courses_report (context, args) {
        // args
        // user_id
        // courses_id
        // page
        context.commit('change_loading_state', true)

        UserApi.get_user_courses_report(args).then(function (report) {
            if (report.state) {
                context.commit('change_loading_state', false)
            }
            context.commit('change_courses_report', report)
        }, function (error) {
            console.log(error)
        })
    },

    // path
    get_and_change_path_content (context, args) {
        // args
        // id
        // page
        // let content = UserApi.get_user_path_info(args)
        UserApi.get_user_path_info(args).then((response) => {
            context.commit('change_path_content', response.data)
        })
    },

    // report
    async get_and_change_report_content (context, args) {
        // args
        // id
        // page
        let content = await UserApi.get_user_report_info(args)
        context.commit('change_report_content', content.data)
    },

    // discuss
    async get_and_change_discuss_content (context, args) {
        // args
        // id
        // page
        let content = await UserApi.get_user_discuss_info(args)
        // UserApi.get_user_discuss_info(args).then((response) => {
        context.commit('change_discuss_content', content.data)
        // })
    },

    change_user_stuff ({state, commit, dispatch}, args) {
        // args
        // base: nav_title
        let navTitle = args.nav_title
        commit('change_user_stuff_nav', navTitle)
        // dispatch(state.nav_to_api[navTitle], args)
    },

    change_courses_content_userstatus (context, args) {
        UserApi.get_courses_content_userstatus(args).then((response) => {
            context.commit('change_courses_content_userstatus', response.data)
        })
    },

    async checkin (context, args) {
        let beans = await UserApi.checkin(args)
        // if (beans.data.beans) {
        //     cookies.set('beans', beans.data.beans)
        // } else {
        //     cookies.set('beans', beans.data.beans_from_today_checkin)
        // }
        if (args.method == 'POST') {
            location.reload()
        } else if (args.method == 'GET') {
            context.commit('change_beans', beans.data.beans_from_today_checkin)
        }

    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
