<template>
    <div class="path_courses_detail_div">
        <div class="path_courses_detail_nav_div">
            <ul class="path_courses_detail_nav_ul">
                <li class="path_courses_detail_nav_li">
                    <a href="javascript:;"
                       class="path_courses_detail_nav_a"
                       @click="change_path_courses_detail_nav('detail')"
                       :class="nav === 'detail' ? 'active_path_courses_detail_nav_a' : ''"
                    >
                        路径详情
                    </a>
                </li>
                <li class="path_courses_detail_nav_li">
                    <a href="javascript:;"
                       class="path_courses_detail_nav_a"
                       @click="change_path_courses_detail_nav('comment')"
                       :class="nav === 'comment' ? 'active_path_courses_detail_nav_a' : ''"
                    >
                    评论({{ comment_number }})
                    </a>
                </li>
            </ul>
        </div>
        <div class="all_phase_div" v-show="nav==='detail'">
            <PhaseCard v-for="(course, index) in stages"
                       :key="index"
                       :data="course">
            </PhaseCard>
            <div class="finish_learning_div">
                <div class="finish_learning_button">
                    完成学习
                </div>
            </div>
        </div>
        <div class="path_courses_comment" v-show="nav==='comment'">
            <PathCoursesCommentDialog :_name="'path'"></PathCoursesCommentDialog>
            <PathCoursesComment :_name="'path'"></PathCoursesComment>
        </div>
    </div>
</template>
<script type="text/javascript">
import PhaseCard from './path_courses_detail_sub_components/phase_item.vue'

import PathCoursesComment from '@/components/common_components/comments/current_comment.vue'
import PathCoursesCommentDialog from '@/components/common_components/comments/comment_dialog.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        PhaseCard,
        PathCoursesCommentDialog,
        PathCoursesComment
    },
    computed: {
        ...mapState({
            nav: state => state.path.path_courses_detail_nav,
            comment_number: state => state.path.course_path_information.comments_count,
            stages: state => state.path.stages
        })
    },

    methods: {
        ...mapActions({
            change_path_courses_detail_nav: 'path/change_path_courses_detail_nav'
        })
    }
}

</script>
<style type="text/css">

.path_courses_detail_div {
    background: #fff;
    padding: 30px;
    padding-bottom: 60px;
    border: 1px solid #eee;
}

.path_courses_detail_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.path_courses_detail_nav_li {

}

.path_courses_detail_nav_a {
    display: block;
    padding: 0 0 4px;
    margin: 0 48px 0 0;
    font-size: 16px;
    color: #4c5157;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
}

.active_path_courses_detail_nav_a, .path_courses_detail_nav_a:hover {
    border-bottom: 1px solid #0c9;
}

.finish_learning_button {
    color: #08bf91;
    padding: 6px 12px;
    margin: 100px auto;
    border: 1px solid #08bf91;
    border-radius: 50px;
    width: 200px;
    height: 45px;
    font-size: 20px;
    cursor: auto;
    text-align: center;
}

.finish_learning_button:active {
    box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
}

</style>
