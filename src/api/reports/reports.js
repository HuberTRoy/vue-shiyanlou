import axios from 'axios'
import { apiUrl } from '@/api/base.js'

export default {
    get_categories () {
        return axios.get(`${apiUrl}v2/courses/categories`)
    },
    get_labreports (args) {
        return axios.get(`${apiUrl}v2/labreports/`, {params: args})
    }
}