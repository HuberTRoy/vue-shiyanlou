const state = {
    show_scroll_bar: false,
    current_scrolled_value: 0
}

// const getters = {
//     documentHeight: state => {
//         // 这个不会随着变化,废弃。
//         let body = document.body,
//         html = document.documentElement;
//         return Math.max( body.scrollHeight, body.offsetHeight, 
//             html.clientHeight, html.scrollHeight, html.offsetHeight );
//     },

// }

const mutations = {
    update_scroll_value (state) {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        if (state.current_scrolled_value < scrollTop) {
            state.show_scroll_bar = true
        } else {
            state.show_scroll_bar = false
        }

        state.current_scrolled_value = scrollTop
    }
}

const actions = {
    update_scroll_value (context) {
        context.commit('update_scroll_value')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
