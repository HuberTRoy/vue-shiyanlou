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
    course_item_category: {
                'courses_category': ['全部', '后端开发', 'Linux运维', '云计算与大数据', '数据库', '信息安全', 'Web前端', '计算机专业课', '其他技术'],
                'sub_courses_category': [
                                        {'name': 'Python',
                                        'category': ['全部', '后端开发']},
                                        {'name': 'PHP',
                                        'category': ['全部', '后端开发']},
                                        {'name': 'Java',
                                        'category': ['全部', '后端开发']},
                                        {'name': 'OpenCV',
                                        'category': ['全部', '后端开发']},
                                        {'name': 'Ruby',
                                        'category': ['全部', '后端开发']},
                                        {'name': 'C++',
                                        'category': ['全部', '后端开发']},
                                        {'name': 'C',
                                        'category': ['全部', '后端开发']},
                                        {'name': 'NodeJS',
                                        'category': ['全部', '后端开发']},
                                        {'name': 'GO',
                                        'category': ['全部', '后端开发']},
                                        {'name': 'Flask',
                                        'category': ['全部', '后端开发']},
                                        {'name': 'Linux',
                                        'category': ['全部', 'Linux运维']},
                                        {'name': 'Shell',
                                        'category': ['全部', 'Linux运维']},
                                        {'name': 'Nginx',
                                        'category': ['全部', 'Linux运维']},
                                        {'name': 'SQL',
                                        'category': ['全部', '数据库']},
                                        {'name': 'MongoDB',
                                        'category': ['全部', '数据库']},
                                        {'name': 'MySQL',
                                        'category': ['全部', '数据库']},
                                        {'name': 'Redis',
                                        'category': ['全部', '数据库']},
                                        {'name': 'HTML5',
                                        'category': ['全部', 'Web前端']},
                                        {'name': 'CSS3',
                                        'category': ['全部', 'Web前端']},
                                        {'name': 'React',
                                        'category': ['全部', 'Web前端']},
                                        {'name': 'Bootstrap',
                                        'category': ['全部', 'Web前端']}]
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
                     base_order: state.current_base_order,
                     category_order: state.current_category_order,
                     type_order: state.current_type_order,
                     page: state.current_page
                    }})
    },

    change_courses_content (state, content) {
        state.courses_content = content
        state.all_page = Math.ceil(content['count'] / content['page_size'])
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
