<template>
    <div class="search_div">
        <SearchPage></SearchPage>
    </div>
</template>
<script type="text/javascript">
    
import SearchPage from '@/components/search_page/search.vue'

import { mapState } from 'vuex'

export default {
    components: {
        SearchPage
    }
}
</script>
<style type="text/css">
</style>
