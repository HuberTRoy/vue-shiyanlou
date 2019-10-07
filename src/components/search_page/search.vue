<template>
    <div class="search_page_div">
        <MainSearch></MainSearch>
        <Side></Side>
    </div>
</template>
<script type="text/javascript">
import MainSearch from './sub_components/main_search.vue'
import Side from './sub_components/side.vue'

import { mapActions } from 'vuex'

export default {
    components: {
        MainSearch,
        Side
    }
}

</script>
<style type="text/css" scoped>
.search_page_div {
    width: 1170px;
    /*padding: 30px;*/
    margin: auto;
}
</style>
