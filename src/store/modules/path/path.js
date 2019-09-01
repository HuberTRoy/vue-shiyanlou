import PathApi from '../../../api/path/path.js'
import CoursePathApi from '../../../api/path/course_path.js'
import CommentApi from '../../../api/path/courses_path_comment.js'

const state = {
    path_information: {},
    course_path_information: {},
    path_courses_detail_nav: 'detail',
    comment_information: {},
    courses_path_id: 0,
    comment_args: {
        'page_size': 10,
        'current_page': 1,
        'total_page': 1
    }
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

    change_path_courses_detail_nav (state, pathCoursesNav) {
        state.path_courses_detail_nav = pathCoursesNav
    },

    change_comment_information (state, commentInformation) {
        state.comment_information = commentInformation
        state.comment_args.total_page = Math.ceil(commentInformation.total_comments / commentInformation.page_size)
    },

    change_comment_current_page (state, page) {
        state.comment_args.current_page = page
    }
}

const actions = {
    change_path_information (context) {
        let pathInformation = PathApi.get_path_information()
        context.commit('change_path_information', pathInformation)
    },

    change_course_path_information (context, pathId) {
        let coursePathInformation = CoursePathApi.get_course_path_information(pathId)
        context.commit('change_course_path_information', coursePathInformation)
    },

    change_path_courses_detail_nav (context, pathCoursesNav) {
        context.commit('change_path_courses_detail_nav', pathCoursesNav)
    },

    change_comment_information (context, commentArgs) {
        let commentInformation = CommentApi.get_comments(commentArgs)
        context.commit('change_comment_information', commentInformation)
    },

    change_comment_current_page (context, commentPageArgs) {
        if (commentPageArgs.pageNumber === '...' ||
            commentPageArgs.pageNumber === '... ') {
            return
        }
        context.commit('change_comment_current_page', commentPageArgs.pageNumber)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
