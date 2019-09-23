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
                    <a href="javascript:;" 
                       class="main_reports_content_sort_a"
                       :class="[sort=='newest' ? 'main_reports_content_sort_a_active' : '']"
                       @click="_change_sort('newest')"
                    >
                        最新
                    </a>
                    <a href="javascript:;" 
                       class="main_reports_content_sort_a"
                       :class="[sort=='hot' ? 'main_reports_content_sort_a_active' : '']"
                       @click="_change_sort('hot')"         
                    >
                        最热
                    </a>
                </div>
            </div>
            <div class="main_reports_content_reports">
                <ReportCard class="main_reports_content_report"
                            v-for="(report,index) in labreports_information.results"
                            :key="index"
                            :data="report"
                >
                </ReportCard>
            </div>
            <TabPage></TabPage>
        </div>     
    </div>
</template>
<script type="text/javascript">
import ReportCard from '@/components/common_components/report_item/report_content_item.vue'
import TabPage from './tab_page.vue'
import { mapState, mapActions } from 'vuex'

export default {
    components: {
        ReportCard,
        TabPage
    },
    computed: {
        ...mapState({
            labreports_information: state => state.reports.labreports_information,
            sort: state => state.reports.reports_args.sort
        })
    },
    methods: {
        ...mapActions({
            get_labreports: 'reports/change_labreports_information',
            change_sort: 'reports/change_reports_args'
        }),
        _change_sort: function (sort) {
            this.change_sort({'sort': sort})
            this.$router.push({ name: 'reports', query: {
                ...this.$route.query,
                'sort': sort
            }})
        }
    },
    created: async function () {
        await this.get_labreports({
            page_size: 16
        })
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

.main_reports_content_sort_a, .main_reports_content_sort_a:hover  {
    color: #b5bec5;
    font-size: 14px;
    margin: 0 4px;
}

/*.main_reports_content_sort_a:hover {
    color: #b5bec5;
}*/

.main_reports_content_sort_a_active, .main_reports_content_sort_a_active:hover {
    color: #1abc9c;
}

.main_reports_content_reports {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}

.main_reports_content_report {
    width: 25%;
}
</style>
