<template>
    <div class="stuff_board_reports">
        <ReportItem class="stuff_board_report_item"
                    v-for="report in report_content.items"
                    :key="report.id"
                    :data="report"
        ></ReportItem>
    </div>
</template>
<script type="text/javascript">
import ReportItem from '@/components/common_components/report_item/report_content_item.vue'

import { mapState } from 'vuex'

export default {
    components: {
        ReportItem
    },
    computed: {
        ...mapState({
            user_id: state => state.user.user_id,
            report_content: state => state.user.report_content
        })
    },
    created: function () {
        this.$store.dispatch('user/get_and_change_report_content', {
            'id': this.user_id,
        })
    }
}
</script>

<style type="text/css">
.stuff_board_reports {
    display: flex;
    flex-wrap: wrap;
}

.stuff_board_report_item {
    width: 25%;
}
</style>
