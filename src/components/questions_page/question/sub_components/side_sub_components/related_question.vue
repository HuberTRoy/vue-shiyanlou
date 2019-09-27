<template>
    <div class="related_question">
        <ul class="related_question_nav_ul">
            <li class="related_question_nav_li">
                <a class="related_question_nav_a">
                    相关帖子
                </a>
            </li>
        </ul>
        <ul class="related_question_ul">
            <li v-for="(question, index) in related_question"
                :key="index"
                class="related_question_li"
            >
                <router-link tag="a"
                             :to="{ name: 'question', params: { id: question.id} }"
                             class="related_question_a"
                >
                   <span>{{ question.title }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            related_question: state => state.question.related_question_information
        })
    }
}

</script>
<style type="text/css">
.related_question {
    background: #fff;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 15px;
}

.related_question_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.related_question_nav_li {

}

.related_question_nav_a {
    display: block;
    padding: 0 0 4px;
    margin: 0 48px 0 0;
    font-size: 16px;
    color: #4c5157;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
}

.related_question_li {
    font-size: 14px;
}

.related_question_li:hover {
    background: #f5f5f5;
}

.related_question_a {
    display: block;
    padding: 12px;
    width: 100%;
    height: 100%;
    color: #4c5157;
}

.related_question_a:hover {
    color: #4c5157;
    background: #f5f5f5;
}
</style>
