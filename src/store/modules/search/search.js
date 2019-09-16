import searchApi from '@/api/search/search.js'

const state = {
    search_result: {}
}

const mutations = {
    change_search_result (state, searchResult) {
        state.search_result = searchResult
    }
}

const actions = {
    async change_search_result (context, args) {
        let result = await searchApi.get_search_result(args)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

