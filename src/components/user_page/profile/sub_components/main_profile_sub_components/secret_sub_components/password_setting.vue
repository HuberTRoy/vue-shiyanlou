<template>
    <div class="secret_password_setting_div">
        <div class="secret_password_setting_operation_div">
            <div class="secret_password_setting_operation_layout_div">
                <label class="secret_password_setting_operation_label">原密码:</label>
                <input class="form-control secret_password_setting_operation_input" type="password" name="raw_password" id="raw_password" v-model="raw_password">
            </div>
            <div class="secret_password_setting_operation_layout_div">
                <label class="secret_password_setting_operation_label">新密码:</label>
                <input class="form-control secret_password_setting_operation_input" type="password" name="new_password" id="new_password" v-model="new_password">
            </div>
            <div class="secret_password_setting_operation_layout_div">
                <label class="secret_password_setting_operation_label"></label>
                <small class="password_message">
                    {{ message }}
                </small>
            </div>
            <div class="secret_password_setting_operation_buttons_layout_div">
                <span class="secret_password_setting_cancel_button" @click="close_password_setting()">取消</span>
                <button class="secret_password_setting_save_button" @click="_save_password()">保存</button>
            </div>        
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState,mapActions } from 'vuex'

export default {
    data: function () {
        return {
            raw_password: '',
            new_password: ''
        }
    },

    computed: {
        ...mapState({
            message: state => state.profile.password_message
        })
    },
    methods: {
        ...mapActions({
            save_password: 'profile/change_password',
            log_out: 'loginState/log_out'
        }),
        close_password_setting: function () {
            this.$emit('close_password_setting')
        },
        _save_password: async function () {
            let res = await this.save_password({
                "new_password": this.new_password,
                "old_password": this.raw_password
            })

            if (res == 'OK') {
                this.log_out()
                this.$router.push({name: 'login'})
            }
        }
    }
}
</script>
<style type="text/css" scoped>
.secret_password_setting_div {
    width: 100%;
}

.secret_password_setting_operation_layout_div {
    display: flex;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
}

/*.secret_password_setting_operation_buttons_layout_div {
    display: flex;
}*/

.secret_password_setting_operation_label {
    width: 16.66%;
}

.secret_password_setting_operation_input {
    width: 33.33%;
}

.secret_password_setting_operation_buttons_layout_div {
    padding-left: 94px;
}

.secret_password_setting_cancel_button {
    cursor: pointer;
}

.secret_password_setting_save_button {
    margin-left: 10px;
    padding: .375rem .5rem;
    color: #fff;
    background: #08bf91;
    border: 1px solid #08bf91;
    /*opacity: .65;*/
    font-size: 14px;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;      

}

.password_message {
    color: #f66;
    font-size: 0.8rem;
    text-align: center;
}

</style>
