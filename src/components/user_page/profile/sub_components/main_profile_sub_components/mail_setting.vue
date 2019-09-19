<template>
    <div class="main_profile_mail_setting_div">
        <div class="main_profile_mail_setting_layout_div">
            <label class="main_profile_mail_setting_label">提醒邮件</label>
            <input type="checkbox" name="labreport_invite" id="labreport_invite" v-model="labreport_invite">
            <label class="main_profile_mail_setting_input_label" for="labreport_invite">实验报告点评邀请</label>
        </div>
        <div class="main_profile_mail_setting_layout_div">
            <label class="main_profile_mail_setting_label"></label>
            <input type="checkbox" name="question_invite" id="question_invite" v-model="question_invite">
            <label class="main_profile_mail_setting_input_label" for="question_invite">问题邀请</label>
        </div>
        <div class="main_profile_mail_setting_layout_div">
            <label class="main_profile_mail_setting_label">官方邮件</label>
            <input type="checkbox" name="new_course" id="new_course" v-model="new_course">
            <label class="main_profile_mail_setting_input_label" for="new_course">新课程推荐邮件</label>
        </div>
        <div class="main_profile_mail_setting_layout_div">
            <label class="main_profile_mail_setting_label"></label>
            <input type="checkbox" name="activity" id="activity" v-model="activity">
            <label class="main_profile_mail_setting_input_label" for="activity">新功能/活动提醒邮件</label>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    data: function () {
        return {
            labreport_invite: true,
            question_invite: true,
            new_course: true,
            activity: true
        }
    },
    computed: {
        ...mapState({
            mail_settings: state => state.profile.mail_settings
        //     labreport_invite: state => state.profile.mail_settings.labreport_invite,
        //     question_invite: state => state.profile.mail_settings.question_invite,
        //     new_course: state => state.profile.mail_settings.new_course,
        //     activity: state => state.profile.mail_settings.activity
        }),
        setting_data: function () {
            return {
                labreport_invite: this.labreport_invite,
                question_invite: this.question_invite,
                new_course: this.new_course,
                activity: this.activity                
            }
        }
    },
    methods: {
        ...mapActions({
            get_mail_settings: 'profile/get_mail_settings',
            change_mail_settings: 'profile/change_mail_settings'
        }),
        set_mail_settings: function () {
            this.labreport_invite = this.mail_settings.labreport_invite
            this.question_invite = this.mail_settings.question_invite
            this.new_course = this.mail_settings.new_course
            this.activity = this.mail_settings.activity
        }
    },
    watch: {
        setting_data: async function () {
            // 这边应该写个提示,但现在没有。
            let res = await this.change_mail_settings(this.setting_data)
            
        }
    },
    created: async function () {
        await this.get_mail_settings()
        this.set_mail_settings()
        
    }
}  
</script>
<style type="text/css">
.main_profile_mail_setting_div {
    display: flex;
    flex-direction: column;
    width: 70%;
    font-size: 1rem;
    padding: 0 15px;
}

.main_profile_mail_setting_layout_div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.main_profile_mail_setting_label {
    width: 26.66%;
    margin-bottom: 0;
}

.main_profile_mail_setting_input_label {
    margin-bottom: 0;
    margin-left: 15px; 
}

</style>
