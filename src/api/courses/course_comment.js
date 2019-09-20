import axios from 'axios'
import { apiUrl } from '@/api/base.js'
import cookies from 'vue-cookies'

export default {
    get_course_comments (commentArgs) {
        return axios.get(`${apiUrl}v2/comments/`, { params: commentArgs })
    },
    post_comment (commentArgs) {
         
        return axios.post(`${apiUrl}v2/comments/`, commentArgs)
    },
    get_comments_userstatus (commentArgs) {
         
        return axios.get(`${apiUrl}v2/comments/userstatus/`, { params: commentArgs })
    },
    delete_comment (commentArgs) {
        let id = commentArgs.id
         
        return axios.delete(`${apiUrl}v2/comments/${id}/` )
    },
    reply_comment (commentArgs) {
        // commentArgs
        // ...
        // parent_id: 111
         
        return axios.post(`${apiUrl}v2/comments/`, commentArgs)       
    }
}
