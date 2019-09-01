export default {
    get_course_comments (commentArgs) {
        // commentArgs
        //
        let page = commentArgs.page
        let pageSize = commentArgs.page_size
        let courseId = commentArgs.course_id

        return {
            'current_page': page,
            'total_comments': 999,
            'page_size': pageSize,
            'course_id': courseId,
            'items': [
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/1',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'content': 'Test text.',
                    'comment_id': 1,
                    'source_lab': ''
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/1',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'content': 'Test text.',
                    'comment_id': 2,
                    'source_lab': ''
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/1',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'content': 'Test text.',
                    'comment_id': 3,
                    'source_lab': ''
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/1',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'content': 'Test text.',
                    'comment_id': 4,
                    'source_lab': ''
                }
            ]
        }
    }
}
