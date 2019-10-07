<template>
    <!--
        主要布局
        nav
        main
        tab page
     -->
    <div class="main_questions_div">
        <Navbar></Navbar>
        <QuestionList></QuestionList>
    </div>
</template>
<script type="text/javascript">
import Navbar from './main_questions_sub_components/nav_bar.vue'
import QuestionList from './main_questions_sub_components/question_list.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        Navbar,
        QuestionList
    }
}

</script>
<style type="text/css" scoped>
.main_questions_div {
    background: #fff;
    padding: 30px;
    border: 1px solid #eee;
    margin-bottom: 10px;
}
</style>
