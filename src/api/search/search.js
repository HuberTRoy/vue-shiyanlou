import axios from 'axios'

import { apiUrl } from '@/api/base.js'

export default {
    get_search_result (args) {
        return new Promise(function(resolve, reject) {
            setTimeout(()=>{
                resolve({'next': null, 'prev': null, results: []})
            }, 500)
        })
    }
}