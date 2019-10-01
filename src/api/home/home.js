import axios from 'axios'

import {apiUrl} from '@/api/base.js'

export default {
    get_index_categories () {
        // [{
        //    'name': '后端开发',
        //    'recommend_courses': [{id:1, name:2...}],
        //    'tags': ['name':2,'html_url':url]
        // }]
        return axios.get(apiUrl + "v2/index/categories")
    },

    get_index_banner () {
        // [{
        //   'picture_url': url,
        //   'background_color': "#000",
        //   'html_url': url 
        // }]
        return axios.get(apiUrl + 'v2/index/banner-pictures')
    },

    get_index_louplus () {
        // [{
        //    html_url: "/louplus/dl"
        //    open_time: "9月3日"
        //    picture_url: "https://dn-simplecloud.shiyanlou.com/course/1565168718677_楼——首页.png"
        //    slug: "dl"
        //    title: "6周成为深度学习工程师" 
        // }]
        return axios.get(apiUrl + 'v2/index/louplus')
        // return axios.get("http://localhost/api/v2/index/louplus", { withCredentials: true })
    },

    // 实验楼官方这里少写了一个i, class i fication 不过无伤大雅。
    get_classfication_courses () {
        return axios.get(apiUrl + 'v2/index/classfication-courses')

    },

    get_index_bootcamps () {
        return axios.get(apiUrl + "v2/index/bootcamps")
    },

    get_paths () {
        return axios.get(apiUrl + 'v2/index/paths')
    }
}
