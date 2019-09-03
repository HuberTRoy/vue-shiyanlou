<template>
    <div class="course_related_lab_div">
        <ul class="course_nav_ul">
            <li class="course_nav_li">
                学过本课的同学也学过...
            </li>
        </ul>
        <div class="course_related_course_card_div">
            <CourseCard class="course_related_lab_card" 
            v-for="(course,index) in course_info['related_courses']"
            :key=index
            :data=course>
            </CourseCard>
        </div>
    </div>    
</template>
<script type="text/javascript">
import CourseCard from '@/components/common_components/cards/course_card.vue'

import { mapState } from 'vuex'

export default {
    components: {
        CourseCard
    },
    computed: {
        ...mapState({
            course_info: state => state.course.course_information
        })
    }
}
</script>
<style type="text/css">
.course_related_lab_div {
    background: #fff;
    border: 1px solid #eee;
    padding: 30px;
    /*width: 100%;*/
}

.course_nav_ul {
    margin-bottom: 20px;
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

.course_related_course_card_div {
    display: flex;
    flex-wrap: wrap;
}

.course_related_lab_card {
    width: 33.33%;
}

</style>
