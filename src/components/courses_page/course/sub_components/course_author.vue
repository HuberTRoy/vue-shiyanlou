<template>
    <div class="course_author_info_div">
        <ul class="course_author_nav_ul">
            <li class="course_author_nav_li">
                <a class="course_author_nav_a">
                    课程教师
                </a>
            </li>
        </ul>

        <div class="course_author_main_div">
            <div class="author_base_info">
                <div class="author_avatar">
                    <a href="javascript:;">
                        <img :src="course_author_info.avatar" class="avatar">
                    </a>
                </div>
                <div class="author_name_course_history">
                    <span class="author_name_span">
                        {{ course_author_info.name }}
                    </span>
                    <span class="author_history_span">
                        共发表过<strong>{{ course_author_info.published_courses_number }}</strong>门课程
                    </span>
                </div>
            </div>
            <div class="author_description">
                {{ course_author_info.description }}
            </div>
            <div class="location_author">
                <a href="javascript:;"
                   class="look_up_teacher"
                >
                    查看老师的所有课程 >
                </a>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            course_author_info: state => state.course.course_information.author
        })
    }
}

</script>

<style type="text/css">
.course_author_info_div {
    background: #fff;
    padding: 15px;
    margin-bottom: 10px;
    margin-left: 10px;
}

.course_author_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.course_author_nav_li {

}

.course_author_nav_a {
    display: block;
    padding: 0 0 4px;
    margin: 0 48px 0 0;
    font-size: 16px;
    color: #4c5157;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
}

.author_base_info {
    display: flex;
}

.avatar {
    height: 64px;
    width: 64px;
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
    font-weight: bold;
    margin: 5px 0;
}

.author_history_span {
    font-size: 14px;
}

.author_description {
    padding: 5px;
    padding-bottom: 10px;
    font-size: 14px;
    line-height: 24px;
    color: #4c5157;
}

.location_author {
    display: flex;
    justify-content: flex-end;
}

.look_up_teacher {
    color: #529fd2;
    font-size: 14px;
}

</style>
