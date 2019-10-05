<template>
    <div class="stuff_board">
        <ul class="nav_title_ul">
            <li class="nav_title_li"
                :class="nav_title==='课程' ? 'active_nav' : ''"
                @click="tab_nav('课程')"
            >
                课程
            </li>
            <li class="nav_title_li"
                :class="nav_title==='路径' ? 'active_nav' : ''"
                @click="tab_nav('路径')"
            >
                路径
            </li>
            <li class="nav_title_li"
                :class="nav_title==='报告' ? 'active_nav' : ''"
                @click="tab_nav('报告')"
            >
                报告
            </li>
            <li class="nav_title_li"
                :class="nav_title==='讨论' ? 'active_nav' : ''"
                @click="tab_nav('讨论')"
            >
                讨论
            </li>
        </ul>

        <div class="stuff_div">
            <Courses v-if="nav_title==='课程'"></Courses>
            <Paths v-if="nav_title==='路径'"></Paths>
            <Reports v-if="nav_title==='报告'"></Reports>
            <Discuss v-if="nav_title==='讨论'"></Discuss>
        </div>
    </div>
</template>
<script type="text/javascript">
import Courses from './stuff_board_sub_components/courses.vue'
import Paths from './stuff_board_sub_components/paths.vue'
import Reports from './stuff_board_sub_components/reports.vue'
import Discuss from './stuff_board_sub_components/discuss.vue'

import { mapState } from 'vuex'

export default {
    components: {
        Courses,
        Paths,
        Reports,
        Discuss
    },
    computed: {
        ...mapState({
            nav_title: state => state.user.user_stuff_nav,
            user_id: state => state.user.user_id
        })
    },
    methods: {
        tab_nav: function (title) {
            this.$store.dispatch('user/change_user_stuff', {
                'nav_title': title,
                // 'id': this.user_id,
                // 'type': 'studied'
            })
        }
    },
    watch: {
        '$route': function () {
            this.tab_nav('课程')
        }
    },
    created: function () {
        this.tab_nav('课程')
    }
}

</script>
<style type="text/css" scoped>
.stuff_board {
    margin-top: 10px;
    border: 1px solid #eee;
    background: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
}

.nav_title_ul {
    display: flex;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
}

.nav_title_li {
    font-size: 16px;
    padding: 3px 5px;
    padding-bottom: 7px;
    margin-right: 25px;
    margin-bottom: -1px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
}

.nav_title_li:hover {
    border-bottom-color: #08bf91;
}

.active_nav {
    border-bottom-color: #08bf91;;
}

/* */

.stuff_div {
    margin-top: 10px;
}
</style>
