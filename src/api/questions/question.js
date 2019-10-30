import axios from 'axios'
import { apiUrl } from '@/api/base.js'

export default {
    get_question_information (questionArgs) {
        // questionArgs
        // id
        let id = questionArgs.id
        return axios.get(`${apiUrl}v2/questions/${id}`)
    },

    get_question_reply (questionArgs) {
        // questionArgs
        // id
        // cursor
        let id = questionArgs.id
        let cursor = questionArgs.cursor

        return axios.get(`${apiUrl}v2/questions/${id}/answers/`, {params: {'cursor': cursor}})
    },

    get_related_question (questionArgs) {
        let id = questionArgs.id

        return axios.get(`${apiUrl}v2/questions/${id}/related-questions/`)
    },

    reply_question (questionArgs) {
        let id = questionArgs.id
        return axios.post(`${apiUrl}v2/questions/${id}/answers/`, {'content': questionArgs.content})
    },

    reply_question_comment (questionArgs) {
        let id = questionArgs.id
        return axios.post(`${apiUrl}v2/questions/${id}/answers/`, {'content': questionArgs.content,
                                                                   'parent_id': questionArgs.parent_id})
    },

    publish_question (questionArgs) {
        return axios.post(`${apiUrl}v2/questions/`, questionArgs)
    }
}
