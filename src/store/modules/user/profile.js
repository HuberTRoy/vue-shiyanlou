const state = {
    // base_info: 基本信息
    // secret: 账号密码
    // mail_setting: 邮件通知
    // code: 兑换码
    nav_bar: "base_info",
}

const mutations = {
    change_nav_bar (state, bar) {
        state.nav_bar = bar
    }
}

const actions = {
    change_nav_bar (context, bar) {
        context.commit('change_nav_bar', bar)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}