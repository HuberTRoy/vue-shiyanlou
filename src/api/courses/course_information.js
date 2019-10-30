import axios from 'axios'
import {apiUrl} from '@/api/base.js'

export default {
    get_course_information (courseId) {
        return axios.get(`${apiUrl}v2/courses/${courseId}`)
    },

    get_course_labs (courseId) {
        return axios.get(`${apiUrl}v2/courses/${courseId}/labs`)
    },
    
    get_course_userstatus (query) {
    	return axios.get(apiUrl + 'v2/courses/userstatus/', {params: query})
    },
    
    follow (query) {
    	let id = query.id
    	return axios.put(`${apiUrl}v2/courses/${id}/follow/`)
    },

    unfollow (query) {
    	let id = query.id
    	return axios.delete(`${apiUrl}v2/courses/${id}/follow/`)
    },

    join_course (query) {
    	 
    	let id = query.id
    	return axios.post(`${apiUrl}v2/courses/${id}/join/`)
    }
}
