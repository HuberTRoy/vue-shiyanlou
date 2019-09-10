<template>
    <div class="course_comment_dialog">
        <div class="comment_dialog">
            <!-- 包括登陆状态和未登陆状态 -->
            <div class="send_comment_div"
                 v-if="sign_on"
            >
                <textarea class="comment_text_area" id="course_comment_text_area" 
                          :placeholder="placeholder" 
                          v-model="comment_content">
                </textarea>
                <div class="course_comment_operation_div">
                    <button v-if="reply_id"
                            class="cancel_comment_button"
                            @click="_cancel(0)"
                    >取消</button>
                    <button class="post_comment_button"
                            @click="_post_comment()"
                    >发表评论</button>
                </div>
            </div>

            <div class="unlogin_dialog_div"
                 v-if="!sign_on"
            >
                请
                <a href="javascript:;"
                   class="login_button"
                   @click="show_login"
                >
                    登陆
                </a>
                后发表评论
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    data: function () {
        return {
            comment_content: ''
        }
    },
    computed: {
        ...mapState({
            sign_on: state => state.loginState.sign_on,
            reply_id: state => state.course.reply_id,
            placeholder: state => state.course.text_placeholder
        })
    },

    methods: {
        ...mapActions({
            post_comment: 'course/post_comment',
            reply_comment: 'course/reply_comment',
            cancel: 'course/change_reply_id',
            init_text: 'course/change_text_placeholder'
        }),
        show_login: function () {
            this.$store.dispatch('loginState/change_show_state', 'on')
        },

        _post_comment: function () {
            if (this.reply_id) {
                this.reply_comment({
                    'content': this.comment_content,
                    'topic_id': this.$route.params.id,
                    'topic_type': "course",
                    'parent_id': this.reply_id               
                })
                this.comment_content = ''
                return
            }
            this.post_comment({
                'content': this.comment_content,
                'topic_id': this.$route.params.id,
                'topic_type': "course"
            })
        },

        _cancel: function (id) {
            this.cancel(0)
            this.init_text("请输入您想说的话...")
        }   
    }
}

</script>
<style type="text/css">
.unlogin_dialog_div {
    height: 150px;
    width: 100%;
    margin: 12px 0 30px;
    padding: 6px 12px;
    background: #fafbfa;
    font-size: 14px;
    text-align: center;
    line-height: 136px;
    border: 1px solid #ececec;
}

.login_button {
    color: #0c9;
}

.login_button:hover {
    color: #0c9;
    text-decoration: underline !important;
}

/* */
.send_comment_div {
    display: flex;
    flex-direction: column;
}

.comment_text_area {
    width: 100%;
    font-size: 16px;
    color: #555;
    margin-top: 12px;
    padding: 6px 12px;
    background: #fafbfa;
    border: 1px solid #ececec;
    overflow-y: auto;
    resize: none;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.comment_text_area:focus {
    outline: 0;
    border: 1px solid #08bf91;
    box-shadow: 0 0 0 1px #21d6a8;
}

.course_comment_operation_div {
    display: flex;
    justify-content: flex-end;
}

.post_comment_button {
    margin: 10px 0;
    padding: .375rem .75rem;
    font-size: 1rem;
    text-align: center;
    vertical-align: center;
    border: 1px solid transparent;
    border-radius: .25rem;
    color: #fff;
    background-color: rgb(8, 191, 145);
    outline: 0;
    align-self: flex-end;
    margin-left: 20px;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.post_comment_button:hover {
    cursor: pointer;
    background: #21d6a8;
    border-color: #21d6a8;
}

.cancel_comment_button {
    border: 1px solid transparent;
    border-radius: .25rem;
    padding: .375rem .75rem;
    font-size: 1rem;
    text-align: center;
    margin: 10px 0;
    background-color: transparent;
    border-color: #6c757d;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.cancel_comment_button:hover {
    color: #fff;
    border-color: #6c757d;
    background-color: #6c757d;
}


</style>
