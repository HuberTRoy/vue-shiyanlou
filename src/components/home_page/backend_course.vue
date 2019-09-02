<template>
    <div class="backend_course_div">
        <Title class="backend_course_div_title"
               :title="backend_course_content.classify_name"
        >

        </Title>

        <div class="backend_normal_card_div">
            <NormalCard class="backend_normal_card"
                        :data="backend_course_content.recommend_course ? backend_course_content.recommend_course : {}"
            >

            </NormalCard>
        </div>
        <div class="backend_stretch_card_div">
            <CourseCard class="backend_course_card"
                        v-for="(course,index) in backend_course_content['courses']"
                        :key="index"
                        :data="course"
            >

            </CourseCard>
        </div>
    </div>
</template>

<script type="text/javascript">
import Title from './sub_components/title.vue'
import NormalCard from '../common_components/cards/card.vue'
import CourseCard from '../common_components/cards/course_card.vue'

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            backend_course_content: state => state.home.home_content.classfication_courses[3]
        })
    },
    components: {
        Title,
        NormalCard,
        CourseCard
    }
}
</script>

<style type="text/css">
.backend_course_div {
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px;
    justify-content: flex-start;
    flex-direction: row;
    margin-bottom: 30px;

}

.backend_course_div_title {
    margin-bottom: 30px;
}

.backend_normal_card_div {
    width: 25%;
    height: 522px;
}

.backend_normal_card {
    width: 100%;
    height: 100%;
}

.backend_stretch_card_div {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
}

.backend_course_card {
    margin: 0 0 20px;
    padding-right: 15px;
    padding-left: 15px;
    width: 33.33%;
}
</style>
