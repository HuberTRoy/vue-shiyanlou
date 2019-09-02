<template>
    <div class="base_course_div">
        <Title class="base_course_div_title"
               :title="base_course_content['classify_name'] + ' | '"
               :description="base_course_content['description']"
        >
        </Title>
        <CourseCard class="base_course_card"
                    v-for="(course,index) in base_course_content['courses']"
                    :key="index"
                    :data="course"
        >
        </CourseCard>
    </div>
</template>
<script type="text/javascript">
import Title from './sub_components/title.vue'
import CourseCard from '../common_components/cards/course_card.vue'

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            base_course_content: state => state.home.home_content.classfication_courses[2]
        })
    },
    components: {
        Title,
        CourseCard
    }
}
</script>

<style type="text/css">
/* 最外层设置 */
.base_course_div {
    display: flex;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    padding: 0 15px;
    margin-bottom: 30px;
}

.base_course_div_title {
    margin-bottom: 30px;
}

.base_course_card {
    width: 25%;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 0 20px;
}
</style>
