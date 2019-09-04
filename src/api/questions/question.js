import axios from 'axios'
import { apiUrl } from '@/api/base.js'

export default {
    get_question_information (questionArgs) {
        // questionArgs
        // id
        let id = questionArgs.id
        return axios.get(`${apiUrl}v2/questions/${id}`)
        // return {
        //     'question_tag': '交流讨论',
        //     'question_id': id,
        //     'answer_number': 99,
        //     'view_number': 99,
        //     'question_title': 'Test text for Question Hoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
        //     'author': {
        //         'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //         'created_time': '2019-01-03T02:26:00Z',
        //         'home_page': '/user/1',
        //         'id': 123,
        //         'level': 99,
        //         'is_member': false,
        //         'is_teacher': false,
        //         'name': 'Shiyanlou'
        //     },
        //     'created_time': '2019-01-03T02:26:00Z',
        //     'source': '',
        //     'content': '这是一条测试文本，❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤'

        // }
    },

    get_question_reply (questionArgs) {
        // questionArgs
        // id
        // cursor
        let id = questionArgs.id
        let cursor = questionArgs.cursor

        return axios.get(`${apiUrl}v2/questions/${id}/answers/`, {params: {'cursor': cursor}})
        // return {
        //     'reply': [
        //         {
        //             'author': {
        //                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                 'created_time': '2019-01-03T02:26:00Z',
        //                 'home_page': '/user/1',
        //                 'id': 123,
        //                 'level': 99,
        //                 'is_member': false,
        //                 'is_teacher': false,
        //                 'name': 'Shiyanlou'
        //             },

        //             'content': '这是另外的一条测试文本，❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤',
        //             'up_thumb': 9,
        //             'created_time': '2019-01-03T02:26:00Z',
        //             '@user': {
        //                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                 'created_time': '2019-01-03T02:26:00Z',
        //                 'home_page': '/user/1',
        //                 'id': 123,
        //                 'level': 99,
        //                 'is_member': false,
        //                 'is_teacher': false,
        //                 'name': 'Shiyanlou'
        //             }
        //         },
        //         {
        //             'author': {
        //                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                 'created_time': '2019-01-03T02:26:00Z',
        //                 'home_page': '/user/1',
        //                 'id': 123,
        //                 'level': 99,
        //                 'is_member': false,
        //                 'is_teacher': false,
        //                 'name': 'Shiyanlou'
        //             },

        //             'content': '这是另外的一条测试文本，❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤',
        //             'up_thumb': 9,
        //             'created_time': '2019-01-03T02:26:00Z',
        //             '@user': {
        //                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                 'created_time': '2019-01-03T02:26:00Z',
        //                 'home_page': '/user/1',
        //                 'id': 123,
        //                 'level': 99,
        //                 'is_member': false,
        //                 'is_teacher': false,
        //                 'name': 'Shiyanlou'
        //             }
        //         },
        //         {
        //             'author': {
        //                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                 'created_time': '2019-01-03T02:26:00Z',
        //                 'home_page': '/user/1',
        //                 'id': 123,
        //                 'level': 99,
        //                 'is_member': false,
        //                 'is_teacher': false,
        //                 'name': 'Shiyanlou'
        //             },

        //             'content': '这是另外的一条测试文本，❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤',
        //             'up_thumb': 9,
        //             'created_time': '2019-01-03T02:26:00Z',
        //             '@user': {
        //                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                 'created_time': '2019-01-03T02:26:00Z',
        //                 'home_page': '/user/1',
        //                 'id': 123,
        //                 'level': 99,
        //                 'is_member': false,
        //                 'is_teacher': false,
        //                 'name': 'Shiyanlou'
        //             }
        //         },
        //         {
        //             'author': {
        //                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                 'created_time': '2019-01-03T02:26:00Z',
        //                 'home_page': '/user/1',
        //                 'id': 123,
        //                 'level': 99,
        //                 'is_member': false,
        //                 'is_teacher': false,
        //                 'name': 'Shiyanlou'
        //             },

        //             'content': '这是另外的一条测试文本，❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤',
        //             'up_thumb': 9,
        //             'created_time': '2019-01-03T02:26:00Z',
        //             '@user': {
        //                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                 'created_time': '2019-01-03T02:26:00Z',
        //                 'home_page': '/user/1',
        //                 'id': 123,
        //                 'level': 99,
        //                 'is_member': false,
        //                 'is_teacher': false,
        //                 'name': 'Shiyanlou'
        //             }
        //         },
        //         {
        //             'author': {
        //                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                 'created_time': '2019-01-03T02:26:00Z',
        //                 'home_page': '/user/1',
        //                 'id': 123,
        //                 'level': 99,
        //                 'is_member': false,
        //                 'is_teacher': false,
        //                 'name': 'Shiyanlou'
        //             },

        //             'content': '这是另外的一条测试文本，❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤',
        //             'up_thumb': 9,
        //             'created_time': '2019-01-03T02:26:00Z',
        //             '@user': {
        //                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                 'created_time': '2019-01-03T02:26:00Z',
        //                 'home_page': '/user/1',
        //                 'id': 123,
        //                 'level': 99,
        //                 'is_member': false,
        //                 'is_teacher': false,
        //                 'name': 'Shiyanlou'
        //             }
        //         }
        //     ]
        // }
    },

    get_related_question (questionArgs) {
        // questionArgs
        // id
        return {
            'total': 10,
            'items': [
                {
                    'title': '不觉晴光老',
                    'id': 9998
                },
                {
                    'title': '不觉晴光老',
                    'id': 9997
                },
                {
                    'title': '不觉晴光老',
                    'id': 9996
                },
                {
                    'title': '不觉晴光老',
                    'id': 9995
                },
                {
                    'title': '不觉晴光老',
                    'id': 9994
                },
                {
                    'title': '不觉晴光老',
                    'id': 9993
                },
                {
                    'title': '不觉晴光老',
                    'id': 9992
                },
                {
                    'title': '不觉晴光老',
                    'id': 9991
                },
                {
                    'title': '不觉晴光老',
                    'id': 9999
                }
            ]
        }
    }
}
