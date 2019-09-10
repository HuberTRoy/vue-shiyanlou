import QuestionApi from '@/api/questions/question.js'

const state = {
    question_information: {},
    question_reply_information: {},
    question_id: 0,
    related_question_information: {},
    // cursor 是翻页用的一个参数
    cursor: '',
    prev: null,
    next: null,
    text_placeholder: "",
    reply_id: 0
}

const getters = {
    question_args: state => {
        return {
            id: state.question_id,
            cursor: state.cursor
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
    },

    change_cursor (state, cursor) {
        state.cursor = cursor
    },

    add_reply (state, replyInfo) {
        state.question_reply_information.results.push(replyInfo)
    },

    change_text_placeholder (state, text) {
        state.text_placeholder = text
    },

    change_reply_id (state, id) {
        state.reply_id = id
    }

}

const actions = {
    change_question_information ({ getters, commit }) {
        // let qInformation = QuestionApi.get_question_information(getters.question_args)
        QuestionApi.get_question_information(getters.question_args).then((response) => {
            commit('change_question_information', response.data)
        })
    },

    change_question_reply_information ({ getters, commit }) {
        // let replyInfo = QuestionApi.get_question_reply(getters.question_args)
        QuestionApi.get_question_reply(getters.question_args).then((response)=>{
            commit('change_question_reply_information', response.data)
        })
    },

    change_question_id (context, qId) {
        context.commit('change_question_id', qId)
    },

    change_related_question_information ({ getters, commit }) {
        // let rQInfo = QuestionApi.get_related_question(getters.question_args)
        QuestionApi.get_related_question(getters.question_args).then((response) => {
            commit('change_related_question_information', response.data)
        })
    },

    change_cursor (context, cursor) {
        context.commit('change_cursor', cursor)
    },

    reply_question (context, questionArgs) {
        QuestionApi.reply_question(questionArgs).then((response) => {
            context.commit('add_reply', response.data)
        })
    },

    change_reply_id (context, id) {
        context.commit('change_reply_id', id)
    },

    change_text_placeholder (context, text) {
        context.commit('change_text_placeholder', text)
    },

    reply_question_comment (context, questionArgs) {
        QuestionApi.reply_question_comment(questionArgs).then((response) => {
            context.commit('add_reply', response.data)
            context.change_reply_id(0)
            context.change_text_placeholder("")
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
