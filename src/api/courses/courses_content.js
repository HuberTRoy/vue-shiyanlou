import axios from 'axios'
import {apiUrl} from '@/api/base.js'

export default {
    get_courses_categories () {
        return axios.get(apiUrl + 'v2/courses/categories')
    },
    get_courses_content (query) {
        // qeruy: {query: value}
        return axios.get(apiUrl + 'v2/courses', {params: query})

    }
}
