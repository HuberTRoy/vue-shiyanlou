<template>
    <div class="courses_reports_home_div">
        <div class="courses_reports_home_nav_div">
            <router-link tag="span"
                         class="courses_reports_home_nav_span"
                         :to="{ name: 'courses' }"
            >
                全部课程
            </router-link>
            <span class="courses_reports_home_nav_span_no_link">
                实验报告
            </span>         
        </div>
        <div class="courses_reports_home_layout">
            <MainReports></MainReports>
            <Side></Side>
        </div>
    </div>
</template>
<script type="text/javascript">
import MainReports from './sub_components/main_reports.vue'
import Side from './sub_components/side.vue'

export default {
    components: {
        MainReports,
        Side
    }
}

</script>
<style type="text/css">
.courses_reports_home_div {
    width: 1170px;
    margin: auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
}

.courses_reports_home_nav_div {
    padding: .75rem 0;
}

.courses_reports_home_nav_span {
    color: #08bf91;
    cursor: pointer;
}

.courses_reports_home_nav_span_no_link {
    color: #6c757d;
}

.courses_reports_home_nav_span_no_link:before {
    content: '/';
    padding-left: .5rem;
    padding-right: .5rem;
}

.courses_reports_home_layout {
    display: flex;
}

</style>
