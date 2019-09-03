const state = {
    show_scroll_bar: false,
    currentScrolledValue: 0
}

const getters = {
    documentHeight: state => {
        // 这个不会随着变化,废弃。
        let body = document.body,
        html = document.documentElement;
        return Math.max( body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight );
    },

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
    getters,
    mutations,
    actions
}
