<template>
    <div class="user_home_div">
        <UserPage></UserPage>
    </div>
</template>

<script type="text/javascript">

import UserPage from '@/components/user_page/user.vue'

import { mapState } from 'vuex'

export default {
    components: {
        UserPage,
    },
    computed: {
        ...mapState({
            user_info: state => state.user.user_info
        })
    },
    watch: {
        user_info: function () {
            document.title = `${this.user_info.name}个人信息 - 实验楼`
        }
    }
}
</script>
<style type="text/css">
</style>
