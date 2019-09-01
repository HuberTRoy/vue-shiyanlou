<template>
    <!--
        course 的布局
                     左边部分                   右边部分
        全部课程 / 标签分类 / 课程的标题
        -----------
        课程标题 (类型)                         课程的img
        基础信息 包括评论，关注人数，学过人数。    作者信息
        课程简介
        一些按钮 （根据课程进行分类，            一些其他的推广
        免费和需要注册还有购买的，
        然后根据用户权限进行分类，是否有权。）     相关链接
        -----------
        tabA            tabB
        课程的详细介绍   课程的实验列表
        -----------
        课程的Discuss
        包括 评论，实验报告，实验问答。

     -->
    <div class="course_content_box">
        <NavTitle></NavTitle>
        <div class="course_main_content_div">
            <div class="course_main_div">
                <div class="course_info_div">
                    <CourseInfo></CourseInfo>
                </div>
                <div class="course_content_div">
                    <CourseContent></CourseContent>
                </div>
                <div class="course_discuss_div">
                    <CourseDiscuss></CourseDiscuss>
                </div>
            </div>
            <div class="course_related_div">
                <!--
                    img
                    author
                    ads
                    recommend
                    vip_img
                    contest
                    challenges
                 -->
                <Card class="course_img_card"
                      :data="{'img_url': course_info.course_img}"
                ></Card>
                      <!-- :img_url="course_info.course_img" -->

                <CourseAuthor></CourseAuthor>

                <Card v-for="(related_course, index) in course_info.related_courses"
                      :key="index"
                      :data=" { 'img_url': related_course.course_img }"
                      class="course_img_card"
                ></Card>

                <RecommendCourse></RecommendCourse>

                <Card class="vip_img_card course_img_card"
                      :data="{'img_url': 'https://static.shiyanlou.com/img/banner-vip.png'}"
                ></Card>

                <NewstContest></NewstContest>

                <RelatedChallenges></RelatedChallenges>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import NavTitle from './sub_components/nav_title.vue'
import CourseInfo from './sub_components/course_info.vue'
import CourseContent from './sub_components/course_content.vue'
import CourseDiscuss from './sub_components/course_discuss.vue'
import Card from '../../common_components/cards/card.vue'
import CourseAuthor from './sub_components/course_author.vue'
import RecommendCourse from './sub_components/recommend_courses.vue'
import NewstContest from './sub_components/newst_contest.vue'
import RelatedChallenges from './sub_components/related_challenges.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        NavTitle,
        CourseInfo,
        CourseContent,
        CourseDiscuss,
        Card,
        CourseAuthor,
        RecommendCourse,
        NewstContest,
        RelatedChallenges
    },
    computed: {
        ...mapState({
            course_info: state => state.course.course_information
        })
    },
    methods: {
        ...mapActions({
            get_and_change_course_information: 'course/get_and_change_course_information'
        })
    },
    created: function () {
        let courseId = this.$route.params.id
        this.get_and_change_course_information(courseId)
    }
}
</script>
<style type="text/css">
.course_content_box {
    display: flex;
    flex-direction: column;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
}

.course_title {
    padding: 10px;
}

.course_main_content_div {
    display: flex;
}

.course_info_div {
    margin-bottom: 10px;
}

.course_content_div {
    margin-bottom: 10px;
}

.course_main_div {
    width: 75%;
}

.course_related_div {
    width: 25%;
    display: flex;
    flex-direction: column;
}

.course_img_card {
    padding-left: 10px !important;
    padding-right: 0px !important;
    margin-bottom: 10px;
}

</style>
