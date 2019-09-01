import loginApi from '@/api/login/login.js'

const state = {
    show_login_dialog: false,
    // on 表示 显示的是登录框，up 则是注册框
    onOrUp: 'on',
    sign_on: false,
    login_info: {
        'state': true,
        'state_message': '',
        'avatar': '',
        'history': [],
        'id': 0
    }
}

const mutations = {
    change_sign_on_state (state, signOnState) {
        state.sign_on = signOnState
    },

    change_login_info (state, loginInfo) {
        state.login_info = loginInfo
    },
    change_show_state (state, onOrUp) {
        state.show_login_dialog = !state.show_login_dialog
        if (onOrUp === null) {
            return
        }
        state.onOrUp = onOrUp
    },
    change_on_up_state (state, onOrUp) {
        state.onOrUp = onOrUp
    },
    log_out (state) {
        // 登出操作
        state.sign_on = false
        state.show_login_dialog = false
        // state.login_info
    }
}

const actions = {
    get_and_change_all_login (context, loginArgs) {
        let loginInfo = loginApi.login(loginArgs)

        context.commit('change_sign_on_state', loginInfo.state)
        context.commit('change_login_info', loginInfo)

        return {'state': loginInfo.state,
                'state_message': loginInfo.state_message}
    },
    change_show_state (context, onOrUp) {
        context.commit('change_show_state', onOrUp)
    },
    change_on_up_state (context, onOrUp) {
        context.commit('change_on_up_state', onOrUp)
    },
    log_out (context) {
        context.commit('log_out')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
