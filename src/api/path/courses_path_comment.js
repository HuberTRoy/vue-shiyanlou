import axios from 'axios'
import { apiUrl } from '@/api/base.js'

export default {
    get_comments (commentArgs) {
        // let pageSize = commentArgs.page_size
        // let id = commentArgs.topic_id
        // let id

        return axios.get(`${apiUrl}v2/comments/`, {params: commentArgs})
    }
}
