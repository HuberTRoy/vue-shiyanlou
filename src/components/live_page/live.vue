<template>
    <div class="live_page">
        <div class="live_page_header"></div>
        <div class="live_page_content">
            <div class="live_not_ended">
                <h4 class="live_description_title">
                    开播预告
                </h4>
                <div class="live_not_ended_courses">
                    <!-- 有直播的样式未知 -->
                    <p class="no_courses_warning">暂时没有即将开始的直播</p>
                </div>
            </div>
            <div class="live_ended">
                <h4 class="live_description_title">
                    历史直播
                </h4>
                <div class="live_ended_courses" v-if="ended_live_courses.results">
                    <LiveCourseCard class="live_courses_card"
                                    v-for="course in ended_live_courses.results"
                                    :key="course.id"
                                    :data="course"
                    >
                    </LiveCourseCard>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import LiveCourseCard from '@/components/common_components/cards/live_course_card.vue'

import { mapState } from 'vuex'

export default {
    components: {
        LiveCourseCard
    },
    computed: {
        ...mapState({
            not_ended_live_courses: state => state.live.not_ended_live_courses,
            ended_live_courses: state => state.live.ended_live_courses
        })
    }
}
</script>
<style type="text/css" scoped>
.live_page_header {
    width: 100%;
    height: 200px;
    margin-top: -20px;
    background: url("https://static.shiyanlou.com/frontend/dist/img/83a99ac.png");
    background-position: 50%;
    background-size: cover;
}

.live_page_content {
    width: 1170px;
    margin: auto;
    padding: 30px;
}

.live_description_title {
    margin: 45px 0 26px;
    color: #666;
}

.no_courses_warning {
    color: #a4a4a4;
    font-size: 18px;
}

.live_ended_courses {
    display: flex;
    flex-wrap: wrap;
}

.live_courses_card {
    width: 33.333%
}
</style>