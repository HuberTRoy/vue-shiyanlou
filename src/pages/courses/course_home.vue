<template>
    <div class="courses">
        <Login></Login>
        <ScrollBar class="courses_home_scroll_bar"
        :class="scrolled ? 'scroll_bar_scrolled' : ''"
        ></ScrollBar>
        <CourseSelection></CourseSelection>
        <Footer></Footer>
    </div>
</template>
<script type="text/javascript">
import ScrollBar from '../../components/common_components/scroll_bar/scroll_bar.vue'
import CourseSelection from '../../components/courses_page/courses_selection.vue'
import Login from '../../components/common_components/sign_on_up/login.vue'
import Footer from '../../components/common_components/footer/footer.vue'

import { mapState } from 'vuex'

export default {
    components: {
        ScrollBar,
        CourseSelection,
        Login,
        Footer
    },

    // methods: {
    //     ...mapActions({
    //         change_courses_content: 'coursesCategory/change_courses_content',
    //         change_query: 'coursesCategory/change_query'
    //     })
    // },

    computed: {
        ...mapState({
            scrolled: state => state.scrollBar.currentScrolledValue > 50
        })
    }
}
</script>
<style type="text/css">
.courses_home_scroll_bar {
    position: relative;
    box-shadow: 0 0 16px 0 rgba(0,0,0,.18);
    margin-bottom: 20px;
}

.courses_category {
    margin-bottom: 50px;
}

.scroll_bar_scrolled {
    position: fixed;
}

</style>
