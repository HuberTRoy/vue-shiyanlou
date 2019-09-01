import HomeApi from '@/api/home/home.js'

const state = {
    home_content: null
}

const mutations = {
    change_home_content (state, homeContent) {
        state.home_content = homeContent
    }
}

const actions = {
    async get_and_change_home_content (context) {
        let content = await HomeApi.get_home_content()
        context.commit('change_home_content', content)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
