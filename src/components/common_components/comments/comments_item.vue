<template>
    <div class="comments_item">
        <div class="author_avatar_div">
            <router-link tag="a" :to="{ name: 'user', params:{ id: data.author.id } }" class="avatar_a">
                <img :src="data.author.avatar_url" class="avatar" />
            </router-link>
        </div>

        <div class="author_main_div">
            <div class="author_info">
                <a href="" class="name_a">
                    {{ data.author.name }}
                </a>

                <span class="level_span">
                    L{{ data.author.level }}
                </span>
                <div v-if="data.parent">
                    回复
                    <a href="" class="name_a">
                        {{ data.parent.author.name }}
                    </a>

                    <span class="level_span">
                        L{{ data.parent.author.level }}
                    </span>
                </div>
            </div>

            <div class="comment_text_div">
                <p class="comment_text_p">
                    {{ data.content }}
                </p>
            </div>

            <div class="comment_info_div">
                <p class="comment_info_p">
                    {{ data.created_at }}
                    <span v-if="data.lab">
                        来自: {{ data.lab.name }}
                    </span>
                </p>

                <div>
                    <a href="javascript:;" 
                       class="operation_a"
                       @click="_reply(data.id, data.author.name)">
                        <i class="far fa-comment-dots reply_icon"></i>
                        回复
                    </a>
                    <a href="javascript:;" 
                       class="operation_a" 
                       v-if="comments_userstatus[data.id] && comments_userstatus[data.id].can_delete"
                       @click="delete_comment()">
                        删除
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    props: {
        data: {
            type: Object,
            require: true
        },
        _name: {
            type: String,
            require: true
        }
    },

    computed: {
        ...mapState({
            comments_userstatus: state => state.comments.comments_userstatus
        })
    },
    methods: {
        ...mapActions({
            delete: 'comments/delete_comment',
            reply: 'comments/change_reply_id',
            change_text_placeholder: 'comments/change_text_placeholder'
        }),
        delete_comment: function () {
            let c = confirm("确认删除本条评论？")
            if (c) {
                this.delete({'id': this.data.id})
            }
        },

        _reply: function (id, name) {
            // 这个待定...
            let text = document.getElementsByClassName("comment_dialog")[0]
            text.scrollIntoView(true)
            this.reply(id)
            this.change_text_placeholder("回复: " + name)
        }
    }

}
</script>
<style type="text/css" scoped>
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

.operation_a, .operation_a:hover {
    font-size: 14px;
    color: #464646;
}

.reply_icon {
    margin-right: 1px;
    color: #a4a4a4;
    font-size: 15px;
}
</style>
