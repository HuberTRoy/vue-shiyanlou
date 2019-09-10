<template>
    <div class="question_reply_item">
        <!--
         avatar name        up_thumb
                content
                reply_time  reply_button
         -->
        <!-- <div class="question_reply_item_top"> -->
            <div class="question_reply_item_base_info" v-if="data.author">
                <div class="question_reply_item_base_info_layout">
                    <img :src="data.author.avatar_url" class="avatar"/>
                    <a href="javascript:;" class="author">{{ data.author.name }}
                        <span class="level">L{{ data.author.level }}</span>
                    </a>
                    <div v-if="data.parent">
                        回复
                        <a href="javascript:;" class="author">{{ data.parent.author.name }}
                            <span class="level">L{{ data.parent.author.level }}</span>
                        </a>              
                    </div>
                </div>
                <span class="thumb">
                    <a href="javascript:;" class="thumb_button">
                        <i class="far fa-thumbs-up"></i>
                    </a>
                    | {{ data.likes_count }}
                </span>
            </div>
            <div class="main_reply">
                <p class="content_p">
                    <VueMarkDown>{{ data.content }}</VueMarkDown>
                </p>
                <div class="reply_base_info_div">
                    <span class="created_time">{{ data.updated_at }}</span>
                    <div class="up_reply_button">
                        <a class="reply_button" href="javascript:;" @click="reply()">回复</a>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</template>
<script type="text/javascript">
import VueMarkDown from 'vue-markdown'
import { mapActions } from 'vuex'


export default {
    components: {
        VueMarkDown
    },

    props: {
        data: {
            type: Object,
            require: true
        }
    },
    methods: {
        ...mapActions({
            change_text_placeholder: 'question/change_text_placeholder',
            change_reply_id: 'question/change_reply_id'
        }),
        reply: function () {
            let text = document.getElementsByClassName('editer')[0]
            text.scrollIntoView(true)
            this.change_text_placeholder("回复: " + this.data.author.name)
            this.change_reply_id(this.data.id)
        }
    }
    // computed: {

    // }
}
</script>

<style type="text/css">
.question_reply_item {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    /*justify-content: space-between;*/
}

.main_reply {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    border-bottom: 1px solid #eee;
}

.question_reply_item_base_info {
    display: flex;
    justify-content: space-between;
}

.question_reply_item_base_info_layout {
    display: flex;
    align-items: center;
}

.author {
    color: #367eba;
    font-size: 13px;
}

.author:hover {
    color: #0c9;
}

.content_p {
    margin: 20px 0 20px;
    font-size: 15px;
    line-height: 26px;
    word-break: break-all;
}


.reply_base_info_div {
    display: flex;
    justify-content: space-between;
}

.created_time {
    display: inline-block;
    color: #a4a4a4;
    padding: 15px 0 10px;
}

.up_reply_button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    /*width: 6%;*/
    font-size: 16px;
    color: #9f9c99;
}

.thumb {
    align-self: center;
}

.thumb_button {
    color: #9f9c99;
}

.thumb_button:hover {
    color: #9f9c99;
}

.reply_button {
    font-size: 10px;
    color: #666;
    padding: 15px 0 10px;
    margin-bottom: 20px;
}
</style>
