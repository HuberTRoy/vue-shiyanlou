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
    },

    get_userstatus (args) {
        return axios.get(`${apiUrl}v2/paths/userstatus/`, {params: args})
    },

    join_and_delete_path (args) {
        if (args.method == 'POST'){
            return axios.post(`${apiUrl}v2/paths/${args.id}/join/`)
        }else{
            return axios.delete(`${apiUrl}v2/paths/${args.id}/join/`)
        }
    }
}
