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
}
</script>
<style type="text/css">
</style>
