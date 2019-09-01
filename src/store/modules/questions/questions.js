import QuestionListApi from '../../../api/questions/questions.js'
import RelatedStuffApi from '../../../api/related_stuff/related_stuff.js'
import router from '@/router'

const state = {
    current_nav_bar_tag: '全部',
    all_nav_bar_tag: ['全部', '课程问答', '交流讨论', '技术分享', '实验报告', '站内公告'],
    current_sort_category: '最新',
    all_sort_category: ['最新', '最热', '未回复'],
    current_page: 1,
    total_page: 1,
    question_list_information: {},
    related_stuff_information: {}
}

const getters = {
    router_args: state => {
        return {
            tag: state.current_nav_bar_tag,
            sort: state.current_sort_category,
            page: state.current_page
        }
    },
    showing_page_info: state => {
                let p = []
                for (var i = 1; i <= state.total_page; i++) {
                    p.push(i)
                    if (i === 2) {
                        p.push('...')
                    } else if (i === state.total_page - 2) {
                        p.push('... ')
                    }
                }
                return p
            }
}

const mutations = {
    change_current_nav_bar_tag (state, tag) {
        state.current_nav_bar_tag = tag
    },

    change_current_sort_category (state, category) {
        state.current_sort_category = category
    },

    change_question_list_information (state, qLInformation) {
        state.question_list_information = qLInformation
        state.total_page = Math.ceil(qLInformation.total_questions / 15)
    },

    change_current_page (state, page) {
        state.current_page = page
    },

    change_related_stuff (state, stuff) {
        state.related_stuff_information = stuff
    }
}

const actions = {
    router_to ({ state, getters }) {
        router.push({
            path: '/questions',
            query: getters.router_args
        })
    },

    change_current_nav_bar_tag (context, tag) {
        context.commit('change_current_nav_bar_tag', tag)
        context.dispatch('router_to')
    },

    change_current_sort_category (context, category) {
        context.commit('change_current_sort_category', category)
        context.dispatch('router_to')
    },

    change_question_list_information (context, questionListArgs) {
        let qLInformation = QuestionListApi.get_question_list(questionListArgs)
        context.commit('change_question_list_information', qLInformation)
    },

    change_current_page (context, pageArgs) {
        // pageNumber
        // pageType
        if (pageArgs.pageNumber === '...' ||
            pageArgs.pageNumber === '... ') {
            return
        }

        context.commit('change_current_page', pageArgs.pageNumber)
        context.dispatch('router_to')
    },

    get_related_stuff (context) {
        let relatedStuff = RelatedStuffApi.get_related_stuff()
        context.commit('change_related_stuff', relatedStuff)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
