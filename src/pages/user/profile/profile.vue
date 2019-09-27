<template>
    <div class="user_profile_main_div">
        <Profile></Profile>
    </div>
</template>
<script type="text/javascript">
import Profile from '@/components/user_page/profile/profile.vue'

import { mapState } from 'vuex'

export default {
    components: {
        Profile,
    },
}


</script>
<style type="text/css">
</style>
