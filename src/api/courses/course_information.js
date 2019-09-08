import axios from 'axios'
import {apiUrl} from '@/api/base.js'
import cookies from 'vue-cookies'

export default {
    get_course_information (courseId) {
        return axios.get(`${apiUrl}v2/courses/${courseId}`)
    },

    get_course_labs (courseId) {
        return axios.get(`${apiUrl}v2/courses/${courseId}/labs`)
    },
    get_course_userstatus (query) {
    	let session = cookies.get('session')
    	query['session'] = session
    	return axios.get(apiUrl + 'v2/courses/userstatus/', {params: query})
    }
}
