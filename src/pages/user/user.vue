<template>
    <div class="user_home_div">
        <UserPage></UserPage>
    </div>
</template>

<script type="text/javascript">

import UserPage from '@/components/user_page/user.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        UserPage,
    },
    computed: {
        ...mapState({
            user_info: state => state.user.user_info,
            login_user_info: state => state.loginState.user_info,
            courses_nav: state => state.user.courses_nav,
            user_id: state => state.user.user_id
        }),
        is_mine_index: function () {
            if (this.login_user_info.id == this.$route.params.id) {
                return true
            }
            return false
        }
    },
    methods: {
        ...mapActions({
            change_user_id: 'user/change_user_id',
            get_user_info: 'user/get_and_change_user_info',
            set_user_info: 'user/set_user_info'
        }),
        tab_courses: function (navTitle) {
            this.$store.dispatch('user/change_courses_nav', navTitle)
            this.$store.dispatch('user/get_and_change_courses_content', {
                'id': this.user_id,
                'type': this.courses_nav,
            })
        },
        tab_nav: function (title) {
            this.$store.dispatch('user/change_user_stuff', {
                'nav_title': title
            })
        }
    },
    watch: {
        login_user_info: function () {
            // 如果发现当前的主页是自己的主页那么将数据替换为已登录解锁的数据。
            if (this.is_mine_index) {
                this.set_user_info(this.login_user_info)
            } else {
                this.get_user_info()
            }
        },
        '$route': function () {
            this.change_user_id(this.$route.params.id)
            if (this.is_mine_index) {
                this.set_user_info(this.login_user_info)
            } else {
                this.get_user_info()
            }            
        },
        user_info: function () {
            document.title = `${this.user_info.name}个人信息 - 实验楼`
        }
    },
    mounted: function () {
        this.change_user_id(this.$route.params.id)
        if (this.is_mine_index) {
            this.set_user_info(this.login_user_info)
        } else {
            this.get_user_info()
        }

        // 请求已学习的子页面
        // 每次打开后这个页面是第一个显示的，算在首次加载里。
        this.tab_nav('课程')
        this.tab_courses('studied')
    }
}
</script>
<style type="text/css">
</style>
