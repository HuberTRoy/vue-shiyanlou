<template>
    <div class="report_content_div">
        <div class="report_content_nav_div">
            <router-link tag="span"
                         class="report_content_nav_span"
                         :to="{ name: 'courses' }"
            >
                全部课程
            </router-link>
            <router-link tag="span"
                         class="report_content_nav_span"
                         :to="{ name: 'reports' }"
            >
                实验报告
            </router-link>
            <span class="report_content_nav_span_no_link">
                "{{ report_info.course_name }}"的实验报告
            </span>
        </div>
        <div class="report_content_home_layout">
            <MainReport></MainReport>
            <Side></Side>
        </div>
    </div>
</template>
<script type="text/javascript">
import MainReport from './sub_components/main_report.vue'
import Side from './sub_components/side.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        MainReport,
        Side
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
        }
    },
    created: async function () {
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
<style type="text/css" scoped>
.report_content_div {
    width: 1170px;
    margin: auto;
    padding: 0 30px;
}

.report_content_nav_div {
    padding: .75rem 0;
}

.report_content_nav_span {
    color: #08bf91;
    cursor: pointer;
}

.report_content_nav_span_no_link {
    color: #6c757d;
}

.report_content_nav_span:after {
    content: '/';
    color: #6c757d;
    padding-left: .5rem;
    padding-right: .5rem;
}

.report_content_home_layout {
    display: flex;
}

</style>
