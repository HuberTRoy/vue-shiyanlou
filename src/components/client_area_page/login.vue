<template>
    <div class="client_area_login_div">
        <!-- 
            这个独立页面的布局与悬浮框的布局基本一致。
            唯一的区别是header部分
         -->

        <div class="client_area_login_header_div">
        登录
        </div>
        <!--  这个应该抽象到每个页面都包含的公共组件里 位置 fixed 可设置message 和 background, 只穿数据就可以的那种不用单独设置。
        直接copy过来,这里有个BUG,
        当在Login页面吊起nav_bar里的登录登录时，如果登录错误会出现两个错误提示。
         -->
        <div class="login_error_message alert alert-danger"
             :class="[show_login_error_message ? 'show_login_error_message' : '']"
        >
            {{ message }}
        </div>
        <div class="client_area_login_box">
         <SignOn :input_id="'client_area_autologin'"></SignOn>
        </div>
    </div>    
</template>
<script type="text/javascript">
import SignOn from '@/components/common_components/sign_on_up/sign_on.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        SignOn
    },
    data: function () {
        return {
            show_login_error_message: false
        } 
    },
    computed: {
        ...mapState({
            message: state => state.loginState.login_info.message
        })
    },
    watch: {
        message: function (newMessage, oldMesssage) {
            if (newMessage) {
                this.show_login_error_message = true
                setTimeout(()=>{
                    this.change_message('')
                    this.show_login_error_message = false
                }, 3000)
            }
        }
    },
    methods: {
        ...mapActions({
            change_message: 'loginState/change_message'
        })
    }
}
</script>
<style type="text/css" scoped>
.client_area_login_div {
    width: 1170px;
    padding: 0 30px;
    margin: auto;
    background: #fff;
}

.client_area_login_header_div {
    text-align: center;
    /*padding-bottom: 15px;*/
    margin: 20px 156px 0;
    padding-top: 15px;
    color: #525252;
    font-size: 18px;
    line-height: 2;
    border-bottom: 1px solid #cacaca;
}

.client_area_login_box {
    width: 300px;
    margin: auto;
    padding-top: 35px;
}
</style>
