<template>
    <div class="library_div">
        <Library></Library>
    </div>
</template>

<script type="text/javascript">
import Library from '@/components/library_page/library.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        Library,
    },
    methods: {
        ...mapActions({
            change_index_content: 'library/change_index_content',
            change_library_content: 'library/change_library_content'
        })
    },
    watch: {
        '$route': function (newQuery) {
            this.change_library_content(this.$route.query)
        }
    },
    mounted: function () {
        this.change_index_content()
    }
}
</script>
<style type="text/css">
</style>
