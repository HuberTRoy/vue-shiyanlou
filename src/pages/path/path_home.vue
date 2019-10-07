<template>
    <div class="path_home_div">
        <LearningPath></LearningPath>
    </div>
</template>

<script type="text/javascript">

import LearningPath from '@/components/path_page/path.vue'

import { mapActions } from 'vuex'

export default {
    components: {
        LearningPath,
    },
    methods: {
        ...mapActions({
            get_path_information: 'path/change_path_information'
        })
    },

    mounted: function () {
        this.get_path_information()
    }
}
</script>
<style type="text/css">
</style>
