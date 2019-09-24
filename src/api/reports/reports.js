import axios from 'axios'
import { apiUrl } from '@/api/base.js'

export default {
    get_categories () {
        return axios.get(`${apiUrl}v2/courses/categories`)
    },
    get_labreports (args) {
        return axios.get(`${apiUrl}v2/labreports/`, {params: args})
    },
    get_report_information (args) {
        return axios.get(`${apiUrl}v2/labreports/${args.id}/?view=detail`)
    },
    get_learn_data (args) {
        return axios.get(`${apiUrl}v2/labreports/${args.id}/learn-data/`)
    },
    get_related (args) {
        return axios.get(`${apiUrl}v2/labreports/${args.id}/related/`)
    }
}