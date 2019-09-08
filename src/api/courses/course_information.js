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
    },
    
    follow (query) {
    	let id = query.id
    	return axios.put(`${apiUrl}v2/courses/${id}/follow/`, {session: cookies.get('session')})
    },

    unfollow (query) {
    	let id = query.id
    	return axios.delete(`${apiUrl}v2/courses/${id}/follow/`, {params: {session: cookies.get('session')}})
    },

    join_course (query) {
    	let session = cookies.get('session')
    	let id = query.id
    	return axios.post(`${apiUrl}v2/courses/${id}/join/`, {'session': session})
    }
}
