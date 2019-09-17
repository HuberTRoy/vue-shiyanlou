<template>
    <div class="library_div">
        <Login></Login>
        <ScrollBar class="library_scroll_bar"
        ></ScrollBar>
        <Library></Library>
        <Footer></Footer>
    </div>
</template>

<script type="text/javascript">
import Footer from '@/components/common_components/footer/footer.vue'
import ScrollBar from '@/components/common_components/scroll_bar/scroll_bar.vue'
import Login from '@/components/common_components/sign_on_up/login.vue'
import Library from '@/components/library_page/library.vue'

import { mapState } from 'vuex'

export default {
    components: {
        ScrollBar,
        Library,
        Footer,
        Login
    },
    computed: {
        ...mapState({
            scrolled: state => state.scrollBar.currentScrolledValue > 50
        })
    }
}
</script>
<style type="text/css">
.library_scroll_bar {
    position: relative;
    box-shadow: 0 0 16px 0 rgba(0,0,0,.18);
    margin-bottom: 20px;
}

.scroll_bar_scrolled {
    position: fixed;
}

</style>
