import axios from 'axios'

import { apiUrl } from '@/api/base.js'

export default {
    get_challenges (args) {
        return axios.get(`${apiUrl}/v2/challenges/`, { params: args })
    },
    get_challenges_tags () {
        return axios.get(`${apiUrl}/v2/challenges/tags/`)
    },
    get_challenges_userstatus (args) {
        return axios.get(`${apiUrl}/v2/challenges/userstatus/`, { params: args })
    },

    get_contests (args) {
        return axios.get(`${apiUrl}/v2/contests/`, { params: args })
    },

    get_contest_rank (args) {
        return axios.get(`${apiUrl}/v2/contests/${args.contest_name}/rank/`, { params: args })
    },

    get_contests_rank (args) {
        return axios.get(`${apiUrl}/v2/contests/rank/`, { params: args })
    }
}