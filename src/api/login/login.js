import axios from 'axios'
import { apiUrl } from '@/api/base.js'

// axios.default.withCredentials = true

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

        return axios.post( `${apiUrl}v2/auth/login`, loginArgs)
        // loginArgs
        // username, password, verification code

        // test success
        // return {
        //     'state': true,
        //     'state_message': 'OK',
        //     'id': 9999,
        //     'level': 9,
        //     'nickname': 'Cyrbuzz',
        //     'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //     'history': [
        //         {
        //             'course_id': 8,
        //             'course_title': '玩转Python1'
        //         },
        //         {
        //             'course_id': 9,
        //             'course_title': '玩转Python2'
        //         }
        //     ],
        //     'messages_count': 0,
        //     'learn_time': 0
        // }
        // test failed
    }
}
