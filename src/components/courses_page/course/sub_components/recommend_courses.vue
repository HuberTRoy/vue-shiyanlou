<template>
    <div class="recommend_courses">
        <ul class="recommend_courses_nav_ul">
            <li class="recommend_courses_nav_li">
                <a class="recommend_courses_nav_a">
                    进阶课程
                </a>
            </li>
        </ul>
        <ul class="recommend_courses_ul">
            <li v-for="(course, index) in recommend_courses"
                :key="index"
                class="recommend_courses_li"
            >
                <a href="javascript:;"
                   class="recommend_courses_a"
                >
                    {{ course.course_title }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            recommend_courses: state => state.course.course_information.recommend_courses
        })
    }
}

</script>

<style type="text/css">
.recommend_courses {
    background: #fff;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 15px;
}

.recommend_courses_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.recommend_courses_nav_li {

}

.recommend_courses_nav_a {
    display: block;
    padding: 0 0 4px;
    margin: 0 48px 0 0;
    font-size: 16px;
    color: #4c5157;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
}

.recommend_courses_li {
    font-size: 14px;
}

.recommend_courses_li:hover {
    background: #f5f5f5;
}

.recommend_courses_a {
    display: block;
    padding: 12px;
    width: 100%;
    height: 100%;
    color: #4c5157;
}

.recommend_courses_a:hover {
    color: #4c5157;
    background: #f5f5f5;
}

</style>
