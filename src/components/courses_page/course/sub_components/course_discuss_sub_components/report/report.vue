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
        <v-loader :source="report_info">
            <div class="expertimental_report_content">
                <ReportContentItem class="report_content_item"
                                   v-for="(item, index) in report_info.results"
                                   :key="index"
                                   :data="item"
                >
                </ReportContentItem>
            </div>
        </v-loader>
        <TabPage :pageType="'report'"></TabPage>
    </div>
</template>
<script type="text/javascript">
import ReportCategoryItem from './report_category_item.vue'
import ReportContentItem from '@/components/common_components/report_item/report_content_item.vue'
import TabPage from './report_tab_page.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        ReportCategoryItem,
        ReportContentItem,
        TabPage
    },

    computed: {
        ...mapState({
            lab_info: state => state.course.course_labs[0],
            report_info: state => state.course.report_information,            
            args: state => state.course.course_report_args
        })
    },
    methods: {
        ...mapActions({
            get_report: 'course/change_report_information'
        })
    },

    mounted: function () {
        this.get_report({
            'course_id': this.$route.params.id,
            'page_size': this.args.page_size
        })
    }
}

</script>
<style type="text/css" scoped>

.expertimental_category {
    display: flex;
    flex-wrap: wrap;
}

.expertimental_report_content {
    display: flex;
    flex-wrap: wrap;
}

.report_content_item {
    width: 25%;
}
</style>
