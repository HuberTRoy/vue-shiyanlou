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
    },
    watch: {
        '$route': function () {
            document.title = `${this.$route.query.keywords}的搜索结果 - 实验楼`
        }
    }
}
</script>
<style type="text/css">
</style>
