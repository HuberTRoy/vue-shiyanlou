<template>
    <div class="search_div">
        <SearchPage></SearchPage>
    </div>
</template>
<script type="text/javascript">
    
import SearchPage from '@/components/search_page/search.vue'

import { mapActions } from 'vuex'

export default {
    components: {
        SearchPage
    },
    methods: {
        ...mapActions({
            'change_search_result': 'search/change_search_result'
        })
    },
    watch: {
        '$route': function () {
            document.title = `${this.$route.query.keywords}的搜索结果 - 实验楼`
            this.change_search_result({
                'type': 'course',
                'search': this.$route.query.keywords
            })    
        }
    },
    mounted: function () {
        this.change_search_result({
            'type': 'course',
            'search': this.$route.query.keywords
        })
    }
}
</script>
<style type="text/css">
</style>
