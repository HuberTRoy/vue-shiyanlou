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
        <TabPage
        :next="() => { tab_page(next) }"
        :prev="() => { tab_page(prev) }"
        >
        </TabPage>
        <ReplyForm></ReplyForm>
    </div>
</template>
<script type="text/javascript">
import ReplyItem from './question_reply_sub_components/question_reply_item.vue'
import ReplyForm from './question_reply_sub_components/reply_form.vue'
import TabPage from '@/components/common_components/tab_page/tab_page.vue'

import { mapState, mapActions } from 'vuex'

import utils from '@/utils/base.js'

export default {
    components: {
        ReplyItem,
        ReplyForm,
        TabPage
    },
    computed: {
        ...mapState({
            question_reply: state => state.question.question_reply_information,
            prev: state => { 
                let p = state.question.question_reply_information.previous
                if (p) {
                    p = utils.translate_query(p.split('?')[1])
                    p = decodeURIComponent(p.cursor)
                    return p
                }
                return ''
            },
            next: state => {
                let n = state.question.question_reply_information.next
                if (n) {
                    n = utils.translate_query(n.split('?')[1])
                    n = decodeURIComponent(n.cursor)
                    return n
                }
                return ''
            }
        })
    },
    methods: {
        ...mapActions({
            change_cursor: 'question/change_cursor',
            get_reply: 'question/change_question_reply_information' 
        }),
        tab_page: function (cursor) {
            this.change_cursor(cursor)
            this.get_reply()
        }
    }
}

</script>
<style type="text/css" scoped>
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
