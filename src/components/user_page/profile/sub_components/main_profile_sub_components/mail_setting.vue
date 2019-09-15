<template>
    <div class="main_profile_mail_setting_div">
        <div class="main_profile_mail_setting_layout_div">
            <label class="main_profile_mail_setting_label">提醒邮件</label>
            <input type="checkbox" name="labreport_comment" id="labreport_comment" v-model="labreport_comment">
            <label class="main_profile_mail_setting_input_label" for="labreport_comment">实验报告点评邀请</label>
        </div>
        <div class="main_profile_mail_setting_layout_div">
            <label class="main_profile_mail_setting_label"></label>
            <input type="checkbox" name="question_comment" id="question_comment" v-model="question_comment">
            <label class="main_profile_mail_setting_input_label" for="question_comment">问题邀请</label>
        </div>
        <div class="main_profile_mail_setting_layout_div">
            <label class="main_profile_mail_setting_label">官方邮件</label>
            <input type="checkbox" name="new_courses" id="new_courses" v-model="new_courses">
            <label class="main_profile_mail_setting_input_label" for="new_courses">新课程推荐邮件</label>
        </div>
        <div class="main_profile_mail_setting_layout_div">
            <label class="main_profile_mail_setting_label"></label>
            <input type="checkbox" name="active_notice" id="active_notice" v-model="active_notice">
            <label class="main_profile_mail_setting_input_label" for="active_notice">新功能/活动提醒邮件</label>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data: function () {
        return {
            labreport_comment: true,
            question_comment: true,
            new_courses: true,
            active_notice: true
        }
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
