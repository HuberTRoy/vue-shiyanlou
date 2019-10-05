<template>
    <div class="questions_root_div">
        <MainQuestions class="main_questions"></MainQuestions>
        <Side class="side_questions"></Side>
    </div>
</template>

<script type="text/javascript">
import MainQuestions from './sub_components/main_questions.vue'
import Side from './sub_components/side.vue'

export default {
    components: {
        MainQuestions,
        Side
    }
}

</script>
<style type="text/css" scoped>
.questions_root_div {
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 5px;
    display: flex;
}

.main_questions {
    width: 75%;
}

.side_questions {
    width: 25%;
}
</style>
