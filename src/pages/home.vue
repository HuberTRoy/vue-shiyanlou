<template>
    <div id="home_page">
        <Login>
        </Login>
        <transition name="scroll_bar_transition">
            <ScrollBar v-show="show_scroll_bar"
            >
            </ScrollBar>
        </transition>

        <NavigationBar v-if="home_content">
        </NavigationBar>

        <MainNavigation v-if="home_content">
        </MainNavigation>

        <LouPlus v-if="home_content">
        </LouPlus>

        <Boutique v-if="home_content">
        </Boutique>

        <RecentlyRecommendCourse v-if="home_content">
        </RecentlyRecommendCourse>

        <BaseCourse v-if="home_content">
        </BaseCourse>

        <BackendCourse v-if="home_content">
        </BackendCourse>

        <CloudComputeBigDataCourse v-if="home_content">
        </CloudComputeBigDataCourse>

        <TrainingCourse v-if="home_content">
        </TrainingCourse>

        <LearningPath v-if="home_content">
        </LearningPath>

        <SiteDescription v-if="home_content">
        </SiteDescription>

        <Footer>
        </Footer>
    </div>
</template>

<script type="text/javascript">

import NavigationBar from '../components/home_page/navigation_bar.vue'
import MainNavigation from '../components/home_page/main_navigation.vue'
import LouPlus from '../components/home_page/lou_plus.vue'
import Boutique from '../components/home_page/boutique_course.vue'
import RecentlyRecommendCourse from '../components/home_page/recently_recommend_courses.vue'
import BackendCourse from '../components/home_page/backend_course.vue'
import CloudComputeBigDataCourse from '../components/home_page/cloud_compute_big_data_course.vue'
import LearningPath from '../components/home_page/learning_path.vue'
import BaseCourse from '../components/home_page/base_course.vue'
import TrainingCourse from '../components/home_page/training_course.vue'
import SiteDescription from '../components/home_page/site_description.vue'
import Footer from '../components/common_components/footer/footer.vue'
import ScrollBar from '../components/common_components/scroll_bar/scroll_bar.vue'
import Login from '../components/common_components/sign_on_up/login.vue'

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            show_scroll_bar: state => state.scrollBar.show_scroll_bar,
            home_content: state => state.home.home_content
            })
    },

    components: {
        NavigationBar,
        MainNavigation,
        LouPlus,
        Boutique,
        RecentlyRecommendCourse,
        BackendCourse,
        CloudComputeBigDataCourse,
        LearningPath,
        BaseCourse,
        TrainingCourse,
        SiteDescription,
        Footer,
        ScrollBar,
        Login
    },

    beforeCreate: function () {
        debugger
        this.$store.dispatch('home/get_and_change_home_content')
    }
}
</script>

<style type="text/css">
.scroll_bar {
    position: fixed;
}

/* 滚动条的过渡设置 */
.scroll_bar_transition-enter-active, .scroll_bar_transition-leave-active {
    transition: opacity 0.3s;
}

.scroll_bar_transition-enter {
    opacity: 0;
}

.scroll_bar_transition_enter-to {
    opacity: 1;
}

.scroll_bar_transition-leave {
    opacity: 1;
}

.scroll_bar_transition-leave-to {
    opacity: 0;
}

</style>
