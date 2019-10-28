<template>
    <v-loader :source="question_list_info" :urls="['api/v2/questions']">
        <div class="question_list">
            <QuestionItem v-for="(question, index) in question_list_info.results"
                          :key="index"
                          :data="question"

            ></QuestionItem>
        </div>
        <TabPage :change_current_page="change_current_page"
                 :showing_page_info="showing_page_info"
                 :all_page="total_page"
                 :current_page="current_page"
        ></TabPage>
    </v-loader>
</template>
<script type="text/javascript">
import QuestionItem from '@/components/common_components/qa_item/qa_item.vue'
import TabPage from '@/components/common_components/tab_page/tab_page_with_pager.vue'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: {
        QuestionItem,
        TabPage
    },

    computed: {
        ...mapState({
            question_list_info: state => state.questions.question_list_information,
            current_page: state => state.questions.current_page,
            total_page: state => state.questions.total_page
        }),
        ...mapGetters({
            showing_page_info: 'questions/showing_page_info'
        })
    },
    methods: {
        ...mapActions({
            change_current_page: 'questions/change_current_page'
        })        
    }
}

</script>

<style type="text/css" scoped>
.question_list {
    display: flex;
    flex-direction: column;
}
</style>
