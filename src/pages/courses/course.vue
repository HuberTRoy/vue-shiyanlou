<template>
    <div class="course_div">
        <CourseHeaderBar :class="[scrolled ? 'show_course_header' : 'hide_course_header']"></CourseHeaderBar>
        <Course></Course>
    </div>
</template>

<script type="text/javascript">
import Course from '@/components/courses_page/course/course.vue'
import CourseHeaderBar from '@/components/courses_page/course/sub_components/course_header_bar.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        Course,
        CourseHeaderBar,
    },
    computed: {
        ...mapState({
            scrolled: state => state.scrollBar.current_scrolled_value > 50,
            course_info: state => state.course.course_information,
            sign_on: state => state.loginState.sign_on
        })
    },
    watch: {
        course_info: function () {
            document.title = `${this.course_info.name} - 实验楼`
        }
    },
    methods: {
        ...mapActions({
          get_and_change_course_information: 'course/get_and_change_course_information',
          get_course_userstatus: 'course/change_course_userstatus'
        })
    },
    mounted: function () {
        let courseId = this.$route.params.id
        this.get_and_change_course_information(courseId)
        if (this.sign_on) {
            this.get_course_userstatus({'course_ids': courseId})
        }
      }
}
</script>
<style type="text/css">

.courses_category {
    margin-bottom: 50px;
}

.scroll_bar_scrolled {
    position: fixed;
}

.hide_course_header {
    visibility: hidden;
    opacity: 0 !important;
    height: 0px !important;
}

.show_course_header {
    position: fixed;
    top: 0;
    opacity: .9;
    height: 72px;
}

</style>
