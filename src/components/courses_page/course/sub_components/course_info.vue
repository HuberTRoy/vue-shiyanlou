<template>
    <div class="course_info">
        <div class="course_title_type_div">
            <h4>
                <span class="course_title_span">
                    {{ course_info.name }}
                </span>
                <span class="course_type_span"
                :class="course_type_class[course_info.fee_type]">
                    {{ course_name_type[course_info.fee_type] }}
                </span>
            </h4>
        </div>
        <div class="course_numbers_div">
            <p class="course_numbers_p">{{ course_info.students_count}} 人学过</p>
            <span class="course_numbers_line">
            </span>
            <p class="course_numbers_p"> {{ course_info.followers_count}} 人关注</p>
            <span class="course_numbers_line">
            </span>
            <p class="course_numbers_p">
                作者: {{ course_info.teacher.name }}
            </p>
<!--             <p class="course_numbers_p">{{ course_info.course_learning_information.comments_number}} 人评论</p> -->
        </div>

        <!-- 更新后下面不需要了 -->
       <div class="course_operation_div"> 
            <!-- 包括一些价格表和具体的开始实验按钮等 -->
            <p class="course_description">
                {{ course_info.description }}
            </p>
            <!-- 下面更新后暂时不要了 -->
            <!-- <div class="price_info"> -->
                <!-- 这里放价格信息 -->
            <!-- </div> -->
<!--             <div class="course_buttons">
                <a href="javascript:;" class="start_course_button">
                    开始实验
                </a>
            </div> -->
        </div> 
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    data () {
        return {
            course_type_class: {
                'free': 'free_course_p',
                'member': 'vip_course_p',
                'bootcamp': 'training_course_p',
                '': ''
            },
            course_name_type: {
                'free': '免费',
                'member': '会员',
                'bootcamp': '训练营'
            }
        }
    },
    computed: {
        ...mapState({
            course_info: state => state.course.course_information
        })
    }
}
</script>
<style type="text/css">

.course_info {
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
    padding: 30px;
    background: #fff;
}

/* 课程最上部的 title 和 type 区域 */
.course_title_type_div {
    display: flex;
}

.course_title_span {
    font-size: 21px;
    font-weight: 500;
}

/* course_type css设计 */
.course_type_span {
    display: inline-block;
    line-height: 1.6;
    color: #fff;
    padding: 0 6px;
    border-radius: 73px;
    font-size: 13px;
    margin-left: 8px;
}

.free_course_p {
    background: #80c269;
}

.training_course_p {
    background: #f66e6e;
}

.vip_course_p {
    background: #ffae0f;
}

/* 课程的参与人数 */
.course_numbers_div {
    display: flex;
    margin-top: 10px;
}

.course_numbers_p {
    margin-right: 10px;
    font-size: 14px;
    color: #a4a4a4;
}

.course_numbers_line:before {
    content: "";
    display: inline-block;
    height: 30px;
    width: 1px;
    background: #eee;
    margin: 0 8px -9px 4px;
}

/* 课程操作部分的一些信息，包括说明和按钮 */
.course_operation_div {
    display: flex;
    flex-direction: column;
}
.course_buttons {
    margin-top: 20px;
}

.course_description {
    font-size: 15px;
    color: #4c5157;
    margin-bottom: 20px;
}

.start_course_button {
    background: #08bf91;
    outline: 0;
    color: #fff;
    font-size: 16px;
    padding: 10px 78px;
    border-radius: 4px;
}

.start_course_button:hover {
    background: #21d6a8;
    color: #fff;
}

.start_course_button:active {
    background: #09ae84;
    color: #fff;
}

</style>
