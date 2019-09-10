<template>
    <div class="reply_form">
        <div v-if="login" class="editer_div">
            <div class="editer_header">
                你的回复
            </div>
            <!-- 编辑框这里需要用到Markdown的编辑框，暂时只用textarea占位 -->
            <textarea class="editer" :placeholder="placeholder" v-model="content"></textarea>
            <div class="editer_footer">
                <div class="user_info">
                    <img class="avatar" :src="login_info.avatar_url">
                    <span class="nickname">{{ login_info.name }}</span>
                </div>
                <div>
                    <button class="post_answer_button"
                            v-if="this.reply_id"
                            @click="_cancel()"
                    >取消</button>
                    <button class="post_answer_button"
                            @click="_reply()"
                    >提交</button>
                </div>
            </div>
        </div>
        <div v-if="login===false" class="unlogin_div">
            <a href="javascript:;"
               class="login_button"
               @click="show_login"
            >
                登陆
            </a>
            后回复帖子
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    data: function () {
        return {
            content: ''
        }
    },
    computed: {
        ...mapState({
            login: state => state.loginState.sign_on,
            login_info: state => state.loginState.user_info,
            placeholder: state => state.question.text_placeholder,
            reply_id: state => state.question.reply_id,
        })
    },
    methods: {
        ...mapActions({
            reply: 'question/reply_question',
            reply_comment: 'question/reply_question_comment',
            change_text_placeholder: 'question/change_text_placeholder',
            change_reply_id: 'question/change_reply_id'
        }),
        show_login: function () {
            this.$store.dispatch('loginState/change_show_state', 'on')
        },

        _reply: function () {
            if (this.reply_id) {
                this.reply_comment({
                    id: this.$route.params.id,
                    content: this.content,
                    parent_id: this.reply_id             
                })
                return 
            }
            this.reply({
                id: this.$route.params.id,
                content: this.content,
            })
        },

        _cancel: function () {
            this.change_text_placeholder("")
            this.change_reply_id(0)
        }
    }
}

</script>
<style type="text/css">
.reply_form {
    width: 100%;
    padding-bottom: 40px;
}

.unlogin_div {
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    margin: 0 0 10px;
}

.editer_div {
    display: flex;
    flex-direction: column;
}

.editer_header {
    font-size: 18px;
    color: #666;
    padding-bottom: 26px;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
}

.editer {
    width: 100%;
}

.editer_footer {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post_answer_button {
    padding: 6px 20px;
    background: rgb(8, 191, 145);
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
    color: #fff;
}

.post_answer_button:hover {
    cursor: pointer;
    background: #21d6a8;
    border-color: #21d6a8;
}

</style>
