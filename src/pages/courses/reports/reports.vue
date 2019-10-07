<template>
    <div class="reports_home_div">
        <Reports></Reports>
    </div>
</template>
<script type="text/javascript">
import Reports from '@/components/courses_page/reports/reports.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        Reports
    },
    methods: {
        ...mapActions({
            change_reports_information: 'reports/change_labreports_information',
            get_categories: 'reports/change_categories'
        })
    },
    watch: {
        '$route': async function (newRoute) {
            await this.change_reports_information({
                page_size: 16,
                ...this.$route.query
            })
        }
    },
    mounted: async function () {
        await this.get_categories()
    }
}
</script>
<style type="text/css">
</style>
