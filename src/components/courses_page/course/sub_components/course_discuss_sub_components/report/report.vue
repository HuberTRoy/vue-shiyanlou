<template>
    <div class="expertimental_report">
        <div class="expertimental_category">
            <ReportCategoryItem :category="'全部'"
                                :category_id="0"
            >
            </ReportCategoryItem>
            <ReportCategoryItem v-for="lab in lab_info.labs"
                                :key="lab.id"
                                :category="lab.name"
                                :category_id="lab.id"
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
import TabPage from './report_tab_page.vue'

export default {
    components: {
        ReportCategoryItem,
        ReportContent,
        TabPage
    },

    computed: {
        ...mapState({
            lab_info: state => state.course.course_labs[0]
        })
    }
}

</script>
<style type="text/css" scoped>

.expertimental_category {
    display: flex;
    flex-wrap: wrap;
}

</style>
