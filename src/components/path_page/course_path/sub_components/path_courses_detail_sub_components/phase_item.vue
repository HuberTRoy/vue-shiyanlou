<template>
    <div class="phase_item_div">
        <div class="phase_title_div">
            <span class="line_span">
            </span>
            <span class="phase_item_title">
                {{ data.name }}
            </span>
            <span class="line_span">
            </span>
        </div>
        <div class="phase_card_div">
            <CourseCard class="phase_course_card"
                        v-for="course in data.courses"
                        :key="course.course_id"
                        :data="course"
            >
            </CourseCard>
        </div>
    </div>
</template>
<script type="text/javascript">
import CourseCard from '../../../../common_components/cards/course_card.vue'

export default {
    components: {
        CourseCard
    },

    props: {
        data: {
            type: Object,
            require: true
        }
    }
}
</script>
<style type="text/css">
.phase_item_div {
    display: flex;
    flex-direction: column;
    margin-right: -15px;
    margin-left: -15px;
}

.phase_title_div {
    text-align: center;
    margin: 100px 0 50px;
    font-size: 20px;
    color: #787878;
}

.line_span {
    width: 15%;
    display: inline-block;
    border-top: 1px solid #ccc;
    margin-bottom: 5px;
}

.phase_card_div {
    display: flex;
    flex-wrap: wrap;

}

.phase_course_card {
    margin: 0 0 20px;
    padding: 0 15px;
    width: 33.33%;
}

</style>
