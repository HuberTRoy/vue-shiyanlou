<template>
    <div class="expertimental_report">
        <div class="expertimental_category">
            <ReportCategoryItem :category="'全部'"
                                :category_id="0"
            >
            </ReportCategoryItem>
            <ReportCategoryItem v-for="lab in lab_info.labs"
                                :key="lab.id"
                                :category="lab.name"
                                :category_id="lab.id"
            >
            </ReportCategoryItem>
        </div>
        <v-loader :source="report_info">
            <div class="expertimental_report_content">
                <ReportContentItem class="report_content_item"
                                   v-for="(item, index) in report_info.results"
                                   :key="index"
                                   :data="item"
                >
                </ReportContentItem>
            </div>
        </v-loader>
        <TabPage 
        :next="() => { tab_page(next) }"
        :prev="() => { tab_page(prev) }"
        >
        </TabPage>
    </div>
</template>
<script type="text/javascript">
import ReportCategoryItem from './report_category_item.vue'
import ReportContentItem from '@/components/common_components/report_item/report_content_item.vue'
import TabPage from '@/components/common_components/tab_page/tab_page.vue'

import { mapState, mapActions } from 'vuex'

import utils from '@/utils/base.js'

export default {
    components: {
        ReportCategoryItem,
        ReportContentItem,
        TabPage
    },

    computed: {
        ...mapState({
            lab_info: state => state.course.course_labs[0],
            report_info: state => state.course.report_information,            
            args: state => state.course.course_report_args,
            prev: state => { 
                let p = state.course.report_information.previous
                if (p) {
                    p = utils.translate_query(p.split('?')[1])
                    p = decodeURIComponent(p.cursor)
                    return p
                }
                return ''
            },
            next: state => {
                let n = state.course.report_information.next
                if (n) {
                    n = utils.translate_query(n.split('?')[1])
                    n = decodeURIComponent(n.cursor)
                    return n
                }
                return ''
            },
            lab_id: state => state.course.course_report_args.lab_id
        })
    },
    methods: {
        ...mapActions({
            get_report: 'course/change_report_information'
        }),
        tab_page: function (cursor) {
            this.get_report({
                'course_id': this.$route.params.id,
                'lab_id': this.lab_id,
                'page_size': 16,
                'cursor': cursor
            })
        }
    },

    mounted: function () {
        this.get_report({
            'course_id': this.$route.params.id,
            'page_size': this.args.page_size
        })
    }
}

</script>
<style type="text/css" scoped>

.expertimental_category {
    display: flex;
    flex-wrap: wrap;
}

.expertimental_report_content {
    display: flex;
    flex-wrap: wrap;
}

.report_content_item {
    width: 25%;
}
</style>
