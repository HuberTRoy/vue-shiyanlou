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
        ---

        上面已经更新。

        course 的布局。

        全部课程 / 标签分类 / 课程的标题
        --------
        课程标题 (类型)                         课程的img
        基础信息 包括 学过人数，关注人数，，作者     课程类型(免费，会员...)
        课程简介                                另外一些简介
        我将学到的内容                           是否关注按钮
        课程内容                                两则广告
        --------
        课程介绍
        --------
        课程教师
        --------
        课程Discuss
        --------
        学过的的人还学了某些

        额外:
        下拉的时候右边会跟随一起动。
        上面也会出现一个简介:
        名称 类型
        学过|关注|作者
        上面和右面会有一部分重叠。
     -->
    <div class="course_content_box">
        <NavTitle></NavTitle>
        <div class="course_main_content_div" v-if="course_info">
            <div class="course_main_div">
                <div class="course_info_div">
                    <CourseInfo></CourseInfo>
                </div>
                <div class="course_knowledge_points">
                    <CourseKnowledgePoints></CourseKnowledgePoints>
                </div>
                <div class="course_content_div">
                    <CourseContent></CourseContent>
                </div>
                <div class="course_description">
                    <CourseDescription></CourseDescription>
                </div>
                <div class="course_teacher">
                    <CourseTeacher></CourseTeacher>
                </div>
                <div class="course_discuss_div">
                    <CourseDiscuss></CourseDiscuss>
                </div>
                <div class="course_related">
                    <CourseRelated></CourseRelated>
                </div>
            </div>
            <div class="course_related_div">
                <CourseSideContent :class="[scrolled && !scrollEnd ? 'course_side_content_scroll' : '', scrollEnd ? 'course_side_content_scrollend' : '']"
                ></CourseSideContent>
                <!-- 右边几乎完全重写。
                     布局如下:
                        课程img
                        课程类型
                        加入课程按钮(加入之后应该会变,暂时不管)
                        课程内容分布(几个实验几个挑战)
                        hr
                        是否点关注。
                        ----
                        两则广告
                     另外下拉时会跟随着移动, z-index 在上面之上。
                 -->
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import NavTitle from './sub_components/nav_title.vue'
import CourseInfo from './sub_components/course_info.vue'
import CourseContent from './sub_components/course_content.vue'
import CourseKnowledgePoints from './sub_components/course_knowledge_points.vue'
import CourseDescription from './sub_components/course_description.vue'
import CourseTeacher from './sub_components/course_teacher.vue'
import CourseDiscuss from './sub_components/course_discuss.vue'
import CourseSideContent from './sub_components/course_side_content.vue'
import CourseRelated from './sub_components/course_related.vue'
import Card from '../../common_components/cards/card.vue'

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    NavTitle,
    CourseInfo,
    CourseContent,
    CourseKnowledgePoints,
    CourseDescription,
    CourseTeacher,
    CourseDiscuss,
    CourseSideContent,
    CourseRelated,
    Card
  },
  computed: {
    ...mapState({
      course_info: state => state.course.course_information,
      scrolled: state => state.scrollBar.currentScrolledValue > 50,
      scrollValue: state => state.scrollBar.currentScrolledValue,
      isLogin: state => state.loginState.sign_on
    }),
    ...mapGetters({
        documentHeight: 'scrollBar/documentHeight'
    }),
    scrollEnd: function () {
        let body = document.body
        let html = document.documentElement;
        let documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight )
        if (this.scrollValue === 0) {
            return false
        }
        return (documentHeight - this.scrollValue) < 800
    }
  },
  methods: {
    ...mapActions({
      get_and_change_course_information: 'course/get_and_change_course_information',
      get_course_userstatus: 'course/change_course_userstatus'
    })
  },
  created: function () {
    let courseId = this.$route.params.id
    this.get_and_change_course_information(courseId)
    if (this.isLogin) {
        this.get_course_userstatus({'course_ids': courseId})
    }
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
    position: relative;
}

.course_img_card {
    padding-left: 10px !important;
    padding-right: 0px !important;
    margin-bottom: 10px;
}

.course_side_content_scroll {
    position: fixed;
    top: 10px;
    z-index: 9;
}

.course_side_content_scrollend {
    position: absolute;
    bottom: 0px;
}

</style>
