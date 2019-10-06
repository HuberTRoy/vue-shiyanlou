<template>
    <transition name="login_background_transition">
        <div class="login_div"
             v-show="show_login_dialog"
        >
            <transition name="login_dialog_transition">
                <div class="login_dialog_div"
                     v-show="show_login_dialog"
                >
                    <div class="nav_bar">
                        <div class="close_dialog_div">
                            <span class="close_dialog_span"
                             @click="change_show_state(null)"
                            >×</span>
                        </div>
                        <ul class="nav_bar_ul">
                            <li class="nav_bar_li"
                                :class="on_or_up=='on' ? 'nav_bar_li_active' : ''"
                            >
                                <a href="javascript:;"
                                   class="nav_bar_a"
                                   @click="change_on_up_state('on')"
                                >登录</a>
                            </li>
                            <li class="nav_bar_li"
                                :class="on_or_up=='up' ? 'nav_bar_li_active' : ''"
                            >
                                <a href="javascript:;"
                                   class="nav_bar_a"
                                   @click="change_on_up_state('up')"
                                >注册(未实现)</a>
                            </li>
                        </ul>
                    </div>
                    <SignOn v-show="on_or_up == 'on'"></SignOn>
                    <SignUp v-show="on_or_up == 'up'"></SignUp>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script type="text/javascript">
import SignOn from './sign_on.vue'
import SignUp from './sign_up.vue'

import {mapState, mapActions} from 'vuex'

export default {
    data: function () {
        return {
            show_login_error_message: false
        } 
    },
    components: {
        SignOn,
        SignUp
    },

    computed: {
        ...mapState({
            show_login_dialog: state => state.loginState.show_login_dialog,
            on_or_up: state => state.loginState.on_or_up,
            message: state => state.loginState.login_info.message,
            sign_on: state => state.loginState.sign_on
        })
    },
    watch: {
        message: function (newMessage, oldMesssage) {
            if (newMessage) {
                this.change_warning_message(newMessage)
                this.change_login_message('')
                this.change_warning_style_class('alert')
            }
        },
        sign_on: function (newState, oldState) {
            console.log(newState)
            if (newState === true) {
                this.change_user_info()
            }
        }
    },
    methods: {
        ...mapActions({
            change_show_state: 'loginState/change_show_state',
            change_on_up_state: 'loginState/change_on_up_state',
            change_user_info: 'loginState/change_user_info',
            change_login_message: 'loginState/change_message',
            change_warning_message: 'warningBar/change_message',
            change_warning_style_class: 'warningBar/change_warning_style_class'
        })
    }
}
</script>
<style type="text/css" scoped>
.login_div {
    height: 100%;
    width: 100%;
    position: fixed;
    background: rgb(0,0,0,0.5);
    z-index: 99;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.login_dialog_div {
    opacity: 1;
    width: 350px;
    margin: 80px auto;
    margin-top: 50px;
    background: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.2);
}

/* 登陆背景会淡出 */

.login_background_transition-leave-active {
    transition: all .4s ease-out;
}

.login_background_transition-leave {
    opacity: 1;
}

.login_background_transiotion-leave-to {
    opacity: 0;
}

/* 登录框会从上至下出来 */

.login_dialog_transition-enter-active, .login_dialog_transition-leave-active {
    transition: all .3s ease-out;
}

.login_dialog_transition-enter, .login_dialog_transition-leave-to {
    transform: translate(0, -35%);
    opacity: 0.3;
}

.login_dialog_transition-enter-to, .login_dialog_transition-leave {
    transform: translate(0, 0);
    opacity: 1;
}

.close_dialog_div {
    text-align: right;
    color: #000;
    opacity: .2;
    font-size: 21px;
    font-weight: 700;
    text-shadow: 0 1px 0 #fff;
    cursor: pointer;
    height: 20px;
}

.nav_bar_ul {
    display: flex;
    justify-content: space-around;
    border: none;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
}

.nav_bar_li {
    width: 50%;
    text-align: center;
}

.nav_bar_li:hover {
    border-bottom: 1px solid #0c9;
}

.nav_bar_a {
    display: block;
    font-weight: 700;
    padding: 15px;
    font-size: 18px;
    color: #555;
}

.nav_bar_li_active {
    border-bottom: 1px solid #0c9;
}

</style>
