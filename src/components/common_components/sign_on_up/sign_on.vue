<template>
    <div class="sign_on_dialog">
        <InputBar
        @signOnInfo="update_u_p"
        ></InputBar>
        <a class="enter_button"
           href="javascript:;"
           @click="login(loginArgs)"
        >进入实验楼</a>
        <div class="login_state_message"
             v-show="!login_state_info.state"
        >
            {{ login_state_info.state_message }}
        </div>
    </div>
</template>

<script type="text/javascript">
import InputBar from './sub_components/input_bar.vue'

import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            // username: ,password:
            base_login_args: {}
        }
    },
    components: {
        InputBar
    },
    computed: {
        loginArgs: function () {
            let args = {...this.base_login_args}
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
            if (this.login_state_info.state) {
                this.$store.dispatch('loginState/change_show_state', null)
            }
        },
        update_u_p: function (data) {
            this.base_login_args = data
        }
    }
}
</script>

<style type="text/css">

.enter_button {
    display: block;
    width: 100%;
    color: #fff;
    background: #0c9;
    padding: 6px 12px;
    font-size: 14px;
    text-align: center;
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

</style>
