<template>
    <div id="home_page">
        <NavigationBar>
        </NavigationBar>

        <MainNavigation>
        </MainNavigation>

        <LouPlus>
        </LouPlus>

        <Boutique>
        </Boutique>

        <RecentlyRecommendCourse>
        </RecentlyRecommendCourse>

        <BaseCourse>
        </BaseCourse>

        <BackendCourse>
        </BackendCourse>

        <CloudComputeBigDataCourse>
        </CloudComputeBigDataCourse>

        <TrainingCourse>
        </TrainingCourse>

        <LearningPath>
        </LearningPath>

        <SiteDescription>
        </SiteDescription>
    </div>
</template>

<script type="text/javascript">

import NavigationBar from '@/components/home_page/navigation_bar.vue'
import MainNavigation from '@/components/home_page/main_navigation.vue'
import LouPlus from '@/components/home_page/lou_plus.vue'
import Boutique from '@/components/home_page/boutique_course.vue'
import RecentlyRecommendCourse from '@/components/home_page/recently_recommend_courses.vue'
import BackendCourse from '@/components/home_page/backend_course.vue'
import CloudComputeBigDataCourse from '@/components/home_page/cloud_compute_big_data_course.vue'
import LearningPath from '@/components/home_page/learning_path.vue'
import BaseCourse from '@/components/home_page/base_course.vue'
import TrainingCourse from '@/components/home_page/training_course.vue'
import SiteDescription from '@/components/home_page/site_description.vue'

export default {
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
    },

    mounted: function () {
        this.$store.dispatch('home/get_and_change_home_content')
    }
}
</script>

<style type="text/css">

</style>
