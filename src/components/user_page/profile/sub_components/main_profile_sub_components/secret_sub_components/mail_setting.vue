<template>
    <!--  -->
    <div class="secret_mail_setting_div">
        <div class="secret_mail_setting_operation_div">
            <header class="mail_setting_operation_header">
                <!-- <button class="mail_setting_close_button"><</button> -->
                <h5 class="mail_setting_back_header">
                </h5>
                <span>修改邮箱</span>
                <button @click="close_mail_setting()" class="mail_setting_close_button">×</button>
            </header>
            <div class="mail_setting_operation_set_div">
                <span class="mail_setting_operation_set_span">新邮箱</span>
                <input class="mail_setting_operation_set_input form-control" type="email" name="new_email" id="new_email" placeholder="请输入新邮箱地址">
                <button class="secret_mail_setting_button mail_setting_send_button">发送激活邮件</button>
            </div>
        </div>
    </div>    
</template>
<script type="text/javascript">
export default {
    methods: {
        close_mail_setting: function () {
            this.$emit('close_mail_setting')
        }
    }
}
</script>
<style type="text/css">
.secret_mail_setting_div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /*background: #000;*/
    /*opacity: .5;*/
    background: rgba(0,0,0,0.5);
    z-index: 998;  
}

.secret_mail_setting_operation_div {
    background: #fff;
    max-width: 350px;
    margin: 1.75rem auto;
    opacity: 1;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 8px;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    z-index: 999;
}

.mail_setting_operation_header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
}

.mail_setting_close_button {
    /*padding: 1rem;*/
    background: transparent;
    border: 1px solid transparent;
    margin-right: -2rem;
    font-size: 1.5rem;
    color: #000;
    opacity: .5;
}

.mail_setting_operation_set_div {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
}

.mail_setting_operation_set_span {
    font-size: 1rem;
    margin: 15px auto 0;
    width: 82%;
}

.mail_setting_operation_set_input {
    margin: 15px auto 0;
    width: 80%;
}

.secret_mail_setting_button {
    padding: .375rem .5rem;
    color: #fff;
    background: #08bf91;
    border: 1px solid #08bf91;
    /*opacity: .65;*/
    width: 82%;
    font-size: 14px;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;   
}

.mail_setting_send_button {
    margin-top: 32px;
    align-self: center;
}

</style>
