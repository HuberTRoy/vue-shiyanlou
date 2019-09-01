<template>
    <div class="expertimental_report">
        <div class="expertimental_category">
            <ReportCategoryItem :category="'全部'"
                                :category_id="0"
            >
            </ReportCategoryItem>
            <ReportCategoryItem v-for="lab in lab_info"
                                :key="lab.lab_id"
                                :category="lab.course_name"
                                :category_id="lab.lab_id"
            >
            </ReportCategoryItem>
        </div>
        <div class="expertimental_report_content">
            <ReportContent></ReportContent>
        </div>
        <TabPage :pageType="'report'"></TabPage>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
import ReportCategoryItem from './report_category_item.vue'
import ReportContent from './report_content.vue'
import TabPage from '../tab_page.vue'

export default {
    components: {
        ReportCategoryItem,
        ReportContent,
        TabPage
    },

    computed: {
        ...mapState({
            lab_info: state => state.course.course_information.course_process
        })
    }
}

</script>
<style type="text/css">

.expertimental_category {
    display: flex;
    flex-wrap: wrap;
}

</style>
