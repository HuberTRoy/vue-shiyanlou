<template>
    <div class="reply_form">
        <div v-if="login" class="editer_div">
            <div class="editer_header">
                你的回复
            </div>
            <!-- 编辑框这里需要用到Markdown的编辑框，暂时只用textarea占位 -->
            <textarea class="editer"></textarea>
            <div class="editer_footer">
                <div class="user_info">
                    <img class="avatar" :src="login_info.avatar">
                    <span class="nickname">{{ login_info.nickname }}</span>
                </div>
                <button class="post_answer_button">提交</button>
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
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            login: state => state.loginState.sign_on,
            login_info: state => state.loginState.login_info
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
