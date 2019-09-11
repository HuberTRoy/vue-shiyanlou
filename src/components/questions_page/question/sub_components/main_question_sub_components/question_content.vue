<template>
    <!--
        header -> title view answer favourite
        information -> author source
        content
        reply
     -->
    <div class="question_content">
        <div class="question_content_header">
            <div>
                <span class="content_question_title">{{ question_info.title }}</span>
            </div>
            <div>
                <span class="question_number">{{ question_info.views }}查看</span>
                <span class="question_number">{{ question_info.answers_count }}回复</span>
                <a href="javascript:;" class="favourite_button">收藏</a>
            </div>
        </div>
        <div class="question_content_information" v-if="question_info.author">
            <img class="question_content_info avatar" :src="question_info.author.avatar_url" />
            <span class="question_content_info question_author_name">{{ question_info.author.name }}</span>
            <span class="question_content_info level">L{{ question_info.author.level }}</span>
            <span class="question_content_info created_time">{{ question_info.created_at }}</span>
            <router-link class="question_content_info" tag="a" :to="{ name: 'questions', query: { type:question_info.type } }">{{ tag_type[question_info.type] }}</router-link>
        </div>
        <div class="_question_content" v-if="question_info.content">
            <VueMarkdown>{{ question_info.content }}</VueMarkdown>
        </div>
        <QuestionReply></QuestionReply>
    </div>
</template>
<script type="text/javascript">
import VueMarkdown from 'vue-markdown'
import QuestionReply from './question_reply.vue'

import { mapState } from 'vuex'

export default {
    components: {
        VueMarkdown,
        QuestionReply
    },
    data: function () {
        return {
            tag_type: {
                'discussion': '交流讨论',
                'course': '课程问答',
                'sharing': '技术分享',
                'notice': '站内公告'
            }
        }
    },
    computed: {
        ...mapState({
            question_info: state => state.question.question_information
        })
    }
}
</script>
<style type="text/css">
.question_content {
    border: 1px solid #eee;
    box-shadow: 0 1px 1px #ccc;
    background: #fff;
    padding: 30px;
    padding-bottom: 60px;
}

.question_content_header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
}

.content_question_title {
    font-size: 20px;
    font-weight: 800;
    /*width: 600px;*/
    word-break: break-all;
}

.question_number {
    margin-right: 20px;
    padding-top: 5px;
    color: #a4a4a4;
    font-size: 12px;
}

.favourite_button {
    padding: 2px 20px;
    font-size: 14px;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #fff;
    background: #21d6a8;
    /*box-shadow: inset 0 3px 5px rgba(0,0,0,0.125)*/
}

.favourite_button:hover {
    background: #09ae84;
    color: #fff;
}

/* */
.question_content_information {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 16px;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.question_content_info {
    font-size: 13px;
}

.question_author_name {
    color: #999;
    font-size: 14px;
}

.level {
    color: #fec42d;
    font-size: 12px;
    font-weight: 700;
    margin-right: 30px;
}

.created_time {
    margin-right: 30px;
}

/* */
._question_content {
    margin-top: 20px;
    margin-bottom: 40px;
    word-break: break-all;
    color: #484e54;
    line-height: 25px;
    overflow: hidden;
    font-size: 15px;
}

</style>
