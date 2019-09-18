import LibraryApi from '@/api/library/library.js'

const state = {
    index_content: {},
    library_content: {}

}

const mutations = {
    change_index_content (state, category) {
        state.index_content = category
    },
    change_library_content (state, libraryContent) {
        state.library_content = libraryContent
    }
}

const actions = {
    async change_index_content (context) {
        let category = await LibraryApi.get_index_content()
        context.commit('change_index_content', category.data)
    },

    async change_library_content (context, args) {
        let content = await LibraryApi.get_library_content(args)
        context.commit('change_library_content', content.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
