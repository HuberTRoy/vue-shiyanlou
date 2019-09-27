<template>
    <div class="course_path_div">
        <CoursePath></CoursePath>
    </div>
</template>

<script type="text/javascript">
import CoursePath from '@/components/path_page/course_path/course_path.vue'

import { mapState } from 'vuex'

export default {
    components: {
        CoursePath,
    },
}
</script>
<style type="text/css">
</style>
