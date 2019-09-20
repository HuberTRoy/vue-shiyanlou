import axios from 'axios'
import {apiUrl} from '@/api/base.js'

export default {
    get_course_path_information (pathId) {
        return axios.get(`${apiUrl}v2/paths/${pathId}`)
    },

    get_path_stages (pathId) {
        return axios.get(`${apiUrl}v2/paths/${pathId}/stages`)
    },

    get_louplus () {
        return axios.get(`${apiUrl}v2/fringe/recent-louplus-courses/`)
    }
}
