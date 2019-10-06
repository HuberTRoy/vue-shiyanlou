const state = {
    message: '',
    warning_bar_style_class: 'alert'
}

const mutations = {
    change_message (state, message) {
        state.message = message
    },
    change_warning_bar_style_class (state, styleClass) {
        state.warning_bar_style_class = styleClass
    }
}

const actions = {
    change_message (context, message) {
        context.commit('change_message', message)
    },
    change_warning_bar_style_class (context, styleClass) {
        context.commit('change_warning_bar_style_class', styleClass)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
