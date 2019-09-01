<template>
    <div class="course_path_div">
        <Login></Login>
        <ScrollBar class="course_path_scroll_bar"
        :class="scrolled ? 'scroll_bar_scrolled' : ''"
        ></ScrollBar>
        <CoursePath></CoursePath>
        <Footer></Footer>
    </div>
</template>

<script type="text/javascript">
import Footer from '../../components/common_components/footer/footer.vue'
import CoursePath from '../../components/path_page/course_path/course_path.vue'
import ScrollBar from '../../components/common_components/scroll_bar/scroll_bar.vue'
import Login from '../../components/common_components/sign_on_up/login.vue'

import { mapState } from 'vuex'

export default {
    components: {
        ScrollBar,
        CoursePath,
        Login,
        Footer
    },
    computed: {
        ...mapState({
            scrolled: state => state.scrollBar.currentScrolledValue > 50
        })
    }
}
</script>
<style type="text/css">
.course_path_scroll_bar {
    position: relative;
    box-shadow: 0 0 16px 0 rgba(0,0,0,.18);
    margin-bottom: 20px;
}

.scroll_bar_scrolled {
    position: fixed;
}
</style>
