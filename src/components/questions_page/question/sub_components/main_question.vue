<template>
    <div class="main_question">
        <NavBar class="nav_bar"></NavBar>
        <QuestionContent></QuestionContent>
    </div>
</template>
<script type="text/javascript">
import NavBar from './main_question_sub_components/nav_bar.vue'
import QuestionContent from './main_question_sub_components/question_content.vue'

import { mapActions } from 'vuex'

export default {
    components: {
        NavBar,
        QuestionContent
    },
    methods: {
        ...mapActions({
            set_question_id: 'question/change_question_id',
            get_question_information: 'question/change_question_information'
        })
    },
    created: function () {
        this.set_question_id(this.$route.params.id)
        this.get_question_information()
    }
}
</script>
<style type="text/css">
.nav_bar {
    margin-bottom: 10px;
}
</style>
