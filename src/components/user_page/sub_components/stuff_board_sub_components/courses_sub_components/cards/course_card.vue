<template>
    <div class="stuff_board_course_card">
        <!--
                title
            img process                    start
                question report
                  ↑
                detail (args -> course_id, user_id)
         -->
         <div class="stuff_board_course_card_top">
             <div class="stuff_board_course_card_left">
                <router-link tag="img"
                             :to="{ name: 'course', params: {id: data.course_id} }"
                             :src="data.img"
                             class="stuff_board_course_img">
                </router-link>
             </div>
             <div class="stuff_board_course_card_right">
                <router-link tag="span"
                             :to="{ name: 'course', params: {id: data.course_id} }"
                             class="stuff_board_course_name"
                >{{ data.course_name }}</router-link>

                <span class="stuff_board_course_process">上次学到：{{ data.course_process }}</span>

                <div class="stuff_board_course_card_right_end">
                    <div class="question_report_buttons">
                        <span class="q_r_button report_button"
                              @click="tab_show_q_r_content('r')"
                        >
                            {{ data.count_report }} 篇实验报告
                            <i class="fas fa-angle-down angle"
                               :class="q_r_transform==='r' ? 'q_r_transform' : ''"
                            ></i>
                        </span>
                        <span class="q_r_button question_button"
                              @click="tab_show_q_r_content('q')"
                        >
                            {{ data.count_question }} 个提问
                            <i class="fas fa-angle-down angle"
                               :class="q_r_transform==='q' ? 'q_r_transform' : ''"
                            ></i>
                        </span>
                    </div>
                    <span class="start_button">进入实验</span>
                </div>
             </div>
         </div>
         <div class="stuff_board_course_card_end" v-if="show_q_r_content">
            <div class="stuff_board_course_arrow"
                 :style="{ right: arrow_right }"
            ></div>
            <div class="stuff_board_course_q_r_content">
                <Loading v-if="loading_state"></Loading>
                <div class="course_card_report_content" v-if="q_r_transform==='r' && loading_state===false">
                    <ReportItem class="course_report_item"
                                v-for="(report, index) in course_report.items"
                                :key="index"
                                :data="report"
                    ></ReportItem>
                </div>
                <div class="course_card_question_content" v-if="q_r_transform==='q' && loading_state===false">
                    <QaItem class="course_card_qa_item"
                            v-for="(question, index) in course_question.items"
                            :key="index"
                            :data="question"
                    ></QaItem>
                </div>
            </div>
         </div>
    </div>
</template>
<script type="text/javascript">
import Loading from '@/components/common_components/loading/loading.vue'
import QaItem from '@/components/common_components/qa_item/qa_item.vue'
import ReportItem from '@/components/common_components/report_item/report_content_item.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        Loading,
        ReportItem,
        QaItem
    },
    props: {
        data: {
            type: Object,
            require: true
        }
    },
    data () {
        return {
            show_q_r_content: false,
            q_r_transform: '',
            arrow_right: '50%'
        }
    },
    computed: {
        ...mapState({
            user_id: state => state.user.user_id,
            course_question: state => state.user.courses_question,
            course_report: state => state.user.courses_report,
            loading_state: state => state.user.loading_state
        }),
        api: function () {
            return {
                'q': this.get_question,
                'r': this.get_report
            }
        }
    },
    methods: {
        ...mapActions({
            get_question: 'user/get_user_courses_question',
            get_report: 'user/get_user_courses_report'
        }),
        get_args: function (page) {
            let args = {}
            args['user_id'] = this.user_id
            args['course_id'] = this.data.course_id
            args['page'] = 0
            if (page) {
                args['page'] = page
            }
            return args
        },
        tab_show_q_r_content: function (qR) {
            //
            if (qR === this.q_r_transform || this.q_r_transform === '') {
                this.show_q_r_content = !this.show_q_r_content
                if (!this.show_q_r_content === false) {
                    // 关闭状态切换到打开，此时需要加载数据。
                    this.api[qR](this.get_args())
                }
            } else {
                // 打开report时又切换到question 这种情况时只变更数据。
                this.api[qR](this.get_args())
            }

            // arrow state
            if (qR === 'q') {
                this.arrow_right = '50%'

                if (this.q_r_transform === 'q') {
                    this.q_r_transform = ''
                } else {
                    this.q_r_transform = 'q'
                }
            } else if (qR === 'r') {
                this.arrow_right = '62%'
                if (this.q_r_transform === 'r') {
                    this.q_r_transform = ''
                } else {
                    this.q_r_transform = 'r'
                }
            }
        }
    }
}
</script>
<style type="text/css">
.stuff_board_course_card {
    padding: 20px 0;
    border-bottom: 1px solid #eee;
}

.stuff_board_course_card_top {
    display: flex;
}

.stuff_board_course_card_left {
    width: 33%;
    padding: 0 15px;
}

.stuff_board_course_img {
    width: 100%;
    height: 100%;
    cursor: pointer;
}

/* */
.stuff_board_course_card_right {
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 66%;
}

.stuff_board_course_name {
    display: inline-block;
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
}

.stuff_board_course_process {
    font-size: 14px;
    color: #666;
    margin-bottom: 19px;
}

/* */
.stuff_board_course_card_right_end {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.question_report_buttons {
    display: flex;
}

.q_r_button {
    margin-right: 14px;
    font-size: 14px;
    color: #999;
    cursor: pointer;
}

.start_button {
    display: block;
    padding: 4px;
    font-size: 14px;
    color: #fff;
    background: #08bf91;
    border: 1px solid #eee;
    text-align: center;
    border-radius: 28px;
    width: 130px;
    cursor: pointer;
}

/* */
.stuff_board_course_card_end {
    width: 100%;
    margin-top: 20px;
    min-height: 80px;
    border: 1px solid #eee;
    position: relative;
}

.stuff_board_course_arrow {
    width: 0;
    height: 0;
    position: absolute;
}

.stuff_board_course_arrow:before {
    content: ' ';
    border: 15px solid #eee;
    border-color: transparent transparent #eee;
    position: absolute;
    top: -30px;
}

.stuff_board_course_arrow:after {
    content: ' ';
    border: 14px solid #fff;
    border-color: transparent transparent #fff;
    position: absolute;
    margin-left: 1px;
    top: -27px;
}

.q_r_transform {
    transform: rotate(180deg);
}

.angle {
    transition: all .3s ease-out;
}

/* item */
.course_card_report_content {
    display: flex;
    flex-wrap: wrap;
}

.course_card_report_item {
    width: 25%;
}

.course_card_question_content {
    display: flex;
    flex-direction: column;
}

</style>
