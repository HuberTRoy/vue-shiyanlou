<template>
    <div class="course_comment_dialog">
        <div class="comment_dialog">
            <!-- 包括登陆状态和未登陆状态 -->
            <div class="send_comment_div"
                 v-if="sign_on"
            >
                <textarea class="comment_text_area" placeholder="请输入您想说的话..."></textarea>
                <button class="post_comment_button">发表评论</button>
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
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            sign_on: state => state.loginState.sign_on
        })
    },

    methods: {
        show_login: function () {
            this.$store.dispatch('loginState/change_show_state', 'on')
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

.post_comment_button {
    margin: 10px 0;
    padding: 6px 20px;
    font-size: 16px;
    border-radius: 4px;
    text-align: center;
    vertical-align: center;
    border: 1px solid transparent;
    color: #fff;
    background-color: rgb(8, 191, 145);
    outline: 0;
    align-self: flex-end;
}

.post_comment_button:hover {
    cursor: pointer;
    background: #21d6a8;
    border-color: #21d6a8;
}

</style>
