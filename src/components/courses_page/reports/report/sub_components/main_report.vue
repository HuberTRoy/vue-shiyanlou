<template>
    <!-- 
        布局
        base_info
        content
        comments
     -->
    <div class="report_main_content_div">
        <div class="report_main_content_base_info">
            <!-- 
                left to right
                userinfo check information
             -->
             <div class="report_main_content_base_info_user_info">
                <img class="report_main_content_avatar" src="https://dn-simplecloud.shiyanlou.com/gravatarkijh4UYVEwTc.jpg?imageView2/1/w/200/h/200">
                <span>
                    TEST<span class="level">L3</span>
                </span>
                <span class="report_created_time">2小时前</span>
                <a href="javascript:;">来源</a>
             </div>
             <div class="report_main_content_base_info_check_info">
                 <i class="far fa-eye"></i>
                 <span class="report_check_info_span">100</span>
                 <i class="far fa-comments"></i>
                 <span class="report_check_info_span">99</span>
             </div>
        </div>
        <div class="report_main_content_article">
            <div class="report_main_content_base_info_title">
                <p class="report_main_content_article_course_name">course_name实验报告</p>
                <a class="report_main_content_article_lab_name" href="javascript:;">
                    lab_name
                </a>
                <VueMarkDown># TEST</VueMarkdown>
            </div>
        </div>
        <div class="report_main_content_comments">
            <CommentDialog :_name="'report'"></CommentDialog>
            <Comments :_name="'report'"></Comments>
        </div>
    </div>
</template>
<script type="text/javascript">
import VueMarkDown from 'vue-markdown'
import CommentDialog from '@/components/common_components/comments/comment_dialog.vue'
import Comments from '@/components/common_components/comments/current_comment.vue'

export default {
    components: {
        VueMarkDown,
        Comments,
        CommentDialog
    }
}

</script>
<style type="text/css">
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

</style>
