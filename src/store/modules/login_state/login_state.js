import loginApi from '@/api/login/login.js'
import cookies from 'vue-cookies'

const state = {
    show_login_dialog: false,
    // on 表示 显示的是登录框，up 则是注册框
    onOrUp: 'on',
    sign_on: cookies.get('userId') ? true : false,
    login_info: {
        'message': ''
    },
    user_info: {

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
    },
    change_message (state, message) {
        state.login_info.message = message
    },
    change_user_info (state, userInfo) {
        state.user_info = userInfo
    }
}

const actions = {
    get_and_change_all_login (context, loginArgs) {
        // let loginInfo = loginApi.login(loginArgs)
        loginApi.login(loginArgs).then((response) => {
            if (response.data.comet_token) {
                context.commit('change_sign_on_state', true)
                context.commit('change_show_state', null)
                cookies.set('session', response.data.session)
            }

            context.commit('change_login_info', response.data)

        })


        // return {'state': loginInfo.state,
                // 'state_message': loginInfo.state_message}
    },
    change_show_state (context, onOrUp) {
        context.commit('change_show_state', onOrUp)
    },
    change_on_up_state (context, onOrUp) {
        context.commit('change_on_up_state', onOrUp)
    },
    log_out (context) {
        context.commit('log_out')
        cookies.remove('userId')
        cookies.remove('session')
        cookies.remove('beans')
    },
    change_message (context, message) {
        context.commit('change_message', message)
    },
    change_user_info (context) {
        loginApi.get_user_info().then((response) => {
            context.commit('change_user_info', response.data)
            cookies.set('userId', response.data.id)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
