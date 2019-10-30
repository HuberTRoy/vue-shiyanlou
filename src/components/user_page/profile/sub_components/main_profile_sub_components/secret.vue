<template>
    <!--
        N 行 布局与 base_info 一致。
      -->
    <div class="main_profile_secret_div">
        <div class="main_profile_secret_layout_div">
            <label class="main_profile_secret_label">手机</label>
            <span class="main_profile_secret_span">{{ user_info.phone.substr(0, 6) }}****{{ user_info.phone.substr(10) }}</span>
            <a href="javascript:;" @click="tab_phone_setting()" class="main_profile_secret_a_button">点击修改</a>
        </div>
        <div class="main_profile_secret_layout_div">
            <label class="main_profile_secret_label">邮箱</label>
            <span class="main_profile_secret_span">*****</span>
            <a href="javascript:;" @click="tab_mail_setting()" class="main_profile_secret_a_button">点击修改</a>
        </div>
        <div class="main_profile_secret_layout_div">
            <label class="main_profile_secret_label">密码</label>
            <span class="main_profile_secret_span">*****</span>
            <a href="javascript:;" class="main_profile_secret_a_button" @click="tab_password_setting()">点击修改</a>
        </div>
        <div class="main_profile_secret_layout_div">
            <PasswordSetting v-if="show_password_setting"
                          @close_password_setting="tab_password_setting()"
            >
            </PasswordSetting>
        </div>
        <div class="main_profile_secret_layout_div">
            <label class="main_profile_secret_label">账号绑定</label>
            <span class="main_profile_secret_span">
                <i class="fab fa-weixin main_profile_secret_i"></i>
            </span>
            <a href="javascript:;" class="main_profile_secret_a_button">点击绑定</a>
        </div>
        <div class="main_profile_secret_layout_div">
            <label class="main_profile_secret_label"></label>
            <span class="main_profile_secret_span">
                <!--  关于这个颜色的问题:
                        默认都是黑的, Weixin 和 weibo 在 footer 中有过定义, 且footer存在于父组件里。
                        关于 CSS 的问题:
                            1. 由于一开始不知道如何整理CSS,干脆每个vue里自己定义。
                            2. 后来写着写着觉得每个组件/page都应该抽象为一整个CSS文件,到具体的style文件夹里搞, 但还未实现。
                            3. 后来又写着写着, 有很多地方可以重用的样式写了很多遍，而且打包后的重名问题也很困扰,
                            于是发现了框架的作用之一: 抽象为各种 class, 这些 class 预先定义好样式， 如 
                            .font-size-14 就是 14px 的字体大小, 用的时候直接 <i class="font-size-14"> 就好了。
                            4. 最后要改的话变成 2+3, 整合CSS + 抽象样式类。
                  -->
                <i class="fab fa-qq main_profile_secret_i" style="color: rgb(91, 192, 222)"></i>
            </span>
            <a href="javascript:;" class="main_profile_secret_a_button">点击绑定</a>
        </div>
        <div class="main_profile_secret_layout_div">
            <label class="main_profile_secret_label"></label>
            <span class="main_profile_secret_span">
                <i class="fab fa-weibo main_profile_secret_i"></i>
            </span>
            <a href="javascript:;" class="main_profile_secret_a_button">点击绑定</a>
        </div>
        <div class="main_profile_secret_layout_div">
            <label class="main_profile_secret_label"></label>
            <span class="main_profile_secret_span">
                <i class="fab fa-github main_profile_secret_i"></i>
            </span>
            <a href="javascript:;" class="main_profile_secret_a_button">点击绑定</a>
        </div>
        <PhoneSetting v-if="show_phone_setting"
                      @close_phone_setting="tab_phone_setting()"
        ></PhoneSetting>
        <MailSetting v-if="show_mail_setting"
                      @close_mail_setting="tab_mail_setting()"
        ></MailSetting>    
    </div>

</template>
<script type="text/javascript">
import PhoneSetting from './secret_sub_components/phone_setting.vue'
import MailSetting from './secret_sub_components/mail_setting.vue'
import PasswordSetting from './secret_sub_components/password_setting.vue'

import { mapState } from 'vuex'

export default {
    components: {
        PhoneSetting,
        MailSetting,
        PasswordSetting
    },
    data: function () {
        return {
            show_phone_setting: false,
            show_mail_setting: false,
            show_password_setting: false
        }
    },
    computed: {
        ...mapState({
            user_info: state => state.loginState.user_info
        })
    },
    methods: {
        tab_phone_setting: function () {
            this.show_phone_setting = !this.show_phone_setting
        },
        tab_mail_setting: function () {
            this.show_mail_setting = !this.show_mail_setting
        },
        tab_password_setting: function () {
            this.show_password_setting = !this.show_password_setting
        },        
    }
}
</script>
<style type="text/css" scoped>
.main_profile_secret_div {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    width: 70%;
}

.main_profile_secret_layout_div {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 25px;
}

.main_profile_secret_label {
    margin-bottom: 0!important;
    width: 16.66%;
}

.main_profile_secret_span {
    width: 37.66%;
}

.main_profile_secret_i {
    font-size: 2em;
}

</style>
