<template>
    <div class="comments_item">
        <div class="author_avatar_div">
            <a href="" class="avatar_a">
                <img :src="avatar_url" class="avatar" />
            </a>
        </div>

        <div class="author_main_div">
            <div class="author_info">
                <a href="" class="name_a">
                    {{ author_name }}
                </a>

                <span class="level_span">
                    L{{ author_level }}
                </span>
            </div>

            <div class="comment_text_div">
                <p class="comment_text_p">
                    {{ comment_text }}
                </p>
            </div>

            <div class="comment_info_div">
                <p class="comment_info_p">
                    {{ created_time }}
                    {{ source_lab }}
                </p>
                <a href="" class="reply_a">
                    <i class="far fa-comment-dots reply_icon"></i>
                    <!-- <img src="check-circle" /> -->
                    回复
                </a>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    props: {
        avatar_url: {
            type: String,
            require: true
        },

        author_name: {
            type: String,
            require: true
        },

        author_level: {
            type: Number,
            require: true
        },

        comment_text: {
            type: String,
            require: true
        },

        created_time: {
            type: String,
            require: true
        },

        source_lab: {
            type: String,
            require: true
        }
    }
}
</script>
<style type="text/css">
/* 每个评论框的div设置 */
.comments_item {
    display: flex;
    padding: 24px 0 4px;
    border-bottom: 2px solid #eee;
}

/* 分为左右两部分的 flex 布局，左边只有头像，右边为用户名，具体评论，创建时间等 */
.author_avatar_div {
    padding: 0 15px;
}

.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

/* 这个是右边的布局也是一个flex布局，方向是 column */
.author_main_div {
    width: 100%;
    padding: 0 0 0 5px;
    display: flex;
    flex-direction: column;
}

.author_info {
    display: flex;
    align-items: baseline;
}

.name_a {
    font-size: 14px;
    color: #a4a4a4;
}

.name_a:hover {
    color: #a4a4a4;
}

.level_span {
    margin-left: 5px;
    color: #ffc500;
    font-size: 12px;
    font-weight: 700;
}

.comment_text_div {
    margin: 8px 0;
    color: #666;
}

.comment_text_p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 10px;
}

.comment_info_div {
    display: flex;
    justify-content: space-between;
}

.comment_info_p {
    font-size: 14px;
    color: #a4a4a4;
}

.reply_a, .reply_a:hover {
    font-size: 14px;
    color: #464646;
}

.reply_icon {
    margin-right: 1px;
    color: #a4a4a4;
    font-size: 15px;
}
</style>
