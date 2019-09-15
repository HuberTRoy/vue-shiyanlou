<template>
    <div class="main_profile_div">
        <BaseInfo v-if="nav_bar=='base_info'"></BaseInfo>
        <Secret v-if="nav_bar=='secret'"></Secret>
        <MailSetting v-if="nav_bar=='mail_setting'"></MailSetting>
        <Code v-if="nav_bar=='code'"></Code>
    </div>
</template>
<script type="text/javascript">
import BaseInfo from '@/components/user_page/profile/sub_components/main_profile_sub_components/base_info.vue'
import Secret from '@/components/user_page/profile/sub_components/main_profile_sub_components/secret.vue'
import MailSetting from '@/components/user_page/profile/sub_components/main_profile_sub_components/mail_setting.vue'
import Code from '@/components/user_page/profile/sub_components/main_profile_sub_components/code.vue'

import { mapState } from 'vuex'

export default {
    components: {
        BaseInfo,
        Secret,
        MailSetting,
        Code
    },
    computed: {
        ...mapState({
            nav_bar: state => state.profile.nav_bar
        })
    }
}
</script>
<style type="text/css">
.main_profile_div {
    background: #fff;
    height: 100%;
    min-height: 700px;
    border: 1px solid #eee;
    padding: 30px 30px 20px;
    width: 70%;
    margin-left: 20px;
}
</style>
