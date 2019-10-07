<template>
    <div class="course_path_div">
        <CoursePath></CoursePath>
    </div>
</template>

<script type="text/javascript">
import CoursePath from '@/components/path_page/course_path/course_path.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        CoursePath,
    },
    computed: {
        ...mapState({
            sign_on: state => state.loginState.sign_on
        })
    },
    methods: {
        ...mapActions({
            get_course_path_information: 'path/change_course_path_information',
            get_course_path_userstatus: 'path/change_course_path_userstatus'
        })
    },

    mounted: async function () {
        this.get_course_path_information(this.$route.params.id)
        if (this.sign_on) {
            await this.get_course_path_userstatus({'path_ids': this.$route.params.id})
        }
    }
}
</script>
<style type="text/css">
</style>
