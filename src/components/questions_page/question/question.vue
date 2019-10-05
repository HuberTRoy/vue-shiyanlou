<template>
    <div class="question">
        <MainQuestion class="main_question"></MainQuestion>
        <Side class="side_items"></Side>
    </div>
</template>
<script type="text/javascript">
import MainQuestion from './sub_components/main_question.vue'
import Side from './sub_components/side.vue'

import { mapActions } from 'vuex'

export default {
    components: {
        MainQuestion,
        Side
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
        }
    },
    created: function () {
        this.set_question_id(this.$route.params.id)
        this.get_question_information()
        this.get_related_question()
        this.get_reply()
    }
}
</script>
<style type="text/css" scoped>
.question {
    display: flex;
    width: 1170px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}

.main_question {
    width: 75%;
}

.side_items {
    margin-top: 28px;
    width: 25%;
}
</style>
