import axios from 'axios'
import { apiUrl } from '@/api/base.js'

export default {
    get_live_courses (args) {
        return axios.get(`${apiUrl}/v2/live-courses/`, {params: args})
    }
}
