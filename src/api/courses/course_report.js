import axios from 'axios'
import { apiUrl } from '@/api/base.js'

export default {
    get_report (reportArgs) {
        // reportArgs
        // let courseId = reportArgs.course_id
        // let reportCategoryId = reportArgs.category_id
        // let page = reportArgs.page
        // let pageSize = reportArgs.page_size
        return axios.get(`${apiUrl}v2/labreports/`, {params: reportArgs})

    }
}
