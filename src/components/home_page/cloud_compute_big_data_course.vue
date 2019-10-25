<template>
    <v-loader :source="cloud_compute_big_data_course_content">
        <div class="cloud_compute_big_data_course_div">
            <Title class="cloud_compute_big_data_course_div_title"
                   :title="cloud_compute_big_data_course_content['classify_name']"
            >

            </Title>

            <div class="cloud_compute_big_data_normal_card_div">
                <NormalCard class="cloud_compute_big_data_normal_card"
                            :data="cloud_compute_big_data_course_content.recommend_course ?
                            cloud_compute_big_data_course_content.recommend_course : {}"
                >

                </NormalCard>
            </div>
            <div class="cloud_compute_big_data_stretch_card_div">
                <CourseCard class="cloud_compute_big_data_course_card"
                            v-for="(course,index) in cloud_compute_big_data_course_content['courses']"
                            :key="index"
                            :data="course"
                >

                </CourseCard>
            </div>
        </div>
    </v-loader>
</template>

<script type="text/javascript">
import Title from './sub_components/title.vue'
import NormalCard from '../common_components/cards/card.vue'
import CourseCard from '../common_components/cards/course_card.vue'

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            cloud_compute_big_data_course_content: state => state.home.home_content.classfication_courses[4]
        })
    },
    components: {
        Title,
        NormalCard,
        CourseCard
    }
}
</script>

<style type="text/css" scoped>
.cloud_compute_big_data_course_div {
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

.cloud_compute_big_data_course_div_title {
    margin-bottom: 30px;
}

.cloud_compute_big_data_normal_card_div {
    width: 25%;
    height: 522px;
}

.cloud_compute_big_data_normal_card {
    width: 100%;
    height: 100%;
}

.cloud_compute_big_data_stretch_card_div {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
}

.cloud_compute_big_data_course_card {
    margin: 0 0 20px;
    padding-right: 15px;
    padding-left: 15px;
    width: 33.33%;
}
</style>
