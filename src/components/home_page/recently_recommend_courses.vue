<template>
    <div class="recently_recommend_courses">
        <Title class="recently_recommend_course_div_title"
               :title="recently_recommend_courses_content['classify_name'] + ' | '"
               :description="recently_recommend_courses_content['description']"
        >
        </Title>

        <div class="outer_recently_recommend_courses_div">
            <transition-group
            :name="turn_direction=='right' ? 'recently_recommend_courses_transition_right' : 'recently_recommend_courses_transition_left'"
            tag="ul"
            class="recently_recommend_courses_ul">
                <li v-for="(courses, index) in recently_recommend_courses_content['courses']"
                     :key="index"
                     class="recently_recommend_courses_li"
                     v-show="current_index==index"
                >
                        <CourseCard class="recently_recommend_courses_card"
                                    v-for="(course,index) in courses"
                                    :key="index"
                                    :data="course"
                        >

                        </CourseCard>

                </li>
            </transition-group>
            <div class="tab_courses_div">
                <a @click="turn_left"
                   href="javascript:1"
                   class="tab_courses_a tab_courses_a_left">
                    <span class="tab_courses_button tab_courses_button_left"></span>
                </a>
                <a @click="turn_right"
                   href="javascript:1"
                   class="tab_courses_a tab_courses_a_right">
                    <span class="tab_courses_button tab_courses_button_right"></span>
                </a>
            </div>

            <div class="shadow_div"
                 :class="has_turn? 'shadow_div_left':''"
            >

            </div>
            <div class="shadow_div2"
                 :class="has_turn? 'shadow_div_right':''"
            >

            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import Title from './sub_components/title.vue'
import CourseCard from '../common_components/cards/course_card.vue'

import { mapState } from 'vuex'

export default {
    data () {
        return {
            current_index: 0,
            turn_direction: 'right',
            has_turn: false
        }
    },
    computed: {
        ...mapState({
            recently_recommend_courses_content: state => state.home.home_content.classfication_courses[1]
        })
    },
    components: {
        Title,
        CourseCard
    },

    methods: {
        turn_left: function (a) {
            this.turn_direction = 'left'
            this.has_turn = true
            if (this.current_index - 1 >= 0) {
                this.current_index -= 1
            } else {
                this.current_index = this.recently_recommend_courses_content['courses'].length - 1
            }
            let _this = this
            setTimeout(function () { _this.has_turn = false }, 600)
        },

        turn_right: function (a) {
            this.turn_direction = 'right'
            this.has_turn = true
            if (this.current_index + 1 > this.recently_recommend_courses_content['courses'].length - 1) {
                this.current_index = 0
            } else {
                this.current_index += 1
            }
            let _this = this
            setTimeout(function () { _this.has_turn = false }, 600)
        }
    }
}

</script>

<style type="text/css">

/* 最外层设置 */
.recently_recommend_courses {
    display: flex;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    padding: 0 15px;
    margin-bottom: 30px;
}

/* 标题 */
.recently_recommend_course_div_title {
    margin-bottom: 30px;
}

/* 轮播图左右过渡 */

.recently_recommend_courses_transition_left-move, .recently_recommend_courses_transition_right-move {
    transition: translateX .6s;
}

/* 左过渡 */
.recently_recommend_courses_transition_left-enter-to {
    transition: all .6s ease;
    transform: translateX(0);
}

.recently_recommend_courses_transition_left-leave-to {
    transition: all .6s ease;
    transform: translateX(-100%);
}

.recently_recommend_courses_transition_left-enter {
    transform: translateX(100%);
}

.recently_recommend_courses_transition_left-leave {
    transform: translateX(0);
}

/* 右过渡 */
.recently_recommend_courses_transition_right-enter-to {
    transition: all .6s ease;
    transform: translateX(0);
}

.recently_recommend_courses_transition_right-leave-to {
    transition: all .6s ease;
    transform: translateX(100%);
}

.recently_recommend_courses_transition_right-enter {
    transform: translateX(-100%);
}

.recently_recommend_courses_transition_right-leave {
    transform: translateX(0);
}

/*  课程显示区域 */

.recently_recommend_courses_li {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    position: absolute;
}

.outer_recently_recommend_courses_div {
    position: relative;
    height: 270px;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
}

/* 单个课程card设置 */
.recently_recommend_courses_card {
    width: 25%;
    margin: 0 0 20px;
    padding-right: 15px;
    padding-left: 15px;
}

/* 鼠标hover时显示左右切换按钮 */
.outer_recently_recommend_courses_div:hover .tab_courses_div {
    display: block;
}

/* 左右切换按钮 */

.tab_courses_div {
    display: none;
}

.tab_courses_a {
    position: absolute;
    display: block;
    height: 60px;
    width: 60px;
    top: 50%;
    bottom: 50%;
    border-radius: 30px;
    background: #9e9c9c;
    opacity: .6;
    text-align: center;
    line-height: 1.8;
    z-index: 5;
}

.tab_courses_button {
    height: 30px;
    width: 30px;
    font-size: 30px;
    color: #fff;
    /*text-align: center;*/
}

.tab_courses_a_left {
    left: 15px;
    transform: translate(0, -50%);
}

.tab_courses_button_left:before {
    content: "<";
}

.tab_courses_a_right{
    right: 15px;
    transform: translate(0, -50%);
}

.tab_courses_button_right:before {
    content: ">";
}

/* 放置在课程两侧的阴影区域，用于提醒这个一个可滚动的区域。 */

.shadow_div, .shadow_div2 {
    position: absolute;
    width: 20px;
    height: 250px;
    opacity: .3;
    transition: all .3s ease-in-out;
}

.shadow_div {
    left: 15px;
    /*left: 0;*/
    background-image: linear-gradient(270deg,transparent,#777);
}

.shadow_div_left {
    left: 0;
}

.shadow_div2 {
    right: 15px;
    /*right: 0;*/
    background-image: linear-gradient(90deg,transparent,#777);
}

.shadow_div_right {
    right: 0;
}

</style>
