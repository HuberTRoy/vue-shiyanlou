<template>
    <div class="not_found_div">
        <Login></Login>
        <ScrollBar class="not_found_scroll_bar"
        :class="scrolled ? 'scroll_bar_scrolled' : ''"
        ></ScrollBar>
        <NotFound></NotFound>
        <Footer></Footer>
    </div>
</template>
<script type="text/javascript">
    
import ScrollBar from '@/components/common_components/scroll_bar/scroll_bar.vue'
import Login from '@/components/common_components/sign_on_up/login.vue'
import Footer from '@/components/common_components/footer/footer.vue'
import NotFound from '@/components/common_components/404.vue'

import { mapState } from 'vuex'

export default {
    components: {
        ScrollBar,
        Login,
        Footer,
        NotFound
    },

    computed: {
        ...mapState({
            scrolled: state => state.scrollBar.currentScrolledValue > 50
        })
    }
}
</script>
<style type="text/css">
.not_found_scroll_bar {
    position: relative;
    box-shadow: 0 0 16px 0 rgba(0,0,0,.18);
    margin-bottom: 20px;
}

.scroll_bar_scrolled {
    position: fixed;
}
</style>
