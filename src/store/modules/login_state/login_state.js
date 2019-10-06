import loginApi from '@/api/login/login.js'
import cookies from 'vue-cookies'

const state = {
    show_login_dialog: false,
    // on 表示 显示的是登录框，up 则是注册框
    on_or_up: 'on',
    sign_on: cookies.get('session') ? true : false,
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
        state.on_or_up = onOrUp
    },
    change_on_up_state (state, onOrUp) {
        state.on_or_up = onOrUp
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
    },
    change_avatar_by_url (state, url) {
        state.user_info.avatar_url = url
    }
}

const actions = {
    get_and_change_all_login (context, loginArgs) {
        // let loginInfo = loginApi.login(loginArgs)
        loginApi.login(loginArgs).then((response) => {
            if (response.data.comet_token) {
                context.commit('change_sign_on_state', true)
                if (!loginArgs.login_page) {
                    context.commit('change_show_state', null)
                }
                cookies.set('session', response.data.session)
            }

            context.commit('change_login_info', response.data)
        })
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
            if (!cookies.get('userId')) {
                cookies.set('userId', response.data.id)
            }
        })
    },
    change_user_info_by_data (context, data) {
        context.commit('change_user_info', data)
    },
    change_avatar_by_url (context, url) {
        context.commit('change_avatar_by_url', url)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
