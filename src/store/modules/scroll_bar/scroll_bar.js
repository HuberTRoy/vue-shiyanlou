const state = {
    show_scroll_bar: false,
    currentScrolledValue: 0
}

const mutations = {
    updateScrollValue (state) {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        if (state.currentScrolledValue < scrollTop) {
            state.show_scroll_bar = true
        } else {
            state.show_scroll_bar = false
        }

        state.currentScrolledValue = scrollTop
    }
}

const actions = {
    updateScrollValue (context) {
        context.commit('updateScrollValue')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
