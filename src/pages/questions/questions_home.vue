<template>
    <div class="question_home_div">
        <Questions></Questions>
    </div>
</template>

<script type="text/javascript">

import Questions from '@/components/questions_page/questions.vue'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    components: {
        Questions,
    },
    computed: {
        ...mapGetters({
            query_args: 'questions/router_args'
        })
    },

    methods: {
        ...mapActions({
            get_question_list: 'questions/change_question_list_information',
            get_related_stuff: 'questions/get_related_stuff',
            checkin: 'user/checkin'
        })
    },

    watch: {
        '$route': function () {
            this.get_question_list(this.query_args)
        }
    },

    mounted: function () {
        this.get_question_list(this.query_args)
        this.get_related_stuff()
        this.checkin({'method': 'GET'})
    }
}
</script>
<style type="text/css">
</style>
