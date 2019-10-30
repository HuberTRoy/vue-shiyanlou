<template>
    <div class="courses">
        <CourseSelection></CourseSelection>
    </div>
</template>
<script type="text/javascript">
import CourseSelection from '@/components/courses_page/courses_selection.vue'

import { mapActions } from 'vuex'

export default {
    components: {
        CourseSelection
    },
    methods: {
        ...mapActions({
            change_courses_content: 'coursesCategory/change_courses_content',
            change_courses_category: 'coursesCategory/change_courses_category'
        })
    },
    watch: {
        '$route': function () {
            this.change_courses_content(this.$route.query)
        }
    },
    mounted: function () {
        this.change_courses_category()
        this.change_courses_content(this.$route.query)
    }
}
</script>
<style type="text/css">
.courses_category {
    margin-bottom: 50px;
}

</style>
