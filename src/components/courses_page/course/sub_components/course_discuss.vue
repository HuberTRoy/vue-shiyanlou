<template>
    <div class="course_discuss">
        <div class="discuss_nav_div">
            <ul class="discuss_nav_ul">
                <li class="discuss_nav_li">
                    <a href="javascript:;"
                       class="discuss_nav_a"
                       @click="change_discuss_nav('comment')"
                       :class="nav === 'comment' ? 'active_discuss_nav_a' : ''"
                    >
                        课程评论 ({{ course_base_information.comments_count }})
                    </a>
                </li>
                <li class="discuss_nav_li">
                    <a href="javascript:;"
                       class="discuss_nav_a"
                       @click="change_discuss_nav('report')"
                       :class="nav === 'report' ? 'active_discuss_nav_a' : ''"
                    >
                        实验报告 ({{ course_base_information.labreports_count }})
                    </a>
                </li>
                <li class="discuss_nav_li">
                    <a href="javascript:;"
                       class="discuss_nav_a"
                       @click="change_discuss_nav('qa')"
                       :class="nav === 'qa' ? 'active_discuss_nav_a' : ''"
                    >
                        实验问答 ({{ course_base_information.questions_count }})
                    </a>
                </li>
            </ul>
        </div>
        <div class="discuss_main_div">
            <div class="discuss_comments_div"
                 v-show="nav==='comment'"
            >
                <CourseCommentDialog :_name="'course'"></CourseCommentDialog>
                <CourseComments :_name="'course'"></CourseComments>
            </div>

            <div class="discuss_report_div"
                 v-show="nav==='report'"
            >
                <CourseReport></CourseReport>
            </div>

            <div class="discuss_qa_div"
                 v-show="nav==='qa'"
            >
                <CourseQA></CourseQA>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

import CourseCommentDialog from '@/components/common_components/comments/comment_dialog.vue'
import CourseComments from '@/components/common_components/comments/current_comment.vue'

import CourseReport from './course_discuss_sub_components/report/report.vue'

import CourseQA from './course_discuss_sub_components/qa/qa.vue'

export default {
    components: {
        CourseCommentDialog,
        CourseComments,
        CourseReport,
        CourseQA
    },

    computed: {
        ...mapState({
            nav: state => state.course.course_discuss_nav,
            course_base_information: state => state.course.course_information
        })
    },

    methods: {
        ...mapActions({
            change_discuss_nav: 'course/change_discuss_nav'
        })
    }
}
</script>
<style type="text/css" scoped>
.course_discuss {
    background: #fff;
    border: 1px solid #eee;
    padding: 30px;
    padding-bottom: 60px;
    margin-bottom: 10px;
}

.discuss_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.discuss_nav_li {

}

.discuss_nav_a {
    display: block;
    padding: 0 0 4px;
    margin: 0 48px 0 0;
    font-size: 16px;
    color: #4c5157;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
}

.active_discuss_nav_a, .discuss_nav_a:hover {
    border-bottom: 1px solid #0c9;
}

</style>
