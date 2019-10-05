<template>
    <div class="learning_record">
        <div class="record_info">
            <span class="record_title"> 我的学习记录 </span>

            <div>
                <span class="record_content">当前连续学习 <span class="green_span">{{ learning_record_info.continuous_study }}</span> 天</span>
                <span class="record_content">最大连续学习 <span class="green_span">{{ learning_record_info.longest_continuous_study }}</span> 天</span>
                <span class="record_content">总学习天数 <span class="green_span">{{ learning_record_info.all_study }}</span> 天</span>
            </div>
        </div>

        <div class="record_graphics_div">

            <svg class="record_graphics" width="100%" height="150">
                <g class="weeks">
                    <!--
                        此处逻辑有些绕，因为没有range。
                        first_week 是得到 去年的今天是周几，然后用 7 减去得来的。
                        最高是7(周日)最低是1(周6)
                        然后是y的位置。
                        用例子来说明：
                        let first_week = 5
                        说明今天是周2 7-5 = 2，
                        这周还有5天剩余。
                        0 1 2 3 4 5 6
                        y要从第三行开始 14 * (3)
                                             ↓
                        ... 算了，重写个range方法吧，这个逻辑反反复复，一点都不简单清晰。

                     -->
                    <rect class="day_cell"
                          v-for="index in graphics_weeks.first_week"
                          :key="index"
                          width="12" height="12" x="0" :y="14*(index+(7-graphics_weeks.first_week-1))"
                          :fill="get_fill_color(graphics_weeks.first_week_stamp+86400*(index-1))"
                          :stamp="graphics_weeks.first_week_stamp+86400*(index-1)"
                          @mouseover="show_tip"
                          @mouseleave="slake_tip"
                          >

                    </rect>
                </g>
                <g class="weeks"
                   v-for="week in graphics_weeks.weeks"
                   :key="week"
                >
                    <rect class="day_cell"
                          v-for="index in 7"
                          :key="index"
                          width="12" height="12" :x="14*week" :y="14*(index-1)"
                          :fill="get_fill_color(graphics_weeks.weeks_stamp+86400*(7*(week-1)+(index-1)))"
                          :stamp="graphics_weeks.weeks_stamp+86400*(7*(week-1)+(index-1))"
                          @mouseover="show_tip"
                          @mouseleave="slake_tip">

                    </rect>
                </g>
                <g class="weeks">
                    <rect class="day_cell"
                          v-for="index in graphics_weeks.last_week"
                          :key="index"
                          width="12" height="12" :x="14*(graphics_weeks.weeks+1)" :y="14*(index-1)"
                          :fill="get_fill_color(graphics_weeks.last_week_stamp+86400*index)"
                          :stamp="graphics_weeks.last_week_stamp+86400*index"
                          @mouseover="show_tip"
                          @mouseleave="slake_tip"
                    >
                    </rect>
                </g>
            </svg>
            <div class="tip"
                 :class="show_record_tip ? 'show_record_tip' : '' "
                 :style="{top: current_record_tip_xy.top + 48 + 'px', left: current_record_tip_xy.left + 'px'}"
            >
                {{ user_learning_record[xyz.stamp] }} min on {{ date }}
            </div>
            <div class="record_graphics_footer_div">
                <div class="tab_button_div">
                    <span class="tab_button_span left_button"
                          @click="tab_year(-1)"
                    >
                        <i class="fas fa-caret-left"></i>
                    </span>
                    <span class="years">
                        {{ current_year - 1 }}-{{ current_year }}
                    </span>
                    <span class="tab_button_span right_button"
                          @click="tab_year(1)"
                    >
                        <i class="fas fa-caret-right"></i>
                    </span>
                </div>
                <div class="color_flag_div">
                    Less
                    <svg width="65px" height="12px">
                        <rect class="color_flag"
                              width="12" height="12" x='0'
                              :fill="colors.NotLearning"
                              :state="'NotLearning'"
                              @mouseover="show_color_flag_tip"
                              @mouseleave="slake_color_flag_tip">
                        </rect>
                        <rect class="color_flag"
                              width="12" height="12" x='13'
                              :fill="colors.LearningThirty"
                              :state="'LearningThirty'"
                              @mouseover="show_color_flag_tip"
                              @mouseleave="slake_color_flag_tip">
                        </rect>
                        <rect class="color_flag"
                              width="12" height="12" x='26'
                              :fill="colors.LearningSixty"
                              :state="'LearningSixty'"
                              @mouseover="show_color_flag_tip"
                              @mouseleave="slake_color_flag_tip">
                        </rect>
                        <rect class="color_flag"
                              width="12" height="12" x='39'
                              :fill="colors.LearningHundredTwenty"
                              :state="'LearningHundredTwenty'"
                              @mouseover="show_color_flag_tip"
                              @mouseleave="slake_color_flag_tip">
                        </rect>
                        <rect class="color_flag"
                              width="12" height="12" x='52'
                              :fill="colors.MoreThanHundredTwenty"
                              :state="'MoreThanHundredTwenty'"
                              @mouseover="show_color_flag_tip"
                              @mouseleave="slake_color_flag_tip">
                        </rect>
                    </svg>
                    More
                    <div class="tip"
                         :class="show_color_tip ? 'show_color_tip' : ''"
                         :style="{ bottom: '25px' }"
                    >
                        {{ color_flag_tip_text[learning_state] }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'
export default {
    data () {
        return {
            show_record_tip: false,
            show_color_tip: false,
            current_year: new Date().getFullYear(),
            xyz: {'top': 0, 'left': 0, 'date': '1999-99-99', 'stamp': 0},
            colors: {
                'NotLearning': '#eeeeee',
                'LearningThirty': '#b5e2d7',
                'LearningSixty': '#a1decf',
                'LearningHundredTwenty': '#7bd7c0',
                'MoreThanHundredTwenty': '#08bf91'
            },
            color_flag_tip_text: {
                'NotLearning': '有效学习时间为0',
                'LearningThirty': '0min<有效学习时间<=30 min',
                'LearningSixty': '30min<有效学习时间<=60 min',
                'LearningHundredTwenty': '60min<有效学习时间<=120 min',
                'MoreThanHundredTwenty': '有效学习时间>120 min'
            },
            learning_state: 'NotLearning'
        }
    },
    computed: {
        ...mapState({
            learning_record_info: state => state.user.user_info.learning_record_info,
            user_id: state => state.user.user_id,
            user_created_time: state => state.user.user_info.join_date,
            user_learning_record: state => state.user.user_learning_record
        }),
        graphics_weeks: function () {
            // 得到三个日期
            // first_week, week, last_week
            // first_week
            // 今天的日期： year month day
            // 今年-1，
            // let today = new Date()
            // let last_today = new Date(today.getFullYear()+today.getMonth()+today.getDate())
            // 然后计算出去年今天是周几
            // let lastTodayInAWeek = last_today.getDay()
            // let lastRest = 7 - lastTodayInAWeek
            // 计算出剩余几天，为最初一周的长度
            // 中间的长度用365-lastRest / 7 取整得到
            // 取余 + 1得到last_week，不加1当天会消失。

            let today = new Date(this.get_time(this.current_year))
            let lastToday = new Date(today.getFullYear() - 1 + '-' + (today.getMonth() + 1) + '-' + today.getDate())

            let wholeDayInAYear

            if ((today.getFullYear() - 1) % 4 === 0) {
                wholeDayInAYear = 366
            } else {
                wholeDayInAYear = 365
            }

            let lastTodayInAWeek = lastToday.getDay()
            let lastRest = 7 - lastTodayInAWeek
            let weeks = Math.floor((wholeDayInAYear - lastRest) / 7)
            let lastWeek = (wholeDayInAYear - lastRest) % 7 + 1

            return {
                // 分别是 天数，周数，天数,
                //       开始的时间戳，开始的时间戳，开始的时间戳
                'first_week': lastRest,
                'weeks': weeks,
                'last_week': lastWeek,
                'first_week_stamp': Math.floor(lastToday.getTime() / 1000),
                // first_week_stamp + 86400 * lastRest
                'weeks_stamp': Math.floor((lastToday.getTime() / 1000) + 86400 * lastRest),
                'last_week_stamp': Math.floor((lastToday.getTime() / 1000) + 86400 * (wholeDayInAYear - lastWeek))
            }
        },
        current_record_tip_xy: function () {
            return this.xyz
        },
        date: function () {
            return this.xyz.date
        }
    },

    methods: {
        ...mapActions({
            get_user_learning_record: 'user/get_and_change_user_learning_record'
        }),
        get_time: function (year) {
            let today = new Date()
            let date = '-' + (today.getMonth() + 1) + '-' + today.getDate()
            if (year) {
                return year + date
            }

            return today.getFullYear() + date
        },
        show_tip: function (element) {
            this.show_record_tip = true

            let _element = element.toElement
            let x = _element.getAttribute('x')
            let y = _element.getAttribute('y')
            let stamp = _element.getAttribute('stamp')

            this.xyz.top = Number(y)
            this.xyz.left = Number(x)

            let date = new Date(stamp * 1000)
            this.xyz.stamp = stamp
            this.xyz.date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        },
        slake_tip: function () {
            this.show_record_tip = false
        },
        show_color_flag_tip: function (element) {
            // this.learningState = learningState
            this.show_color_tip = true

            this.learning_state = element.toElement.getAttribute('state')
        },
        slake_color_flag_tip: function () {
            this.show_color_tip = false
        },
        get_fill_color: function (stamp) {
            let mins = this.user_learning_record[stamp]
            if (mins === 0) {
                return this.colors['NotLearning']
            } else if (mins > 0 && mins <= 30) {
                return this.colors['LearningThirty']
            } else if (mins > 30 && mins <= 60) {
                return this.colors['LearningSixty']
            } else if (mins > 60 && mins <= 120) {
                return this.colors['LearningHundredTwenty']
            } else if (mins > 120) {
                return this.colors['MoreThanHundredTwenty']
            }
        },
        tab_year: function (year) {
            if (this.current_year + year > new Date().getFullYear() ||
                this.current_year + year < new Date(this.user_created_time).getFullYear() + 1) {
                return
            }
            this.current_year += year
            this.get_user_learning_record({'id': this.user_id, 'end_time': this.get_time(this.current_year)})
        }
    },

    created: function () {
        this.get_user_learning_record({'id': this.user_id, 'end_time': this.get_time(null)})
    }
}

</script>
<style type="text/css" scoped>
.learning_record {
    display: flex;
    flex-direction: column;
    padding: 30px 30px 0;
    background: #fff;
    margin-top: 10px;
    position: relative;
}

/* */
.record_info {
    display: flex;
    justify-content: space-between;
}

.record_title {
    font-size: 16px;
    color: #666;
    display: block;
}

.record_content {
    font-size: 14px;
    color: #999;
}

.green_span {
    font-size: 16px;
    font-weight: 700;
    color: #08bf91;
}

/* */
.record_graphics {
    padding: 26px;
}

.record_graphics_div {
    /*position: relative;*/
}

.day_cell:hover {
    stroke: #555555;
    stroke-width: 1px;
}

.tip {
    position: absolute;
    display: none;
    z-index: 9999;
    padding: 5px 9px;
    color: #bbbbbb;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.85);
    border-radius: 3px;
    text-align: center;
}

.show_record_tip {
    display: flex;
}

.show_color_tip {
    display: flex;
}

/* */

.record_graphics_footer_div {
    padding: 0 26px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
}

.tab_button_div {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.tab_button_span {
    color: #a4a4a4;
    font-size: 18px;
    cursor: pointer;
    margin: 0 5px;
}

.tab_button_span:hover {
    color: #666;
}

.years {
    color: #a4a4a4;
    font-size: 14px;
}

</style>
