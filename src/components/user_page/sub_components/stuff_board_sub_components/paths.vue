<template>
    <div class="stuff_board_paths">
        <FloatCard class="stuff_board_path_card"
                   v-for="path_info in path_content['path_items']"
                   :key="path_info.path_id"
                   :router_args="{ name: 'coursePath', params: { id: path_info.path_id } }"
                   :course_img_url="path_info.path_showing_pic"
                   :course_name="path_info.path_name"
                   :course_information="path_info.path_description"
        >
        </FloatCard>
    </div>
</template>
<script type="text/javascript">
import FloatCard from '@/components/common_components/cards/float_card.vue'

import { mapState } from 'vuex'
export default {
    components: {
        FloatCard
    },
    computed: {
        ...mapState({
            user_id: state => state.user.user_id,
            path_content: state => state.user.path_content
        })
    },
    created: function () {
        this.$store.dispatch('user/get_and_change_path_content', {
            'id': this.user_id,
        })
    }
}
</script>
<style type="text/css" scoped>
.stuff_board_paths {
    display: flex;
    flex-wrap: wrap;
}

.stuff_board_path_card {
    width: 33%;
}

</style>
