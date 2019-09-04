import {apiUrl} from '@/api/base.js'
import axios from 'axios'

export default {
    get_recently_activities () {
        // 返回最新的相关信息，
        // return {
        //     'recently_event': [
        //         {
        //             'title': '没有近期活动'
        //         }
        //     ],
        //     'recently_lou_plus': [
        //         {
        //             'title': '楼+之机器学习实战第5期',
        //             'date': '12月29日',
        //             'id': 999,
        //             'router_name': 'louPlus',
        //             'lou_plus_name': 'ml'
        //         },
        //         {
        //             'title': '楼+之Linux运维与DevOps实战第6期',
        //             'date': '12月29日',
        //             'id': 999,
        //             'router_name': 'louPlus',
        //             'lou_plus_name': 'linux'
        //         }
        //     ],
        //     'hot_path': [
        //         {
        //             'title': 'Python 研发工程师',
        //             'icon': 'https://dn-simplecloud.shiyanlou.com/1471513769430.png?imageView/1/w/25/h/25',
        //             'id': 999,
        //             'router_name': 'path'
        //         },
        //         {
        //             'title': '大数据工程师',
        //             'icon': 'https://dn-simplecloud.shiyanlou.com/1471513926288.png?imageView/1/w/25/h/25',
        //             'id': 999,
        //             'router_name': 'path'

        //         },
        //         {
        //             'title': 'Python 研发工程师',
        //             'icon': 'https://dn-simplecloud.shiyanlou.com/1471513793360.png?imageView/1/w/25/h/25',
        //             'id': 999,
        //             'router_name': 'path'

        //         },
        //         {
        //             'title': 'Python 研发工程师',
        //             'icon': 'https://dn-simplecloud.shiyanlou.com/1471513867033.png?imageView/1/w/25/h/25',
        //             'id': 999,
        //             'router_name': 'path'

        //         },
        //         {
        //             'title': 'Python 研发工程师',
        //             'icon': 'https://dn-simplecloud.shiyanlou.com/1471514004752.png?imageView/1/w/25/h/25',
        //             'id': 999,
        //             'router_name': 'path'

        //         }
        //     ]
        // }
        // let relatedStuff = {}
        return axios.get(apiUrl + 'v2/fringe/recent-activities/')
    },

    get_recently_louplus () {
        return axios.get(apiUrl + 'v2/fringe/recent-louplus-courses/')
    }
}
