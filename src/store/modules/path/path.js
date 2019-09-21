import PathApi from '@/api/path/path.js'
import CoursePathApi from '@/api/path/course_path.js'
import CommentApi from '@/api/path/courses_path_comment.js'

const state = {
    path_information: {},
    course_path_information: {},
    course_path_userstatus: {},
    path_courses_detail_nav: 'detail',
    comment_information: {},
    courses_path_id: 0,
    comment_args: {
        'page_size': 15,
        'topic_id': 0,
        'topic_type': 'path'
    },
    stages: [],
    cursor: '',
}

const getters = {
    showing_page_info: state => {
                let p = []
                for (var i = 1; i <= state.comment_args.total_page; i++) {
                    p.push(i)
                    if (i === 2) {
                        p.push('...')
                    } else if (i === state.comment_args.total_page - 2) {
                        p.push('... ')
                    }
                }
                return p
            }
}

const mutations = {
    change_path_information (state, pathInformation) {
        state.path_information = pathInformation
    },

    change_course_path_information (state, coursePathInformation) {
        state.course_path_information = coursePathInformation
    },

    change_course_path_stage_information (state, stageInformation) {
        state.stages = stageInformation
    },

    change_path_courses_detail_nav (state, pathCoursesNav) {
        state.path_courses_detail_nav = pathCoursesNav
    },

    change_comment_information (state, commentInformation) {
        state.comment_information = commentInformation
        state.comment_args.total_page = Math.ceil(commentInformation.total_comments / commentInformation.page_size)
    },

    change_comment_current_page (state, page) {
        state.comment_args.current_page = page
    },

    change_cursor (state, cursor) {
        state.cursor = cursor
    },

    change_recently_louplus (state, recentlyLouplus) {
        state.course_path_information['recently_louplus'] = recentlyLouplus
    },

    change_course_path_userstatus (state, pathUserstatus) {
        state.course_path_userstatus = pathUserstatus
    }
}

const actions = {
    change_path_information (context) {
        // let pathInformation = PathApi.get_path_information()
        PathApi.get_path_information().then((response) => {
            context.commit('change_path_information', response.data)
        })
    },

    change_course_path_information (context, pathId) {
        // path basic information
        CoursePathApi.get_course_path_information(pathId).then((response) => {
            context.commit('change_course_path_information', response.data)
        })

        CoursePathApi.get_path_stages(pathId).then((response) => {
            context.commit('change_course_path_stage_information', response.data)
        })

        CoursePathApi.get_louplus().then((response)=> {
            context.commit('change_recently_louplus', response.data)
        })
    },

    change_path_courses_detail_nav (context, pathCoursesNav) {
        context.commit('change_path_courses_detail_nav', pathCoursesNav)
    },

    change_comment_information (context, commentArgs) {
        // let commentInformation = CommentApi.get_comments(commentArgs)
        CommentApi.get_comments(commentArgs).then((response) => {
            context.commit('change_comment_information', response.data)
        })
    },

    change_comment_current_page (context, commentPageArgs) {
        if (commentPageArgs.pageNumber === '...' ||
            commentPageArgs.pageNumber === '... ') {
            return
        }
        context.commit('change_comment_current_page', commentPageArgs.pageNumber)
    },

    change_cursor (context, cursor) {
        context.commit('change_cursor', cursor)
    },

    async change_course_path_userstatus (context, args) {
        let userstatus = await CoursePathApi.get_userstatus(args)
        context.commit('change_course_path_userstatus', userstatus.data)  
    },

    async join_and_delete_path (context, args) {
        let res = await CoursePathApi.join_and_delete_path(args)
        if (res.status < 299) {
            if (args.method=='POST') {
                context.commit('change_course_path_userstatus', [{'is_joined': true}])
            } else {
                context.commit('change_course_path_userstatus', [{'is_joined': false}])
            }
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
