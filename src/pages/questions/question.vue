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
}
</script>
<style type="text/css">
</style>
