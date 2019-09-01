<template>
    <div class="question_reply_item">
        <!--
         avatar name        up_thumb
                content
                reply_time  reply_button
         -->
        <img :src="data.author.avatar" class="avatar"/>
        <div class="main_reply">
            <a href="javascript:;" class="author">{{ data.author.name }}
                <span class="level">L{{ data.author.level }}</span>
            </a>
            <p class="content_p">{{ data.content }}</p>
            <span class="created_time">{{ data.created_time }}</span>
        </div>
        <div class="up_reply_button">
            <span class="thumb">
                <a href="javascript:;" class="thumb_button">
                    <i class="far fa-thumbs-up"></i>
                </a>
                | {{ data.up_thumb }}
            </span>
            <a class="reply_button" href="javascript:;">回复</a>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    props: {
        data: {
            type: Object,
            require: true
        }
    }
}
</script>

<style type="text/css">
.question_reply_item {
    margin-top: 30px;
    display: flex;
}

.main_reply {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    border-bottom: 1px solid #eee;
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
    width: 6%;
    font-size: 16px;
    color: #9f9c99;
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
