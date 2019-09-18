import axios from 'axios'
import { apiUrl } from '@/api/base.js'

export default {
    get_index_content () {
        // 包括首页(全部教程)的导航及展示信息。
        return axios.get(`${apiUrl}v2/library/`)
    },
    get_library_content (args) {
        return axios.get(`${apiUrl}v2/library/books/`, {params: args})
    } 
}