import { apiUrl } from '@/api/base.js'
import axios from 'axios'

export default {
    get_question_list (questionListArgs) {
        // questionListArgs
        // page
        // sort
        // type
        // page_size=15
        // if (questionListArgs.page > 1) {
        //     return {
        //         'total_questions': 9999,
        //         'question_list': [
        //             {
        //                 'author': {
        //                     'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                     'created_time': '2019-01-03T02:26:00Z',
        //                     'home_page': '/user/1',
        //                     'id': 123,
        //                     'level': 99,
        //                     'is_member': false,
        //                     'is_teacher': false,
        //                     'name': 'Shiyanlou'
        //                 },
        //                 'created_time': '2019-01-03T02:26:00Z',
        //                 'last_reply': {
        //                     'author': {
        //                         'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                         'created_time': '2019-01-03T02:26:00Z',
        //                         'home_page': '/user/1',
        //                         'id': 123,
        //                         'level': 99,
        //                         'is_member': false,
        //                         'is_teacher': false,
        //                         'name': 'Shiyanlou'
        //                     }
        //                 },
        //                 'source': '',
        //                 'title': 'Test Text For Question Title Yooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!',
        //                 'answer_number': 99,
        //                 'view_number': 99,
        //                 'question_id': 123
        //             }
        //         ]
        //     }
        // }

        // return {
        //     'total_questions': 9999,
        //     'question_list': [
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
        //             'created_time': '2019-01-03T02:26:00Z',
        //             'last_reply': {
        //                 'author': {
        //                     'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                     'created_time': '2019-01-03T02:26:00Z',
        //                     'home_page': '/user/1',
        //                     'id': 123,
        //                     'level': 99,
        //                     'is_member': false,
        //                     'is_teacher': false,
        //                     'name': 'Shiyanlou'
        //                 }
        //             },
        //             'source': '',
        //             'title': 'Test Text For Question Title Yooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!',
        //             'answer_number': 99,
        //             'view_number': 99,
        //             'question_id': 123
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
        //             'created_time': '2019-01-03T02:26:00Z',
        //             'last_reply': {
        //                 'author': {
        //                     'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                     'created_time': '2019-01-03T02:26:00Z',
        //                     'home_page': '/user/1',
        //                     'id': 123,
        //                     'level': 99,
        //                     'is_member': false,
        //                     'is_teacher': false,
        //                     'name': 'Shiyanlou'
        //                 }
        //             },
        //             'source': '',
        //             'title': 'Test Text For Question Title Yooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!',
        //             'answer_number': 99,
        //             'view_number': 99,
        //             'question_id': 123
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
        //             'created_time': '2019-01-03T02:26:00Z',
        //             'last_reply': {
        //                 'author': {
        //                     'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                     'created_time': '2019-01-03T02:26:00Z',
        //                     'home_page': '/user/1',
        //                     'id': 123,
        //                     'level': 99,
        //                     'is_member': false,
        //                     'is_teacher': false,
        //                     'name': 'Shiyanlou'
        //                 }
        //             },
        //             'source': '',
        //             'title': 'Test Text For Question Title Yooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!',
        //             'answer_number': 99,
        //             'view_number': 99,
        //             'question_id': 123
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
        //             'created_time': '2019-01-03T02:26:00Z',
        //             'last_reply': {
        //                 'author': {
        //                     'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                     'created_time': '2019-01-03T02:26:00Z',
        //                     'home_page': '/user/1',
        //                     'id': 123,
        //                     'level': 99,
        //                     'is_member': false,
        //                     'is_teacher': false,
        //                     'name': 'Shiyanlou'
        //                 }
        //             },
        //             'source': '',
        //             'title': 'Test Text For Question Title Yooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!',
        //             'answer_number': 99,
        //             'view_number': 99,
        //             'question_id': 123
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
        //             'created_time': '2019-01-03T02:26:00Z',
        //             'last_reply': {
        //                 'author': {
        //                     'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                     'created_time': '2019-01-03T02:26:00Z',
        //                     'home_page': '/user/1',
        //                     'id': 123,
        //                     'level': 99,
        //                     'is_member': false,
        //                     'is_teacher': false,
        //                     'name': 'Shiyanlou'
        //                 }
        //             },
        //             'source': '',
        //             'title': 'Test Text For Question Title Yooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!',
        //             'answer_number': 99,
        //             'view_number': 99,
        //             'question_id': 123
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
        //             'created_time': '2019-01-03T02:26:00Z',
        //             'last_reply': {
        //                 'author': {
        //                     'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                     'created_time': '2019-01-03T02:26:00Z',
        //                     'home_page': '/user/1',
        //                     'id': 123,
        //                     'level': 99,
        //                     'is_member': false,
        //                     'is_teacher': false,
        //                     'name': 'Shiyanlou'
        //                 }
        //             },
        //             'source': '',
        //             'title': 'Test Text For Question Title Yooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!',
        //             'answer_number': 99,
        //             'view_number': 99,
        //             'question_id': 123
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
        //             'created_time': '2019-01-03T02:26:00Z',
        //             'last_reply': {
        //                 'author': {
        //                     'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
        //                     'created_time': '2019-01-03T02:26:00Z',
        //                     'home_page': '/user/1',
        //                     'id': 123,
        //                     'level': 99,
        //                     'is_member': false,
        //                     'is_teacher': false,
        //                     'name': 'Shiyanlou'
        //                 }
        //             },
        //             'source': '',
        //             'title': 'Test Text For Question Title Yooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!',
        //             'answer_number': 0,
        //             'view_number': 99,
        //             'question_id': 123
        //         }
        //     ]
        // }
        return axios.get(apiUrl + 'v2/questions', {params: questionListArgs})
    }
}
