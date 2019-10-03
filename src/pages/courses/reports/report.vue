<template>
    <div class="report_home_div">
        <Report></Report>
    </div>
</template>
<script type="text/javascript">
import Report from '@/components/courses_page/reports/report/report.vue'

import { mapState } from 'vuex'

export default {
    components: {
        Report
    },
    computed: {
        ...mapState({
            report_info: state => state.reports.report_information
        })
    },
    watch: {
        report_info: function () {
            document.title = `${this.report_info.lab_name} - 实验楼`
        }
    }
}
</script>
<style type="text/css">

</style>
