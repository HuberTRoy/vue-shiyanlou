<template>
    <div class="main_user_div">
        <!--
            Base            _             info
            learning_card         learning_record
            share_card            others (courses, learning_path, path, reports, discuss, contest, tutorial, software)
            recently_visit
         -->
        <div class="user_container">
            <BaseInfo></BaseInfo>
            <div class="user_container_footer">
                <div class="user_container_left">
                    <LearningCard v-if="is_mine_index" class="learning_card"></LearningCard>
                    <VisitedUser class="visited_user"></VisitedUser>
                </div>
                <div class="user_container_right">
                    <!-- 未找到API。 
                        <LearningRecord class="learning_record"></LearningRecord> 
                    -->
                    <StuffBoard></StuffBoard>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import BaseInfo from './sub_components/base_info.vue'
import LearningCard from './sub_components/learning_card.vue'
import VisitedUser from './sub_components/visited_user.vue'
import LearningRecord from './sub_components/learning_record.vue'
import StuffBoard from './sub_components/stuff_board.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        BaseInfo,
        LearningCard,
        LearningRecord,
        VisitedUser,
        StuffBoard
    },

    methods: {
        ...mapActions({
            change_user_id: 'user/change_user_id',
            get_user_info: 'user/get_and_change_user_info',
            set_user_info: 'user/set_user_info'
        })
    },

    computed: {
        ...mapState({
            // 突然想起来... 这里为啥又用驼峰命名了呢= =。
            isLogin: state => state.loginState.sign_on,
            loginUserInfo: state => state.loginState.user_info
        }),
        is_mine_index: function () {
            if (this.loginUserInfo.id == this.$route.params.id) {
                return true
            }
            return false
        }
    },
    watch: {
        loginUserInfo: function () {
            // 如果发现当前的主页是自己的主页那么将数据替换为已登录解锁的数据。
            if (this.is_mine_index) {
                this.set_user_info(this.loginUserInfo)
            } else {
                this.get_user_info()
            }
        },
        '$route': function () {
            this.change_user_id(this.$route.params.id)
            if (this.is_mine_index) {
                this.set_user_info(this.loginUserInfo)
            } else {
                this.get_user_info()
            }            
        }
    },
    created: function () {
        this.change_user_id(this.$route.params.id)
        if (this.is_mine_index) {
            this.set_user_info(this.loginUserInfo)
        } else {
            this.get_user_info()
        }
    }
}

</script>
<style type="text/css">
.main_user_div {
    margin: 20px auto;
    width: 1170px;

}

.user_container {
    margin: 20px -15px;
}

.user_container_footer {
    display: flex;
}

.user_container_left {
    display: flex;
    width: 25%;
    padding-right: 5px;
    flex-direction: column;
}

.learning_card {
    width: 100%;
}

.user_container_right {
    display: flex;
    flex-direction: column;
    width: 75%;
    padding-left: 5px;
}

.learning_record {
    width: 100%;
}

</style>
