<template>
    <!-- 
        全屏遮罩
        类似登录框一样的。
     -->
    <div class="secret_phone_setting_div">
        <div class="secret_phone_setting_operation_div">
            <div class="secret_phone_setting_check_and_set_div">
                <header class="phone_setting_operation_header">
                    <!-- <button class="phone_setting_close_button"><</button> -->
                    <h5 class="phone_setting_back_header">
                        <i class="fas fa-chevron-left" v-if="forward" @click="back_to_get_verification()"></i>
                    </h5>
                    <span>修改手机</span>
                    <button @click="close_phone_setting()" class="phone_setting_close_button">×</button>
                </header>
                <div class="secret_phone_setting_tab_div">
                    <div class="secret_phone_setting_operation_set_div"
                         :class="[show_appeal ? 'show_appeal' : '']"
                    >
                        <div class="phone_number">
                            +86188****8888
                        </div>
                        <div class="phone_lost_tip" @click="to_appeal()">
                            手机号不能用了
                        </div>
                        <div class="phone_setting_input_div">
                            <input type="text" name="verification_code_input" class="form-control"
                             id="verification_code_input" placeholder="输入六位验证码">
                            <button class="secret_phone_setting_button">获取验证码</button>
                        </div>
                        <div class="phone_setting_next">
                            <button class="secret_phone_setting_button phone_setting_next_button">下一步</button>
                        </div>
                    </div>
                    <div class="secret_appeal_dialog"
                         :class="[show_appeal ? 'show_appeal' : '']"
                    >
                        <span>请发送申诉邮件到</span>
                        <strong>support@shiyanlou.com</strong>
                        <span>我们会在 2 个工作日内处理</span>
                    </div>
                    <div class="secret_update_phone_dialog">
                        <!-- 待添加  -->
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script type="text/javascript">
export default {
    data: function () {
        return {
            forward: false,
            show_appeal: false
        }
    },
    methods: {
        close_phone_setting: function () {
            this.$emit('close_phone_setting')
        },
        to_appeal: function () {
            this.forward = true
            this.show_appeal = true
        },
        back_to_get_verification () {
            this.forward = false
            this.show_appeal = false
        }

    }
}
</script>
<style type="text/css">
/*  
    vm and vh :
    https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/
 */
.secret_phone_setting_div {
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

.secret_phone_setting_operation_div {
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

.phone_setting_operation_header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
}

.phone_setting_close_button {
    /*padding: 1rem;*/
    background: transparent;
    border: 1px solid transparent;
    margin-right: -2rem;
    font-size: 1.5rem;
    color: #000;
    opacity: .5;
}

.secret_phone_setting_operation_set_div {
    width: 33.33%;
    padding: 1rem 0;
    background: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    transition: all .5s;
    /*justify-content: space-around;*/
}

.phone_setting_back_header {
    font-size: 0.9rem;
    cursor: pointer;
    margin-bottom: 0;
    margin-left: -2rem;
    min-width: 16px;
}

.secret_phone_setting_check_and_set_div {
    overflow: hidden;
}

.phone_number {
    font-size: 18px;
    color: #999;
}

.phone_lost_tip {
    margin: 5px 0 15px;
    display: inline-block;
    font-size: 12px;
    color: #2786e4;
    cursor: pointer;
}

.phone_setting_input_div {
    display: flex;
    justify-content: space-around;
    padding: 0 15px;
}

#verification_code_input {
    width: 56%;
    height: 35px;
}

#verification_code_input::placeholder {
    color: #ced4da;
}

.secret_phone_setting_button {
    padding: .375rem .5rem;
    color: #fff;
    background: #08bf91;
    border: 1px solid #08bf91;
    /*opacity: .65;*/
    width: 100px;
    font-size: 14px;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;   
}

.phone_setting_next_button {
    width: 88%;
    margin: 15px 0 10px;
}

.secret_phone_setting_tab_div {
    display: flex;
    width: 300%;
}

.secret_appeal_dialog {
    width: 33.33%;
    transition: all .5s;
    display: flex;
    font-size: 1rem;
    flex-direction: column;
    text-align: center;
    padding-top: 22px;
}

.show_appeal {
    transform: translateX(-100%);
}


</style>
