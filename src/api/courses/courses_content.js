import axios from 'axios'

const api_url = 'http://localhost:8000/api/'

export default {
    get_courses_categories () {
        return axios.get(api_url + 'v2/courses/categories')
    },
    get_courses_content (query) {
        // qeruy: {query: value}
        return axios.get(api_url + 'v2/courses', {params: query})

    }
}
