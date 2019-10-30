<template>
    <!-- 
        布局
        base_info
        content
        comments
     -->
    <div class="report_main_content_div">
        <div class="report_main_content_base_info" v-if="report_info.author">
            <!-- 
                left to right
                userinfo check information
             -->
             <div class="report_main_content_base_info_user_info">
                <img class="report_main_content_avatar" 
                     :src="report_info.author.avatar_url">
                <span>
                    {{
                        report_info.author.name
                    }}<span class="level">L{{ report_info.author.level }}</span>
                </span>
                <span class="report_created_time">{{ report_info.author.created_at }}</span>
                <a href="javascript:;">{{ report_info.lab_name }}</a>
             </div>
             <div class="report_main_content_base_info_check_info">
                 <i class="far fa-eye"></i>
                 <span class="report_check_info_span">{{ report_info.views_count }}</span>
                 <i class="far fa-comments"></i>
                 <span class="report_check_info_span">{{ report_info.comments_count }}</span>
             </div>
        </div>
        <div class="report_main_content_article">
            <div class="report_main_content_base_info_title">
                <p class="report_main_content_article_course_name"> {{ report_info.course_name }} </p>
                <a class="report_main_content_article_lab_name" href="javascript:;">
                    {{ report_info.lab_name }}
                </a>
                <VueMarkDown v-if="report_info.content" class="report_content" :source="report_info.content"></VueMarkdown>
            </div>
        </div>
        <div class="report_main_content_comments">
            <CommentDialog :_name="'labreport'"></CommentDialog>
            <Comments :_name="'labreport'"></Comments>
        </div>
    </div>
</template>
<script type="text/javascript">
import VueMarkDown from 'vue-markdown'
import CommentDialog from '@/components/common_components/comments/comment_dialog.vue'
import Comments from '@/components/common_components/comments/current_comment.vue'

import { mapState } from 'vuex'

export default {
    components: {
        VueMarkDown,
        Comments,
        CommentDialog
    },
    computed: {
        ...mapState({
            report_info: state => state.reports.report_information
        })
    }
}

</script>
<style type="text/css" scoped>
.report_main_content_div {
    display: flex;
    flex-direction: column;
    width: 75%;
    padding: 30px;
    background: #fff;
}

.report_main_content_base_info {
    display: flex;
    justify-content: space-between;
}

.report_main_content_base_info_user_info {
    display: flex;
    align-items: center;

}

.report_main_content_avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 3px;
}

.level {
    color: #fec42d;
}

.report_created_time {
    margin: 20px 12px;
    color: #8d99a5;
}

.report_main_content_base_info_check_info {
    display: flex;
    align-items: center;
    color: #a5acb2;
    font-size: 16px;
}

.report_check_info_span {
    padding: 5px;
}

.report_main_content_article {
    padding: 10px 15px;
    border: 1px solid #efefef;
    background: #fdfefd;
    width: 100%;
}

.report_main_content_base_info_title {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.report_main_content_article_course_name {
    color: #3f4e5d;
    font-size: 21px;
}

.report_main_content_article_lab_name {
    color: #3e83c5;
    font-size: 16px;
    line-height: 40px;
}

.report_main_content_article_lab_name:hover {
    text-decoration: underline !important;
}

.report_content >>> img {
    width: 100%;
}

</style>
