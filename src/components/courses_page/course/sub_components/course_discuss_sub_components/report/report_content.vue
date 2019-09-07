<template>
    <div class="report_content">
        <ReportContentItem v-for="(item, index) in report_info.results"
                           :key="index"
                           :data="item"
        >
        </ReportContentItem>
    </div>
</template>

<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

import ReportContentItem from './report_content_item.vue'

export default {
    components: {
        ReportContentItem
    },

    computed: {
        ...mapState({
            course_id: state => state.course.course_information.id,
            report_info: state => state.course.report_information,
            args: state => state.course.course_report_args
         })
    },

    methods: {
        ...mapActions({
            get_report: 'course/change_report_information'
        })
    },

    // 应该放到父组件 report.vue 里。
    mounted: function () {
        this.get_report({
            'course_id': this.course_id,
            'page_size': this.args.page_size
        })
    }
}

</script>

<style type="text/css">
.report_content {
    display: flex;
    flex-wrap: wrap;
}

.report_content_item {
    width: 25%;
}
</style>
