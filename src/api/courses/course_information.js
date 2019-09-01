export default {
    get_course_information (courseId) {
        // axios.get("https://www.shiyanlou.com/api/v2/courses/categories/").then(

        //     )

        let x = {
            'course_title': 'Linux 基础入门（新版）',
            'course_id': 123,
            'course_tags': ['Python', '新手入门', '计算机专业课'],
            'course_type': '训练营',
            'course_description': '要在实验楼愉快地学习，先要熟练地使用 Linux，本实验介绍 Linux 基本操作，shell 环境下的常用命令。',
            'course_learning_information': {
                'learn_number': 99991,
                'favorite_number': 9999,
                'comments_number': 9999
            },
            'course_detail': 'MarkDown',
            'course_process': [
                {
                    'lab_id': 1,
                    'course_category': '实验1',
                    'course_name': 'Linux 系统简介',
                    'course_description': '知识点: 1.linux为何物 2.linux历史简介 3.linux重要人物 4.linux与windows的不同 5.如何学习linux'
                },
                {
                    'lab_id': 2,
                    'course_category': '实验2',
                    'course_name': '基本概念及操作',
                    'course_description': '知识点: 1.Linux基本命令 2.通配符的使用 3.查看帮助文档'
                },
                {
                    'lab_id': 3,
                    'course_category': '挑战1',
                    'course_name': '挑战：寻找文件',
                    'course_description': ''
                },
                {
                    'lab_id': 4,
                    'course_category': '实验3',
                    'course_name': 'Linux 系统简介',
                    'course_description': '知识点: 1.linux为何物 2.linux历史简介 3.linux重要人物 4.linux与windows的不同 5.如何学习linux'
                },
                {
                    'lab_id': 5,
                    'course_category': '实验4',
                    'course_name': '基本概念及操作',
                    'course_description': '知识点: 1.Linux基本命令 2.通配符的使用 3.查看帮助文档'
                },
                {
                    'lab_id': 6,
                    'course_category': '挑战2',
                    'course_name': '挑战：寻找文件',
                    'course_description': ''
                },
                {
                    'lab_id': 7,
                    'course_category': '实验5',
                    'course_name': 'Linux',
                    'course_description': '知识点: 1.linux为何物 2.linux历史简介 3.linux重要人物 4.linux与windows的不同 5.如何学习linux'
                },
                {
                    'lab_id': 8,
                    'course_category': '实验6',
                    'course_name': '基本概念及操作',
                    'course_description': '知识点: 1.Linux基本命令 2.通配符的使用 3.查看帮助文档'
                },
                {
                    'lab_id': 9,
                    'course_category': '挑战3',
                    'course_name': '挑战：寻找文件',
                    'course_description': ''
                }
            ],
            'current_course_process': 0,
            'course_comments_number': 9999,
            'course_report_number': 9999,
            'course_QA_number': 9999,
            'course_img': 'https://dn-simplecloud.shiyanlou.com/ncn1.jpg',
            'author': {
                'avatar': 'https://doc.shiyanlou.com/teacher/Linux&c.png',
                'name': 'Edward',
                'description': '资深程序员，5年Linux运维、企业级开发经验及数据库实战和教学经验。',
                'published_courses_number': 14,
                'user_id': 9
            },
            'related_courses': [
                {
                    'course_img': 'https://static.shiyanlou.com/img/louplus/recommend/rec-louplus.png',
                    'course_a': ''
                },
                {
                    'course_img': 'https://static.shiyanlou.com/img/common/shiyanlou-guide.png',
                    'course_a': ''
                }
            ],
            'recommend_courses': [
                {
                    'course_title': '实用 Linux Shell 课程',
                    'course_a': ''
                },
                {
                    'course_title': 'Vim 编辑器',
                    'course_a': ''
                },
                {
                    'course_title': 'Linux命令实例练习',
                    'course_a': ''
                }
            ],
            'contest': [],
            'related_challenges': [
                {
                    'challenge_title': '获取系统信息',
                    'challenge_tag': 'Linux',
                    'challenge_a': ''
                },
                {
                    'challenge_title': '批量删除用户和组',
                    'challenge_tag': 'Linux',
                    'challenge_a': ''
                },
                {
                    'challenge_title': '备份日志文件',
                    'challenge_tag': 'Linux',
                    'challenge_a': ''
                }
            ]
        }

        // return new Promise(function (resolve, reject) {
        //     setTimeout(() => { resolve(x) }, 1000);
        // })
        return x
    }
}
