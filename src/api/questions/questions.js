import { apiUrl } from '@/api/base.js'
import axios from 'axios'

export default {
    get_question_list (questionListArgs) {
        return axios.get(apiUrl + 'v2/questions', {params: questionListArgs})
    }
}
