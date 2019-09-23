import ReportsApi from '@/api/reports/reports.js'

const state = {
    categories: [],
    labreports_information: {},
    reports_args: {
        // 还有 hot
        sort: 'newest',
        tag: ''
    }
}

const mutations = {
    change_categories (state, categories) {
        state.categories = categories
    },
    change_labreports_information (state, info) {
        state.labreports_information = info
    },
    change_reports_args (state, args) {
        state.reports_args = {...state.reports_args, ...args}
    }
}

const actions = {
    async change_categories (context) {
        // 这个获取出来用于标签, 数据和请求接口都是用的courses/category
        let res = await ReportsApi.get_categories()
        // 只需要全部分类下的标签
        // 索引是0.
        context.commit('change_categories', res.data[0].tags)
    },
    async change_labreports_information (context, args) {
        let res = await ReportsApi.get_labreports(args)
        context.commit('change_labreports_information', res.data)
    },
    change_reports_args (context, args) {
        context.commit('change_reports_args', args)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
