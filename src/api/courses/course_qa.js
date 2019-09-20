import axios from 'axios'
import { apiUrl } from '@/api/base.js'
export default {
    get_qa (qaArgs) {
        // qaArgs
        // let pageSize = qaArgs.page_size
        // let courseId = qaArgs.course_id
        // let page = qaArgs.page
        return axios.get(`${apiUrl}v2/questions/`, { params: qaArgs })
    }
}
