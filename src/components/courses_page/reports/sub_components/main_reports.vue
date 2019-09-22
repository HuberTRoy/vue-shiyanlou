<template>
    <!-- 布局:
        nav p
        ----------
        | content |
     -->
    <div class="reports_home_main_reports_div">
        <div class="reports_home_main_reports_content_div">
            <div class="main_reports_content_header">
                <div class="main_reports_content_header_left">
                    <img src="https://static.shiyanlou.com/frontend/dist/img/7042f38.png">
                    <b style="margin-left: 10px">实验报告</b>
                    <span>(发现有价值的实验报告)</span>
                </div>
                <div class="main_reports_content_header_right">
                    <a href="" class="main_reports_content_sort_a">
                        最新
                    </a>
                    <a href="" class="main_reports_content_sort_a">
                        最热
                    </a>
                </div>
            </div>
            <div class="main_reports_content_reports">
                <!-- <ReportCard></ReportCard> -->
            </div>
        </div>     
    </div>
</template>
<script type="text/javascript">
import ReportCard from '@/components/common_components/report_item/report_content_item.vue'
export default {
    components: {
        ReportCard
    }
}
</script>
<style type="text/css">
.reports_home_main_reports_div {
    width: 75%;
    padding-right: 15px;
}

.reports_home_main_reports_content_div {
    background: #fff;
    padding: 30px;
}

.main_reports_content_header {
    display: flex;
    justify-content: space-between;
}

.main_reports_content_header_left {
    display: flex;
    align-items: center;
}

.main_reports_content_header_right {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.main_reports_content_sort_a {
    color: #b5bec5;
    font-size: 14px;
    margin: 0 4px;
}

</style>
