<template>
    <div class="report_home_div">
        <Report></Report>
    </div>
</template>
<script type="text/javascript">
import Report from '@/components/courses_page/reports/report/report.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        Report
    },
    computed: {
        ...mapState({
            report_info: state => state.reports.report_information
        })
    },
    methods: {
        ...mapActions({
            get_report_info: 'reports/change_report_information',
            get_learn_data: 'reports/change_learn_data',
            get_related: 'reports/change_related'
        })
    },
    watch: {
        '$route': async function () {
            await this.get_report_info({
                id: this.$route.params.id
            })
            await this.get_learn_data({
                id: this.$route.params.id
            })
            await this.get_related({
                id: this.$route.params.id
            })
        },
        report_info: function () {
            document.title = `${this.report_info.lab_name} - 实验楼`
        }
    },
    mounted: async function () {
        await this.get_report_info({
            id: this.$route.params.id
        })
        await this.get_learn_data({
            id: this.$route.params.id
        })
        await this.get_related({
            id: this.$route.params.id
        })
    }
}
</script>
<style type="text/css">

</style>
