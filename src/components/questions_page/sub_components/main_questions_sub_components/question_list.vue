<template>
    <div class="question_list">
        <QuestionItem v-for="(question, index) in question_list_info.question_list"
                      :key="index"
                      :data="question"

        ></QuestionItem>
        <TabPage
        :pageType="'question_list'"
        ></TabPage>
    </div>
</template>
<script type="text/javascript">
import QuestionItem from '@/components/common_components/qa_item/qa_item.vue'

import TabPage from './tab_page.vue'

import { mapState } from 'vuex'

export default {
    components: {
        QuestionItem,
        TabPage
    },

    computed: {
        ...mapState({
            question_list_info: state => state.questions.question_list_information
        })
    }
}

</script>

<style type="text/css">
.question_list {
    display: flex;
    flex-direction: column;
}
</style>
