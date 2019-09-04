<template>
    <div class="question_reply">
        <div class="question_reply_header">
            全部回复
        </div>
        <div class="question_reply_items">
            <ReplyItem v-for="(item, index) in question_reply.results"
                       :key="index"
                       :data="item"
            >

            </ReplyItem>
        </div>
        <TabPage></TabPage>
        <ReplyForm></ReplyForm>
    </div>
</template>
<script type="text/javascript">
import ReplyItem from './question_reply_sub_components/question_reply_item.vue'
import ReplyForm from './question_reply_sub_components/reply_form.vue'
import TabPage from './question_reply_sub_components/tab_page.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        ReplyItem,
        ReplyForm,
        TabPage
    },
    computed: {
        ...mapState({
            question_reply: state => state.question.question_reply_information
        })
    },

    methods: {
        ...mapActions({
            get_reply: 'question/change_question_reply_information'
        })
    },

    created: function () {
        this.get_reply()
    }
}

</script>
<style type="text/css">
.question_reply {
    background: #fff;
}

.question_reply_header {
    font-size: 18px;
    color: #666;
    padding-bottom: 26px;
    border-bottom: 1px solid #eee;
}

.question_reply_items {
    padding-bottom: 60px;
}

</style>
