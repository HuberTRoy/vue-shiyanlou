<template>
    <div class="main_question">
        <NavBar class="nav_bar"></NavBar>
        <QuestionContent></QuestionContent>
    </div>
</template>
<script type="text/javascript">
import NavBar from './main_question_sub_components/nav_bar.vue'
import QuestionContent from './main_question_sub_components/question_content.vue'

export default {
    components: {
        NavBar,
        QuestionContent
    }
}
</script>
<style type="text/css">
.nav_bar {
    margin-bottom: 10px;
}
</style>
