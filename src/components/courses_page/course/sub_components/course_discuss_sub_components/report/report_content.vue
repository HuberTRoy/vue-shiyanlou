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
import { mapState } from 'vuex'

import ReportContentItem from '@/components/common_components/report_item/report_content_item.vue'

export default {
    components: {
        ReportContentItem
    },

    computed: {
        ...mapState({
            report_info: state => state.course.report_information
         })
    }
}

</script>

<style type="text/css" scoped>
.report_content {
    display: flex;
    flex-wrap: wrap;
}

.report_content_item {
    width: 25%;
}
</style>
