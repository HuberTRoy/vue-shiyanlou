<template>
    <div class="report_side_div">
        <!-- 
            布局：
            两块card
            一块er是报告作者数据
            一块er是
         -->
         <!-- <div class="reprot_side_layout"> -->
             <div class="report_side_block">
                <p class="report_side_header">实验数据</p>
                <div class="report_side_learn_data">
                    <div v-for="(value,key) in learn_data"
                         :key="key"
                    >
                        <span class="report_side_learn_data_span">{{ learn_data_dict[key] }}</span>
                        <span class="report_side_learn_data_span">{{ value }} {{ learn_data_dict2[key] }}</span>
                    </div>
                </div>
             </div>
             <div class="report_side_block">
                 <p class="report_side_header">相关报告</p>
                 <div class="report_side_related_report" 
                      v-for="(report) in related"
                      :key="report.id"
                 >
                     <router-link tag="span"
                                  :to="{ name: 'report', params: { id: report.id } }"
                     >
                        {{ report.course_name }} : {{ report.lab_name }} 实验报告
                     </router-link>
                 </div>
             </div>
         <!-- </div> -->
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    data: function () {
        return {
            learn_data_dict: {
                'study_minutes': '学习时间',
                'operation_minutes': '操作时间',
                'keystrokes_count': '按键次数',
                'running_times': '实验次数'
            },
            learn_data_dict2: {
                'study_minutes': '分钟',
                'operation_minutes': '分钟',
                'keystrokes_count': '次',
                'running_times': '次'
            }
        }
    },
    computed: {
        ...mapState({
            learn_data: state => state.reports.learn_data,
            related: state => state.reports.related
        })
    }
}

</script>
<style type="text/css" scoped>
.report_side_div {
    width: 25%;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
}

/*.reprot_side_layout {
    background: #fff;
}
*/
.report_side_block {
    background: #fff;
    margin-bottom: 30px;
    padding: 15px;
    display: flex;
    flex-direction: column;
}

.report_side_header {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    color: #666;
    font-weight: 700;
}

.report_side_learn_data_span {
    padding: 12px 16px;
    margin-top: 15px;
    font-size: 14px;
    line-height: 26px;
}

.report_side_related_report {
    padding: 12px;
    word-wrap: break-word;
    color: #4c5157;
    cursor: pointer;
}

.report_side_related_report:hover {
    background: #f9f9f9;
}
</style>
