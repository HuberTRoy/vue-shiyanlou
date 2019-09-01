<template>
    <div class="learning_path_course_div">
        <Title class="learning_path_course_div_title"
               :title="'学习路径 | '"
               :description="'精准而系统的学习路径，从0到大牛'"
        >

        </Title>

        <CourseCard class="learning_path_course_card"
                    v-for="(path, index) in learning_path_content['path']"
                    :key="index"
                    :data="path"
        >

        </CourseCard>
    </div>
</template>

<script type="text/javascript">
import Title from './sub_components/title.vue'
import CourseCard from '../common_components/cards/float_card.vue'

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            learning_path_content: state => state.home.home_content.learning_path_content
        })
    },
    components: {
        Title,
        CourseCard
    }
}
</script>

<style type="text/css">

.learning_path_course_div {
    display: flex;
    flex-wrap: wrap;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
}

.learning_path_course_div_title {
    margin-bottom: 30px;
}

.learning_path_course_card {
    width: 25%;
}

</style>
