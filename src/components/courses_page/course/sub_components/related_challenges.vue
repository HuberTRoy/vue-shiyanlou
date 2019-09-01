<template>
    <div class="related_challenges">
        <ul class="related_challenges_nav_ul">
            <li class="related_challenges_nav_li">
                <a class="related_challenges_nav_a">
                    相关挑战
                </a>
            </li>
        </ul>
        <ul class="related_challenges_ul">
            <li v-for="(challenge, index) in related_challenges"
                :key="index"
                class="related_challenges_li"
            >
                <a href="javascript:;"
                   class="related_challenges_a"
                >
                    <span>{{ challenge.challenge_title }}</span>
                    <span class="challenge_tag">{{ challenge.challenge_tag }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            related_challenges: state => state.course.course_information.related_challenges
        })
    }
}

</script>
<style type="text/css">
.related_challenges {
    background: #fff;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 15px;
}

.related_challenges_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.related_challenges_nav_li {

}

.related_challenges_nav_a {
    display: block;
    padding: 0 0 4px;
    margin: 0 48px 0 0;
    font-size: 16px;
    color: #4c5157;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
}

.related_challenges_li {
    font-size: 14px;
}

.related_challenges_li:hover {
    /*background: #f5f5f5;*/
}

.related_challenges_a {
    display: block;
    padding: 12px;
    width: 100%;
    height: 100%;
    color: #4c5157;
}

.related_challenges_a:hover {
    color: #4c5157;
    text-decoration: underline !important;
    /*background: #f5f5f5;*/
}

.challenge_tag {
    display: inline-block;
    font-size: 12px;
    color: #666;
    margin-left: 10px;
    padding: 0 7px;
    border-radius: 20px;
    background: #eee;
}

</style>
