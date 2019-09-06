import axios from 'axios'
import {apiUrl} from '@/api/base.js'

export default {
    get_course_information (courseId) {
        return axios.get(`${apiUrl}v2/courses/${courseId}`)
    },

    get_course_labs (courseId) {
        return axios.get(`${apiUrl}v2/courses/${courseId}/labs`)
    }
}
