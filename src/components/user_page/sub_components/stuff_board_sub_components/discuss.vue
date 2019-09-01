<template>
    <div class="stuff_board_discuss">
        <DiscussItem class="stuff_board_discuss_item"
                    v-for="discuss in discuss_content.items"
                    :key="discuss.id"
                    :data="discuss"
        ></DiscussItem>
    </div>
</template>
<script type="text/javascript">
import DiscussItem from '@/components/common_components/qa_item/qa_item.vue'

import { mapState } from 'vuex'

export default {
    components: {
        DiscussItem
    },
    computed: {
        ...mapState({
            user_id: state => state.user.user_id,
            discuss_content: state => state.user.discuss_content
        })
    }
}
</script>

<style type="text/css">
.stuff_board_discuss {
    display: flex;
    flex-direction: column;
    /*flex-wrap: wrap;*/
}

/*.stuff_board_discuss_item {
    width: 25%;
}*/
</style>
