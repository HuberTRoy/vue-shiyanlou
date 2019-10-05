<template>
    <div class="question_title">
        <router-link tag="a" to="/questions"
        class="nav_title_a"
        >
            讨论区
        </router-link>
        <span class="separator_span">
        </span>
        <div class="quesiton_tag_div"
        >
            <router-link tag="a"
            class="nav_title_a"
            :to="{ name: 'questions', query: { type: question_tag } }">
                {{ tag_type[question_tag] }}
            </router-link>
        </div>
        <span class="separator_span">
        </span>
        <router-link tag="a"
        class="nav_title_a question_title_a"
        :to="{ name: 'question', params: { id: this.$route.params.id } }"
        >
             {{ question_title }}
        </router-link>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
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
            question_title: state => state.question.question_information.title,
            question_tag: state => state.question.question_information.type
        })
    }
}
</script>
<style type="text/css" scoped>
.question_title {
    display: flex;
    flex-wrap: wrap;
}

.nav_title_a {
    color: #666;
    font-size: 13px;
    word-wrap: none;
}

.question_title_a {
    word-break: break-all;
}

.separator_span {
    padding: 0 5px;
}

.separator_span::before {
    content: "/\00a0";
    color: #ccc;
}

.nav_title_a:hover {
    color: #0c9;
}
</style>
