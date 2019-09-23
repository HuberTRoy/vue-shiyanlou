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
                报告名字
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

export default {
    components: {
        MainReport,
        Side
    }
}

</script>
<style type="text/css">
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
