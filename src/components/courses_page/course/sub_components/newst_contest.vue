<template>
    <div class="newst_contest">
        <ul class="newst_contest_nav_ul">
            <li class="newst_contest_nav_li">
                <a class="newst_contest_nav_a">
                    近期课程
                </a>
            </li>
        </ul>
        <ul class="newst_contest_ul">
            <li v-for="(contest, index) in newst_contest"
                :key="index"
                class="newst_contest_li"
            >
                <a href="javascript:;"
                   class="newst_contest_a"
                >
                    {{ contest.course_title }}
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
            newst_contest: state => state.course.course_information.contest
        })
    }
}

</script>
<style type="text/css">
.newst_contest {
    background: #fff;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 15px;
}

.newst_contest_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.newst_contest_nav_li {

}

.newst_contest_nav_a {
    display: block;
    padding: 0 0 4px;
    margin: 0 48px 0 0;
    font-size: 16px;
    color: #4c5157;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
}

.newst_contest_li {
    font-size: 14px;
}

.newst_contest_li:hover {
    background: #f5f5f5;
}

.newst_contest_a {
    display: block;
    padding: 12px;
    width: 100%;
    height: 100%;
    color: #4c5157;
}

.newst_contest_a:hover {
    color: #4c5157;
    background: #f5f5f5;
}
</style>
