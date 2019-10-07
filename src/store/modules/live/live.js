import LiveApi from '@/api/live/live.js'

const state = {
    ended_live_courses: {},
    not_ended_live_courses: {}
}

const mutations = {
    change_ended_live_courses (state, endedCourses) {
        state.ended_live_courses = endedCourses
    },
    change_not_ended_live_courses (state, notEndedCourses) {
        state.not_ended_live_courses = notEndedCourses
    }
}

const actions = {
    async change_live_courses (context, args) {
        let res = await LiveApi.get_live_courses(args)
        if (args.status==='ended') {
            context.commit('change_ended_live_courses', res.data)
        } else {
            context.commit('change_not_ended_live_courses', res.data)
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}