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
