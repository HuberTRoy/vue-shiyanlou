import axios from 'axios'
import {api_url} from '@/api/base.js'

export default {
    get_courses_categories () {
        return axios.get(api_url + 'v2/courses/categories')
    },
    get_courses_content (query) {
        // qeruy: {query: value}
        return axios.get(api_url + 'v2/courses', {params: query})

    }
}
