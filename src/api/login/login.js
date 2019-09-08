import axios from 'axios'
import { apiUrl } from '@/api/base.js'
import cookies from 'vue-cookies'

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

axios.defaults.headers.post['X-CSRFToken'] = getCookie('csrftoken')

export default {
    login (loginArgs) {
        return axios.post(`${apiUrl}v2/auth/login`, loginArgs)
    },

    get_user_info () {
        let session = cookies.get('session')
        return axios.get(`${apiUrl}v2/user/`, { params: {'session': session} })
    }
}
