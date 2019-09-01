export default {
    login (loginArgs) {
        // loginArgs
        // username, password, verification code

        // test success
        return {
            'state': true,
            'state_message': 'OK',
            'id': 9999,
            'level': 9,
            'nickname': 'Cyrbuzz',
            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar906950.png?v=1546239403459&imageView2/1/w/200/h/200',
            'history': [
                {
                    'course_id': 8,
                    'course_title': '玩转Python1'
                },
                {
                    'course_id': 9,
                    'course_title': '玩转Python2'
                }
            ],
            'messages_count': 0,
            'learn_time': 0
        }
        // test failed
    }
}
