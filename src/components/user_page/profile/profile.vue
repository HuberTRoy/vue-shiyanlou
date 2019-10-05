<template>
    <div class="profile_container_div">
        <Side></Side>
        <MainProfile></MainProfile>
    </div>
</template>
<script type="text/javascript">
import MainProfile from '@/components/user_page/profile/sub_components/main_profile.vue'
import Side from '@/components/user_page/profile/sub_components/side.vue'

export default {
    components: {
        MainProfile,
        Side
    }
}
</script>

<style type="text/css" scoped>
.profile_container_div {
    margin: 20px auto;
    width: 1170px;
    display: flex;
}    
</style>