<template>
    <div class="stuff_board_courses_div">
        <div class="stuff_board_courses_nav_div">
            <ul class="stuff_board_courses_nav_ul">
                <li class="stuff_board_courses_nav_li"
                    :class="courses_nav==='history' ? 'active_courses' : ''"
                    @click="tab_courses('history')"
                >
                    历史学习
                </li>
                <li class="stuff_board_courses_nav_li"
                    :class="courses_nav==='follow' ? 'active_courses' : ''"
                    @click="tab_courses('follow')"
                >
                    关注列表
                </li>
            </ul>
        </div>
        <div class="stuff_board_courses_list" v-if="courses_nav==='history'">
            <CoursesCard v-for="course in courses_content.learned_courses"
                         :key="course.course_id"
                         :data="course"
            ></CoursesCard>
        </div>
        <div class="stuff_board_courses_list" v-if="courses_nav==='follow'">
            <CoursesCard v-for="course in courses_content.follow_courses"
                         :key="course.course_id"
                         :data="course"
            >

            </CoursesCard>
        </div>
    </div>
</template>
<script type="text/javascript">
import CoursesCard from './courses_sub_components/cards/course_card.vue'
import { mapState } from 'vuex'

export default {
    components: {
        CoursesCard
    },
    computed: {
        ...mapState({
            courses_content: state => state.user.courses_content,
            courses_nav: state => state.user.courses_nav,
            user_id: state => state.user.user_id
            // page
        })
    },

    methods: {
        tab_courses: function (navTitle) {
            this.$store.dispatch('user/change_courses_nav', navTitle)
            this.$store.dispatch('user/get_and_change_courses_content', {
                'id': this.user_id,
                'type': this.courses_nav,
                'page': 0
            })
        }
    },
    created: function () {
        this.$store.dispatch('user/change_courses_nav', 'history')
    }
}

</script>
<style type="text/css">
.stuff_board_courses_div {
    /*padding: 20px;*/
    display: flex;
    flex-direction: column;
}

.stuff_board_courses_nav_ul {
    display: flex;
}

.stuff_board_courses_nav_li {
    padding: 6px 16px;
    color: #999;
    font-size: 14px;
    cursor: pointer;
}

.active_courses {
    color: #0c9;
    background: #E7F8F2;
}

</style>
