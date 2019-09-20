import ProfileApi from '@/api/user/user.js'

const state = {
    // base_info: 基本信息
    // secret: 账号密码
    // mail_setting: 邮件通知
    // code: 兑换码
    nav_bar: "base_info",
    mail_setting_message: '',
    password_message: '',
    // 这个是邮件通知, 和上面那个message 没关系, 上面那个是修改邮箱时的错误通知。
    mail_settings: {}
}

const mutations = {
    change_nav_bar (state, bar) {
        state.nav_bar = bar
    },
    change_mail_setting_message (state, message) {
        state.mail_setting_message = message
    },
    change_password_message (state, message) {
        state.password_message = message
    },
    change_mail_settings (state, settings) {
        state.mail_settings = settings
    }
}

const actions = {
    change_nav_bar (context, bar) {
        context.commit('change_nav_bar', bar)
    },
    save_base_info (context, baseInfo) {
        return ProfileApi.save_profile_base_info(baseInfo)
            // context.dispatch('loginState/chang_user_info_by_data', response)
    },
    change_mail_setting_message (context, message) {
        context.commit('change_mail_setting_message', message)
    },
    async change_email (context, args) {
        let response = await ProfileApi.change_email(args)
        context.commit('change_mail_setting_message', response.data.message)
        if (!response.data.message) {
            return 'OK'
        }
    },
    async change_password (context, args) {
        let response = await ProfileApi.change_password(args)
        context.commit('change_password_message', response.data.message)
        if (!response.data.message) {
            return 'OK'
        }
    },
    async get_mail_settings (context) {
        let response = await ProfileApi.get_mail_settings()
        context.commit('change_mail_settings', response.data)   
    },
    async change_mail_settings (context, args) {
        let response = await ProfileApi.change_mail_settings(args)
        context.commit('change_mail_settings', response.data)
    },

    get_upload_key (context, args) {
        return ProfileApi.get_upload_key(args)
    },

    get_qiniu_api (context, args) {
        return ProfileApi.get_qiniu_api(args)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}