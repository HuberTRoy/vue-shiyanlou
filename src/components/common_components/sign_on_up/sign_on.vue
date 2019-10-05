<template>
    <div class="sign_on_dialog">
        <InputBar
        @signOnInfo="update_u_p"
        @emit_login="login(loginArgs)"
        ></InputBar>
        <div class="custom_control_div">
            <div>
                <input type="checkbox" name="autologin" value="true" v-model="checked"
                       class="autologinbutton"
                       :id="input_id ? input_id : 'autologinbutton'">
                <label class="autologin_label"
                       :class="[checked ? 'label_checked' : '']"
                       :for="input_id ? input_id : 'autologinbutton'">下次自动登录</label>
            </div>
            <div>
                <!-- 这个暂时未加入计划 -->
                <a class="forget_password" target="_blank" href="https://www.shiyanlou.com/users/account/forget-password/">忘记密码</a>
            </div>
        </div>
        <a class="enter_button"
           href="javascript:;"
           @click="login(loginArgs)"
        >进入实验楼</a>
    </div>
</template>

<script type="text/javascript">
import InputBar from './sub_components/input_bar.vue'

import { mapState, mapActions } from 'vuex'

export default {
    props:{
        input_id: {
            type: String,
            require: false
        }
    },
    data () {
        return {
            // username: ,password:
            base_login_args: {},
            checked: ''
        }
    },
    components: {
        InputBar
    },
    computed: {
        loginArgs: function () {
            let args = {...this.base_login_args}
            if (this.checked) {
                args['remember'] = true
            }else{
                args['remember'] = false
            }
            if (this.input_id) {
                args['login_page'] = true
            }
            // verification 暂无
            return args
        },
        ...mapState({
            login_state_info: function (state) {
                return {
                    'state': state.loginState.login_info.state,
                    'state_message': state.loginState.login_info.state_message
                }
            }
        })
    },
    methods: {
        ...mapActions({
            get_login_info: 'loginState/get_and_change_all_login'
        }),
        login: function (loginArgs) {
            this.get_login_info(loginArgs)
        },
        update_u_p: function (data) {
            this.base_login_args = data
        }
    }
}
</script>

<style type="text/css" scoped>

.enter_button {
    display: block;
    width: 100%;
    color: #fff;
    background: #0c9;
    padding: 6px 12px;
    font-size: 14px;
    text-align: center;
    border: 1px solid #0c9;
    border-radius: 20px;
}

.enter_button:hover {
    background: #007558;
    color: #fff;
}

.login_state_message {
    padding: 5px 10px;
    margin-top: 10px;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 14px;
    background-color: #f2dede;
    border-color: #ebccd1;
    color: #a94442;
}

.custom_control_div {
    display: flex;
    justify-content: space-between;
    /*align-items: center;*/
    color: #999;
    font-size: 14px;
}

.autologin_label {
    position: relative;
}

.autologinbutton {
    opacity: 0;    
}

.autologin_label:after {
    position: absolute;
    top: .25rem;
    /*top: 0;*/
    left: -1.1rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
    background: no-repeat 50%/50% 50%;
}

.autologin_label:before {
    content: "";
    border-radius: .25rem;
    border: 1px solid #adb5bd;
    background-color: #fff;
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: .25rem;
    left: -1.1rem;
    display: block;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.label_checked:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E");
}

.label_checked:before {
    color: #fff;
    background-color: #08bf91;
    border-color: #08bf91;
}


/* 
https://stackoverflow.com/questions/10782054/what-does-the-tilde-squiggle-twiddle-css-selector-mean
for more ~ selector information.
 */
.autologinbutton:active~.autologin_label:before {
    color: #fff;
    background-color: #80fadb;
    border-color: #80fadb;
}

.autologinbutton:focus~.autologin_label:before {
    box-shadow: 0 0 0 0.2rem rgba(8,191,145,.25);
}

/* */
.forget_password {
    color: #c6c6c6;
}

.forget_password:hover {
    color: #c6c6c6;
}

</style>
