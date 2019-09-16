<template>
    <div class="search_div">
        <Login></Login>
        <ScrollBar class="search_scroll_bar"
        :class="scrolled ? 'scroll_bar_scrolled' : ''"
        ></ScrollBar>
        <SearchPage></SearchPage>
        <Footer></Footer>
    </div>
</template>
<script type="text/javascript">
    
import ScrollBar from '@/components/common_components/scroll_bar/scroll_bar.vue'
import Login from '@/components/common_components/sign_on_up/login.vue'
import Footer from '@/components/common_components/footer/footer.vue'
import SearchPage from '@/components/search_page/search.vue'

import { mapState } from 'vuex'

export default {
    components: {
        ScrollBar,
        Login,
        Footer,
        SearchPage
    },

    computed: {
        ...mapState({
            scrolled: state => state.scrollBar.currentScrolledValue > 50
        })
    }
}
</script>
<style type="text/css">
.search_scroll_bar {
    position: relative;
    box-shadow: 0 0 16px 0 rgba(0,0,0,.18);
    margin-bottom: 20px;
}

.scroll_bar_scrolled {
    position: fixed;
}
</style>
