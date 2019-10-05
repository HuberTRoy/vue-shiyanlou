<template>
    <div class="library_page_div">
        <Side></Side>
        <MainLibrary></MainLibrary>
    </div>
</template>
<script type="text/javascript">
import MainLibrary from '@/components/library_page/sub_components/main_library.vue'
import Side from '@/components/library_page/sub_components/side.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        MainLibrary,
        Side
    },
    methods: {
        ...mapActions({
            change_index_content: 'library/change_index_content'
        })
    },
    created: function () {
        this.change_index_content()
    }
}

</script>
<style type="text/css" scoped>
.library_page_div {
    padding: 30px;
    width: 1170px;
    margin: auto;
    display: flex;
}
</style>
