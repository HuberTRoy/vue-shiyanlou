<template>
    <div class="question_home_div">
        <Question></Question>
    </div>
</template>

<script type="text/javascript">

import Question from '@/components/questions_page/question/question.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        Question,
    },
    computed: {
        ...mapState({
            question_info: state => state.question.question_information
        })
    },
    methods: {
        ...mapActions({
            set_question_id: 'question/change_question_id',
            get_question_information: 'question/change_question_information',
            get_related_question: 'question/change_related_question_information',
            get_reply: 'question/change_question_reply_information'
        })
    },
    watch: {
        '$route': function () {
            this.set_question_id(this.$route.params.id)
            this.get_question_information()
            this.get_related_question()
            this.get_reply()         
        },
        question_info: function () {
            document.title = `${this.question_info.title} - 实验楼`
        }
    },
    mounted: function () {
        this.set_question_id(this.$route.params.id)
        this.get_question_information()
        this.get_related_question()
        this.get_reply()
    }
}
</script>
<style type="text/css">
</style>
