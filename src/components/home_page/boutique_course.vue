<template>
    <div class="boutique_course_div">
        <Title class="boutique_course_div_title"
               :title="'精选项目课 | '"
               :description="'精选会员项目课程，动手中收获'"
        >

        </Title>
        <NormalCard class="boutique_normal_card"
                    :data="boutique_course_content['normal'] ? boutique_course_content['normal'] : {}"
        >

        </NormalCard>
        <CourseCard class="boutique_course_card"
                    v-for="(course,index) in boutique_course_content['courses']"
                    :key="index"
                    :data="course"
        >

        </CourseCard>
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
            boutique_course_content: state => state.home.home_content.boutique_course_content
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
.boutique_course_div {
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

.boutique_course_div_title {
    margin-bottom: 30px;
}

.boutique_normal_card {
    width: 50%;
    height: 250px;
}

.boutique_course_card {
    margin: 0 0 20px;
    padding-right: 15px;
    padding-left: 15px;
    width: 25%;
}

</style>
