import axios from 'axios'

import { apiUrl } from '@/api/base.js'

export default {
    get_search_result (args) {
        return axios.get(`${apiUrl}v2/search/`, {params: args})
    }
}