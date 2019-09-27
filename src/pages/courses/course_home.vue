<template>
    <div class="courses">
        <CourseSelection></CourseSelection>
    </div>
</template>
<script type="text/javascript">
import ScrollBar from '@/components/common_components/scroll_bar/scroll_bar.vue'
import CourseSelection from '@/components/courses_page/courses_selection.vue'
import Login from '@/components/common_components/sign_on_up/login.vue'
import Footer from '@/components/common_components/footer/footer.vue'

import { mapState } from 'vuex'

export default {
    components: {
        CourseSelection
    }
}
</script>
<style type="text/css">
.courses_category {
    margin-bottom: 50px;
}

</style>
