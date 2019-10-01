import coursesApi from '../../../api/courses/courses_content.js'
import router from '@/router'

const state = {
    current_category: '全部',
    current_tag: '全部',
    current_base_order: '综合',
    current_category_order: '已上线',
    current_type_order: '全部',
    current_page: 1,
    all_page: 1,
    courses_content: {
            'count': 99,
            'next': 'http://url',
            'page': 1,
            'previous': 'http://url',
            'page_size': 20,
            'results': []
    },
    courses_category: {
        'name': '全部',
        'tags': [1,2,3]
    },
    // 汉字对应的查询英文
    // 包含所有参数，不分类。
    query_dict: {
        '全部': 'all',
        '已上线': 'false',
        '即将上线': 'true',
        '综合': 'default',
        '最新': 'latest',
        '最热': 'hotest',
        '免费': 'free',
        '会员': 'member',
        '私有课': 'private'
    }
}

const getters = {
    showing_page_info: state => {
                let p = []
                for (var i = 1; i <= state.all_page; i++) {
                    p.push(i)
                    if (i === 2) {
                        p.push('...')
                    } else if (i === state.all_page - 2) {
                        p.push('... ')
                    }
                }
                console.log(p);
                return p
            }
}

const mutations = {
    router_to (state) {
        router.push({
            path: '/courses',
            query: { category: state.current_category,
                     tag: state.current_tag,
                     sort: state.query_dict[state.current_base_order],
                     preview: state.query_dict[state.current_category_order],
                     fee: state.query_dict[state.current_type_order],
                     page: state.current_page
                    }})
    },

    change_courses_content (state, content) {
        state.courses_content = content
        state.all_page = Math.ceil(content['count'] / content['page_size'])
    },
    change_courses_category (state, content) {
        state.courses_category = content
    },
    change_current_category (state, category) {
        state.current_category = category
        // 更改大分类时会将选取的小分类初始化。
        state.current_tag = '全部'
        // page也会初始化
        state.current_page = 1
    },

    change_current_tag (state, tag) {
        state.current_tag = tag
        state.current_page = 1
    },

    change_current_base_order (state, order) {
        state.current_base_order = order
        state.current_page = 1
    },

    change_current_category_order (state, category) {
        state.current_category_order = category
        state.current_page = 1
    },

    change_current_type_order (state, type) {
        state.current_type_order = type
        state.current_page = 1
    },

    change_current_page (state, page) {
        state.current_page = page
    },

    change_query (state, query) {
        for (let [q, v] of Object.entries(query)) {
            state['current_' + q] = v
        }
    }
}

const actions = {
    change_courses_content ({ commit, state }, query) {
        let queryDict = { category: state.current_category,
                     tag: state.current_tag,
                     base_order: state.current_base_order,
                     category_order: state.current_category_order,
                     type_order: state.current_type_order,
                     page: state.current_page
                 }

        for (let [q, v] of Object.entries(query)) {
            queryDict[q] = v

            if (!isNaN(v)) {
                queryDict[q] = parseInt(v)
            }


        }

        commit('change_query', queryDict)
        coursesApi.get_courses_content(queryDict).then(function (courseContent) {
                commit('change_courses_content', courseContent.data)
            }
        )
    },

    change_courses_category (context) {
        coursesApi.get_courses_categories().then((coursesCategory) => {
            for (let tags of coursesCategory.data) {
                tags.tags.unshift('全部')
            }
            context.commit('change_courses_category', coursesCategory.data)
        })
    },

    router_to (context) {
        context.commit('router_to')
    },

    change_current_category (context, category) {
        context.commit('change_current_category', category)
        context.commit('router_to')
    },

    change_current_tag (context, tag) {
        context.commit('change_current_tag', tag)
        context.commit('router_to')
    },

    change_current_base_order (context, order) {
        context.commit('change_current_base_order', order)
        context.commit('router_to')
    },

    change_current_category_order (context, category) {
        context.commit('change_current_category_order', category)
        context.commit('router_to')
    },

    change_current_type_order (context, type) {
        context.commit('change_current_type_order', type)
        context.commit('router_to')
    },

    change_current_page ({commit, state}, page) {
        if (page > state.all_page || page < 1 || page === '...') {
            return
        }

        commit('change_current_page', page)
        commit('router_to')
    }

    // change_query (context, query) {
    //     context.commit('change_query', query)
    //     context.commit('router_to')
    // }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
