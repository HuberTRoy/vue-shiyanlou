import axios from 'axios'
import { apiUrl } from '@/api/base.js'
import cookies from 'vue-cookies'

export default {
    get_course_comments (commentArgs) {
        return axios.get(`${apiUrl}v2/comments/`, { params: commentArgs })
    },
    post_comment (commentArgs) {
        let session = cookies.get('session')
        commentArgs['session'] = session
        return axios.post(`${apiUrl}v2/comments/`, commentArgs)
    },
    get_comments_userstatus (commentArgs) {
        let session = cookies.get('session')
        commentArgs['session'] = session
        return axios.get(`${apiUrl}v2/comments/userstatus/`, { params: commentArgs })
    },
    delete_comment (commentArgs) {
        let id = commentArgs.id
        let session = cookies.get('session')
        return axios.delete(`${apiUrl}v2/comments/${id}/`, { params: {'session': session} })
    }
}
