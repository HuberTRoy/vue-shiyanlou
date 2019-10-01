<template>
    <div class="training_course_div">
        <Title class="training_course_div_title"
               :title="'训练营强化 | '"
               :description="'专注实战的完整项目，在实战中融会贯通'"
        >

        </Title>
        <TrainingCard v-for="(course_info, index) in training_course_content"
                      :key="index"
                      :data="course_info"
        >

        </TrainingCard>
    </div>
</template>

<script type="text/javascript">
import Title from './sub_components/title.vue'
import TrainingCard from '../common_components/cards/training_card.vue'

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            training_course_content: state => state.home.home_content.bootcamps
        })
    },
    components: {
        Title,
        TrainingCard
    }
}

</script>
<style type="text/css">
.training_course_div {
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    padding: 0 15px;
    display: flex;
    flex-wrap: wrap;
}

.training_course_div_title {
    margin-bottom: 30px;
}

</style>
