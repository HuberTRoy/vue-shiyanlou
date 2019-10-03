<template>
    <div class="question_home_div">
        <Question></Question>
    </div>
</template>

<script type="text/javascript">

import Question from '@/components/questions_page/question/question.vue'

import { mapState } from 'vuex'

export default {
    components: {
        Question,
    },
    computed: {
        ...mapState({
            question_info: state => state.question.question_information
        })
    },
    watch: {
        question_info: function () {
            document.title = `${this.question_info.title} - 实验楼`
        }
    }
}
</script>
<style type="text/css">
</style>
