<template>
    <div class="question_home_div">
        <Questions></Questions>
    </div>
</template>

<script type="text/javascript">

import Questions from '@/components/questions_page/questions.vue'

import { mapState } from 'vuex'

export default {
    components: {
        Questions,
    },
}
</script>
<style type="text/css">
</style>
