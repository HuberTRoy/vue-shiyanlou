<template>
    <div class="course_teacher_div">
        <ul class="course_nav_ul">
            <li class="course_nav_li">
                课程教师
            </li>
        </ul>
        <div class="course_author_main_div">
            <div class="author_base_info">
                <div class="author_avatar">
                    <router-link tag="a" :to="{ name: 'user', params: {id: course_author_info.teacher.id} }">
                        <img :src="course_author_info.teacher.avatar_url" class="course_teacher_avatar">
                    </router-link>
                </div>
                <div class="author_name_course_history">
                    <span class="author_name_span">
                        {{ course_author_info.teacher.name }} 
                        <span class="author_history_span">共发表过{{ course_author_info.teacher.published_courses_count }}门课程</span>
                    </span>
                    <span class="teacher_description">
                        {{ course_author_info.teacher.teacher_info.description }}
                    </span>
                    <router-link tag="a" 
                                 :to="{ name: 'user', params: {id: course_author_info.teacher.id} }"
                                 class="look_up_teacher"
                    >
                        查看老师的所有课程 >
                    </router-link>
                </div>
            </div>
        </div>
    </div>    
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            course_author_info: state => state.course.course_information
        })
    }
}    
</script>
<style type="text/css" scoped>
.course_teacher_div {
    background: #fff;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-bottom: 10px;
}

.course_author_main_div {
    padding-top: 5px; 
    margin-top: 20px;
}

.course_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.course_nav_li {
    color: #565656;
    font-weight: 500;
    font-size: 20px;
    padding-bottom: 5px;
}

.author_base_info {
    display: flex;
}

.course_teacher_avatar {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin-right: 20px;
}

.author_name_course_history {
    display: flex;
    flex-direction: column;
}

.author_name_span {
    display: block;
    font-size: 15px;
    /*font-weight: bold;*/
    /*margin: 5px 0;*/
    margin-bottom: 10px;
}

.author_history_span {
    color: #999;
    font-size: 12px;
    /*font-weight: normal;*/
}

.author_description {
    padding: 5px;
    padding-bottom: 10px;
    font-size: 14px;
    line-height: 24px;
    color: #4c5157;
}

/*.location_author {
    display: flex;
    justify-content: flex-start;
}*/

.look_up_teacher {
    color: #999;
    font-size: 14px;
    margin-top: 10px;
}

.look_up_teacher:hover {
    color: #999;
}

.teacher_description {
    font-size: 14px;
}
</style>
