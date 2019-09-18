import searchApi from '@/api/search/search.js'

const state = {
    nav: 'course',
    search_result: {}
}

const mutations = {
    change_search_result (state, searchResult) {
        state.search_result = searchResult
    },
    change_nav (state, navTitle) {
        state.nav = navTitle
    }
}

const actions = {
    async change_search_result (context, args) {
        let result = await searchApi.get_search_result(args)
        context.commit('change_search_result', result.data)
    },
    change_nav (context, navTitle) {
        context.commit('change_nav', navTitle)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

