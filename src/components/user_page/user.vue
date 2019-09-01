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
                    <LearningCard class="learning_card"></LearningCard>
                    <VisitedUser class="visited_user"></VisitedUser>
                </div>
                <div class="user_container_right">
                    <LearningRecord class="learning_record"></LearningRecord>
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

import { mapActions } from 'vuex'

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
            get_user_info: 'user/get_and_change_user_info'
        })
    },

    created () {
        this.change_user_id(this.$route.params.id)
        this.get_user_info()
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
