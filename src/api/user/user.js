import axios from 'axios'
import { apiUrl } from '@/api/base.js'


export default {
    get_user_info (userArgs) {
        // userArgs
        // id

        return axios.get(`${apiUrl}v2/users/${userArgs.id}`)
    },

    get_user_learning_record (userArgs) {
        // userArgs
        // id
        // end_time
        let dateStamp = Math.floor(new Date(userArgs.end_time).getTime() / 1000)

        let result = {}

        // +1
        let wholeDayInAYear

        if ((new Date(userArgs.end_time).getFullYear() - 1) % 4 === 0) {
            wholeDayInAYear = 367
        } else {
            wholeDayInAYear = 366
        }

        for (let i = 0; i < wholeDayInAYear; i++) {
            result[dateStamp - 86400 * i] = Math.floor(Math.random() * 130)
        }

        return result
    },

    // courses
    get_user_courses_info (userArgs) {
        // userArgs
        // id
        // type
        // page

        if (userArgs.type === 'studied') {
            return this.get_user_learned_courses(userArgs)
        } else if (userArgs.type === 'followed') {
            return this.get_user_follow_courses(userArgs)
        }
    },

    get_courses_content_userstatus (args) {
        return axios.get(`${apiUrl}v2/courses/userstatus/`, {params: args})
    },

    get_user_learned_courses (args) {
        // args
        // id
        // type
        // cursor
        let id = args.id
        return axios.get(`${apiUrl}v2/users/${id}/courses/`, {params: args})
    },

    get_user_follow_courses (args) {
        // args
        // id
        // type
        let id = args.id
        return axios.get(`${apiUrl}v2/users/${id}/courses/`, {params: args})
    },

    get_user_courses_question (args) {
        // args
        // user_id
        // courses_id
        // page
        let id = args.user_id
        let course_id = args.course_id
        return axios.get(`${apiUrl}v2/users/${id}/questions/`, { params: args })

    },

    get_user_courses_report (args) {
        // args
        // user_id
        // courses_id
        // page
        let id = args.user_id
        let course_id = args.course_id
        return axios.get(`${apiUrl}v2/labreports/`, { params: args })
    },

    // path
    get_user_path_info (args) {
        // args
        // id
        // page
        let id = args.id
        return axios.get(`${apiUrl}v2/users/${id}/paths/`)
    },

    // report
    get_user_report_info (args) {
        let id = args.id
        return axios.get(`${apiUrl}v2/users/${id}/labreports/`)
    },

    // discuss
    get_user_discuss_info (args) {
        let id = args.id
        return axios.get(`${apiUrl}v2/users/${id}/questions/`, { params: args })        
    }
}
