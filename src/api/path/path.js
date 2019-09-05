import axios from 'axios'
import { apiUrl } from '@/api/base.js'

export default {
    get_path_information () {
        return axios.get(apiUrl + 'v2/paths')
        // return {
        //     'path_items': [
        //         {
        //             'path_id': 999,
        //             'path_name': '新手入门',
        //             'path_description': '99门课程',
        //             'path_img_url': 'https://dn-simplecloud.shiyanlou.com/1487741005890.png'
        //         }, {
        //             'path_id': 9999,
        //             'path_name': 'Python研发工程师',
        //             'path_description': '99门课程',
        //             'path_img_url': 'https://dn-simplecloud.shiyanlou.com/course/1535685629919_2Python研发工程师.png'
        //         }, {
        //             'path_id': 99999,
        //             'path_name': '大数据工程师',
        //             'path_description': '99门课程',
        //             'path_img_url': 'https://dn-simplecloud.shiyanlou.com/1487741048998.png'
        //         }, {
        //             'path_id': 999999,
        //             'path_name': '大数据工程师',
        //             'path_description': '99门课程',
        //             'path_img_url': 'https://dn-simplecloud.shiyanlou.com/1487741070013.png'
        //         }, {
        //             'path_id': 9999999999999999,
        //             'path_name': '大数据工程师',
        //             'path_description': '99门课程',
        //             'path_img_url': 'https://dn-simplecloud.shiyanlou.com/1487741143862.png'
        //         }, {
        //             'path_id': 99999999999999999,
        //             'path_name': '大数据工程师',
        //             'path_description': '99门课程',
        //             'path_img_url': 'https://dn-simplecloud.shiyanlou.com/course/1540459341383_%E3%80%90%E8%B7%AF%E5%BE%84%E3%80%91-%E3%80%90Java%E7%A0%94%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88%E3%80%91.png'
        //         }, {
        //             'path_id': 9999999,
        //             'path_name': '大数据工程师',
        //             'path_description': '99门课程',
        //             'path_img_url': 'https://dn-simplecloud.shiyanlou.com/1487741188918.png'
        //         }, {
        //             'path_id': 99999999,
        //             'path_name': '大数据工程师',
        //             'path_description': '99门课程',
        //             'path_img_url': 'https://dn-simplecloud.shiyanlou.com/uid/c7edc0e1f2cfc8f40d1b699aaa32766b/1501840618053.png'
        //         }, {
        //             'path_id': 999999999,
        //             'path_name': '大数据工程师',
        //             'path_description': '99门课程',
        //             'path_img_url': 'https://dn-simplecloud.shiyanlou.com/uid/c7edc0e1f2cfc8f40d1b699aaa32766b/1501839495188.png'
        //         }, {
        //             'path_id': 9999999999,
        //             'path_name': '大数据工程师',
        //             'path_description': '99门课程',
        //             'path_img_url': 'https://dn-simplecloud.shiyanlou.com/uid/c7edc0e1f2cfc8f40d1b699aaa32766b/1501837346458.png'
        //         }
        //     ]
        // }
    }
}
