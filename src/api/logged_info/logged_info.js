import axios from 'axios'
import cookies from 'vue-cookies'

import { apiUrl } from '@/api/base.js'

export default {
    get_studied_courses () {
        //  
        let userId = cookies.get('userId')
        return axios.get(`${apiUrl}v2/users/${userId}/courses/?page_size=5&type=studied`)
    }
}
