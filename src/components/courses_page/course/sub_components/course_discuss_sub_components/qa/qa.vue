<template>
    <div class="qa_div">
        <v-loader :source="qa_information">
           <div class="question_div">
               <QaItem v-for="(qa, index) in qa_information.results"
                       :key="index"
                       :data="qa"
                >
               </QaItem>
           </div>
        </v-loader>
        <TabPage :pageType="'qa'">
        </TabPage>
    </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex'
import QaItem from '@/components/common_components/qa_item/qa_item.vue'
import TabPage from './qa_tab_page.vue'

export default {
    components: {
        QaItem,
        TabPage
    },

    computed: {
        ...mapState({
            course_id: state => state.course.course_id,
            qa_information: state => state.course.qa_information
        })
    },

    methods: {
        ...mapActions({
            get_qa: 'course/change_qa_information'
        })
    },

    mounted: function () {
        this.get_qa({
            'course_id': this.$route.params.id,
            'page': 1
        })
    }
}

</script>

<style type="text/css" scoped>
.submit_qa {
    display: inline-block;
    margin-top: 12px;
    color: #fff;
    background-color: #08bf91;
    border-color: #08bf91;
    padding: 6px 20px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid transparent;
}

.submit_qa:hover {
    color: #fff;
    background-color: #21d6a8;
}

.split_hr {
    margin: 20px 0;
    border: 0;
    border-top: 1px solid #eee;
}

</style>
