export default {
    get_user_info (userArgs) {
        // userArgs
        // id

        return {
            'id': 9999,
            'level': 9,
            'nickname': 'Cyrbuzz',
            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
            'all_study_time': 3,
            'lab_bean': 4,
            'participate_times': 3,
            'current_lab_level': 1,
            'rencent_visitor': [],
            'created_time': '2018-09-07',
            'record': {},
            'medal': [],
            'learning_record_info': {
                'continuous_study': 0,
                'longest_continuous_study': 1,
                'all_study': 1
            },
            'visited_user': [
                {'id': 999,
                 'nickname': 'Cyrbuzz',
                 'visit_time': '2019-02-26 11:43:58',
                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar940904.png?v=1551104402105&imageView2/1/w/200/h/200'
                },
                {'id': 888,
                 'nickname': 'Cyrbuzz',
                 'visit_time': '2019-02-26 11:43:58',
                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar375420.png?v=1545838909477&imageView2/1/w/200/h/200'
                },
                {'id': 777,
                 'nickname': 'Cyrbuzz',
                 'visit_time': '2019-02-26 11:43:58',
                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravataradmin.png?imageView2/1/w/100/h/100'
                },
                {'id': 666,
                 'nickname': 'Cyrbuzz',
                 'visit_time': '2019-02-26 11:43:58',
                 'avatar': 'https://dn-simplecloud.shiyanlou.com/gravataradmin.png?imageView2/1/w/100/h/100'
                }

            ]
        }
    },

    get_user_learning_record (userArgs) {
        // userArgs
        // id
        // end_time
        let dateStamp = Math.floor(new Date(userArgs.end_time).getTime() / 1000)

        let result = {}

        // +1
        let wholeDayInAYear

        if ((new Date(userArgs.end_time).getFullYear() - 1) % 4 === 0) {
            wholeDayInAYear = 367
        } else {
            wholeDayInAYear = 366
        }

        for (let i = 0; i < wholeDayInAYear; i++) {
            result[dateStamp - 86400 * i] = Math.floor(Math.random() * 130)
        }

        return result
    },

    // courses
    get_user_courses_info (userArgs) {
        // userArgs
        // id
        // type
        // page

        if (userArgs.type === 'history') {
            return this.get_user_learned_courses(userArgs)
        } else if (userArgs.type === 'follow') {
            return this.get_user_follow_courses(userArgs)
        }
    },

    get_user_learned_courses (args) {
        // args
        // id
        // type
        // page
        return {
            'learned_courses': [
                {
                    'course_id': 999,
                    'course_name': 'Javascript基础',
                    'course_process': 'JavaScript 简介(1/6)',
                    'img': 'https://dn-simplecloud.shiyanlou.com/1517282865454.png',
                    'count_report': 0,
                    'count_question': 0
                },
                {
                    'course_id': 9999,
                    'course_name': 'Javascript基础',
                    'course_process': 'JavaScript 简介(1/6)',
                    'img': 'https://dn-simplecloud.shiyanlou.com/ncn21.jpg',
                    'count_report': 0,
                    'count_question': 0
                },
                {
                    'course_id': 99999,
                    'course_name': 'Javascript基础',
                    'course_process': 'JavaScript 简介(1/6)',
                    'img': 'https://dn-simplecloud.shiyanlou.com/ncn21.jpg',
                    'count_report': 0,
                    'count_question': 0
                }
            ]
        }
    },

    get_user_follow_courses (args) {
        // args
        // id
        // type
        // page
        return {
            'follow_courses': [
              {
                    'course_id': 999,
                    'course_name': 'Javascript基础',
                    'course_process': 'JavaScript 简介(1/6)',
                    'img': 'https://dn-simplecloud.shiyanlou.com/1517282865454.png',
                    'count_report': 0,
                    'count_question': 0
                },
                {
                    'course_id': 9999,
                    'course_name': 'Javascript基础',
                    'course_process': 'JavaScript 简介(1/6)',
                    'img': 'https://dn-simplecloud.shiyanlou.com/1517282865454.png',
                    'count_report': 0,
                    'count_question': 0
                },
                {
                    'course_id': 99999,
                    'course_name': 'Javascript基础',
                    'course_process': 'JavaScript 简介(1/6)',
                    'img': 'https://dn-simplecloud.shiyanlou.com/1517282865454.png',
                    'count_report': 0,
                    'count_question': 0
                }
            ]
        }
    },

    get_user_courses_question (args) {
        // args
        // user_id
        // courses_id
        // page
        let x = {
            'state': true,
            'qa_number': 9999,
            'page_size': 0,
            'course_id': 999,
            'current_page': 0,
            'items': [
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 0,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA This is a long long long long long long long long long looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong title for test overflow',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                }
            ]
        }
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(x)
            }, 1000)
        })
    },
    get_user_courses_report (args) {
        // args
        // user_id
        // courses_id
        // page
        let x = {
                    'state': true,
                    'report_number': 999,
                    'page_size': 1,
                    'course_id': 999,
                    'current_page': 0,
                    'items': [
                        {
                            'author': {
                                'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                                'created_time': '2019-01-03T02:26:00Z',
                                'home_page': '/user/123',
                                'id': 123,
                                'level': 99,
                                'is_member': false,
                                'is_teacher': false,
                                'name': 'Shiyanlou'
                            },
                            'report_id': 999,
                            'comment_number': 9,
                            'course_name': 'Linux xxxxxxxx',
                            'lab_name': '挑战：日志备份',
                            'length': 9999,
                            'update_time': '一年前',
                            'recommended': false
                        },
                        {
                            'author': {
                                'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                                'created_time': '2019-01-03T02:26:00Z',
                                'home_page': '/user/123',
                                'id': 123,
                                'level': 99,
                                'is_member': false,
                                'is_teacher': false,
                                'name': 'Shiyanlou'
                            },
                            'report_id': 999,
                            'comment_number': 9,
                            'course_name': 'Linux xxxxxxxx',
                            'lab_name': '挑战：日志备份',
                            'length': 9999,
                            'update_time': '一年前',
                            'recommended': false
                        },
                        {
                            'author': {
                                'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                                'created_time': '2019-01-03T02:26:00Z',
                                'home_page': '/user/123',
                                'id': 123,
                                'level': 99,
                                'is_member': false,
                                'is_teacher': false,
                                'name': 'Shiyanlou'
                            },
                            'report_id': 999,
                            'comment_number': 9,
                            'course_name': 'Linux xxxxxxxx',
                            'lab_name': '挑战：日志备份',
                            'length': 9999,
                            'update_time': '一年前',
                            'recommended': false
                        },
                        {
                            'author': {
                                'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                                'created_time': '2019-01-03T02:26:00Z',
                                'home_page': '/user/123',
                                'id': 123,
                                'level': 99,
                                'is_member': false,
                                'is_teacher': false,
                                'name': 'Shiyanlou'
                            },
                            'report_id': 999,
                            'comment_number': 9,
                            'course_name': 'Linux xxxxxxxx',
                            'lab_name': '挑战：日志备份',
                            'length': 9999,
                            'update_time': '一年前',
                            'recommended': false
                        },
                        {
                            'author': {
                                'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                                'created_time': '2019-01-03T02:26:00Z',
                                'home_page': '/user/123',
                                'id': 123,
                                'level': 99,
                                'is_member': false,
                                'is_teacher': false,
                                'name': 'Shiyanlou'
                            },
                            'report_id': 999,
                            'comment_number': 9,
                            'course_name': 'Linux xxxxxxxx',
                            'lab_name': '挑战：日志备份',
                            'length': 9999,
                            'update_time': '一年前',
                            'recommended': true
                        },
                        {
                            'author': {
                                'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                                'created_time': '2019-01-03T02:26:00Z',
                                'home_page': '/user/123',
                                'id': 123,
                                'level': 99,
                                'is_member': false,
                                'is_teacher': false,
                                'name': 'Shiyanlou'
                            },
                            'report_id': 999,
                            'comment_number': 9,
                            'course_name': 'Linux xxxxxxxx',
                            'lab_name': '挑战：日志备份',
                            'length': 9999,
                            'update_time': '一年前',
                            'recommended': true
                        }
                    ]
                }
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(x)
            }, 1000)
        })
    },

    // path
    get_user_path_info (args) {
        // args
        // id
        // page
        let x = {
            'path_items': [
                {
                    'path_id': 999,
                    'path_name': '新手入门',
                    'path_description': '99门课程',
                    'path_showing_pic': 'https://dn-simplecloud.shiyanlou.com/1487741005890.png'
                }, {
                    'path_id': 9999,
                    'path_name': 'Python研发工程师',
                    'path_description': '99门课程',
                    'path_showing_pic': 'https://dn-simplecloud.shiyanlou.com/course/1535685629919_2Python研发工程师.png'
                }, {
                    'path_id': 99999,
                    'path_name': '大数据工程师',
                    'path_description': '99门课程',
                    'path_showing_pic': 'https://dn-simplecloud.shiyanlou.com/1487741048998.png'
                }, {
                    'path_id': 999999,
                    'path_name': '大数据工程师',
                    'path_description': '99门课程',
                    'path_showing_pic': 'https://dn-simplecloud.shiyanlou.com/1487741070013.png'
                }, {
                    'path_id': 9999999999999999,
                    'path_name': '大数据工程师',
                    'path_description': '99门课程',
                    'path_showing_pic': 'https://dn-simplecloud.shiyanlou.com/1487741143862.png'
                }, {
                    'path_id': 99999999999999999,
                    'path_name': '大数据工程师',
                    'path_description': '99门课程',
                    'path_showing_pic': 'https://dn-simplecloud.shiyanlou.com/course/1540459341383_%E3%80%90%E8%B7%AF%E5%BE%84%E3%80%91-%E3%80%90Java%E7%A0%94%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88%E3%80%91.png'
                }, {
                    'path_id': 9999999,
                    'path_name': '大数据工程师',
                    'path_description': '99门课程',
                    'path_showing_pic': 'https://dn-simplecloud.shiyanlou.com/1487741188918.png'
                }, {
                    'path_id': 99999999,
                    'path_name': '大数据工程师',
                    'path_description': '99门课程',
                    'path_showing_pic': 'https://dn-simplecloud.shiyanlou.com/uid/c7edc0e1f2cfc8f40d1b699aaa32766b/1501840618053.png'
                }, {
                    'path_id': 999999999,
                    'path_name': '大数据工程师',
                    'path_description': '99门课程',
                    'path_showing_pic': 'https://dn-simplecloud.shiyanlou.com/uid/c7edc0e1f2cfc8f40d1b699aaa32766b/1501839495188.png'
                }, {
                    'path_id': 9999999999,
                    'path_name': '大数据工程师',
                    'path_description': '99门课程',
                    'path_showing_pic': 'https://dn-simplecloud.shiyanlou.com/uid/c7edc0e1f2cfc8f40d1b699aaa32766b/1501837346458.png'
                }
            ]
        }
        return x
    },

    // report
    get_user_report_info (args) {
        let x = {
                    'state': true,
                    'report_number': 999,
                    'page_size': 1,
                    'course_id': 999,
                    'current_page': 0,
                    'items': [
                        {
                            'author': {
                                'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                                'created_time': '2019-01-03T02:26:00Z',
                                'home_page': '/user/123',
                                'id': 123,
                                'level': 99,
                                'is_member': false,
                                'is_teacher': false,
                                'name': 'Shiyanlou'
                            },
                            'report_id': 999,
                            'comment_number': 9,
                            'course_name': 'Linux xxxxxxxx',
                            'lab_name': '挑战：日志备份',
                            'length': 9999,
                            'update_time': '一年前',
                            'recommended': false
                        },
                        {
                            'author': {
                                'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                                'created_time': '2019-01-03T02:26:00Z',
                                'home_page': '/user/123',
                                'id': 123,
                                'level': 99,
                                'is_member': false,
                                'is_teacher': false,
                                'name': 'Shiyanlou'
                            },
                            'report_id': 999,
                            'comment_number': 9,
                            'course_name': 'Linux xxxxxxxx',
                            'lab_name': '挑战：日志备份',
                            'length': 9999,
                            'update_time': '一年前',
                            'recommended': false
                        },
                        {
                            'author': {
                                'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                                'created_time': '2019-01-03T02:26:00Z',
                                'home_page': '/user/123',
                                'id': 123,
                                'level': 99,
                                'is_member': false,
                                'is_teacher': false,
                                'name': 'Shiyanlou'
                            },
                            'report_id': 999,
                            'comment_number': 9,
                            'course_name': 'Linux xxxxxxxx',
                            'lab_name': '挑战：日志备份',
                            'length': 9999,
                            'update_time': '一年前',
                            'recommended': false
                        },
                        {
                            'author': {
                                'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                                'created_time': '2019-01-03T02:26:00Z',
                                'home_page': '/user/123',
                                'id': 123,
                                'level': 99,
                                'is_member': false,
                                'is_teacher': false,
                                'name': 'Shiyanlou'
                            },
                            'report_id': 999,
                            'comment_number': 9,
                            'course_name': 'Linux xxxxxxxx',
                            'lab_name': '挑战：日志备份',
                            'length': 9999,
                            'update_time': '一年前',
                            'recommended': false
                        },
                        {
                            'author': {
                                'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                                'created_time': '2019-01-03T02:26:00Z',
                                'home_page': '/user/123',
                                'id': 123,
                                'level': 99,
                                'is_member': false,
                                'is_teacher': false,
                                'name': 'Shiyanlou'
                            },
                            'report_id': 999,
                            'comment_number': 9,
                            'course_name': 'Linux xxxxxxxx',
                            'lab_name': '挑战：日志备份',
                            'length': 9999,
                            'update_time': '一年前',
                            'recommended': true
                        },
                        {
                            'author': {
                                'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                                'created_time': '2019-01-03T02:26:00Z',
                                'home_page': '/user/123',
                                'id': 123,
                                'level': 99,
                                'is_member': false,
                                'is_teacher': false,
                                'name': 'Shiyanlou'
                            },
                            'report_id': 999,
                            'comment_number': 9,
                            'course_name': 'Linux xxxxxxxx',
                            'lab_name': '挑战：日志备份',
                            'length': 9999,
                            'update_time': '一年前',
                            'recommended': true
                        }
                    ]
                }
        return new Promise(function (resolve, reject) {
            setTimeout(() => { return resolve(x) }, 100)
        })
    },

    // discuss
    get_user_discuss_info (args) {
        let x = {
            'state': true,
            'qa_number': 9999,
            'page_size': 0,
            'course_id': 999,
            'current_page': 0,
            'items': [
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 0,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA This is a long long long long long long long long long looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong title for test overflow',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                },
                {
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar49921341c67d21ff30eae711b65bf19f.png?v=1434962909184&imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/123',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    'created_time': '2019-01-03T02:26:00Z',
                    'answer_number': 9,
                    'view_number': 9,
                    'title': 'Test QA',
                    'url': '/question/1111',
                    'question_id': 1111,
                    'source': '',
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    }
                }
            ]
        }

        return new Promise(function (resolve, reject) {
            setTimeout(() => { return resolve(x) }, 1000)
        })
    }
}
