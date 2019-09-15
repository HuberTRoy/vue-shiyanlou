<template>
    <div class="profile_side_div">
        <span class="profile_side_tab_title"
               v-for="(value,key,index) in tab_title"
               :class="[nav_bar==key ? 'profile_side_tab_title_active' : '']"
               :key="key"
               @click="tab_nav_bar(key)"
        >{{ value }}</span>
    </div>    
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    data: function () {
        return {
            tab_title: {
                'base_info': '基础信息',
                'secret': '账号密码',
                'mail_setting': '邮件通知',
                'code': '兑换码'
            }
        }
    },

    computed: {
        ...mapState({
            nav_bar: state => state.profile.nav_bar
        })
    },

    methods: {
        ...mapActions({
            tab_nav_bar: 'profile/change_nav_bar'
        })
    }
}

</script>
<style type="text/css">
.profile_side_div {
    padding: 0 30px;
    background: #fff;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 25%;
    height: 100%;
    min-height: 700px;
}

.profile_side_tab_title {
    /*margin-top: 20px;*/
    margin: 15px auto;
    padding: 10px 25px;
    line-height: 20px;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid transparent;
    border-radius: 25px;
    background: #fff;
}

.profile_side_tab_title_active {
    background: #efefef;
}
</style>
