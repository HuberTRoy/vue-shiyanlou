<template>
    <div class="visited_user">
        <div class="visited_user_header">
            <span class="visited_user_header_title">
                最近来访
            </span>
        </div>
        <router-link :to="{ name:'user', params: {id: user.id} }"
                     tag="a"
                     class="visited_user_info"
                     target="_blank"
                     v-for="user in user_info.visited_user"
                     :key="user.id"
                     >
            <img :src="user.avatar" class="small_avatar">
            <div class="right_area">
                <span class="visited_nickname">{{ user.nickname }}</span>
                <span class="visited_time">{{ user.visit_time }}</span>
            </div>
        </router-link>
    </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            user_info: state => state.user.user_info
        })
    }
}

</script>

<style type="text/css" scoped>
.visited_user {
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-top: 10px;
    padding: 15px;
}

.visited_user_header {
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.visited_user_info {
    display: flex;
    margin-top: 10px;
}

.right_area {
    display: flex;
    flex-direction: column;
    color: #444;
    font-size: 12px;
    padding: 0 15px;
}

.small_avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
}
</style>
