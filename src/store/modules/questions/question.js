import QuestionApi from '@/api/questions/question.js'

const state = {
    question_information: {},
    question_reply_information: {},
    question_id: 0,
    related_question_information: {}
}

const getters = {
    question_args: state => {
        return {
            id: state.question_id
        }
    }
}

const mutations = {
    change_question_information (state, qInformation) {
        state.question_information = qInformation
    },

    change_question_reply_information (state, replyInfo) {
        state.question_reply_information = replyInfo
    },

    change_question_id (state, qId) {
        state.question_id = qId
    },

    change_related_question_information (state, rQInfo) {
        state.related_question_information = rQInfo
    }
}

const actions = {
    change_question_information ({ getters, commit }) {
        let qInformation = QuestionApi.get_question_information(getters.question_args)
        commit('change_question_information', qInformation)
    },

    change_question_reply_information ({ getters, commit }) {
        let replyInfo = QuestionApi.get_question_reply(getters.question_args)
        commit('change_question_reply_information', replyInfo)
    },

    change_question_id (context, qId) {
        context.commit('change_question_id', qId)
    },

    change_related_question_information ({ getters, commit }) {
        let rQInfo = QuestionApi.get_related_question(getters.question_args)
        commit('change_related_question_information', rQInfo)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
