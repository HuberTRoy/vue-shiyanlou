<template>
    <!-- 
        布局简单:
        "x" 的搜索结果
        -------------
        |课程  问答  |
        |result     |
        |result     |
     -->
     <div class="search_page_main_search_div">
         <p class="search_page_main_search_header">
             "{{  keywords }}"的搜索结果({{ search_result.count }}):
         </p>

         <div class="search_page_main_search_content_div">
            <ul class="search_page_main_search_nav_ul">
                <li class="search_page_main_search_nav_li"
                    :class="[nav == 'course' ? 'search_page_main_search_nav_li_active' : '']"
                >
                    <a href="javascript:;"
                       class="search_page_main_search_nav_a"
                       @click="tab_nav('course')"
                    >
                        课程
                    </a>
                </li>
                <li class="search_page_main_search_nav_li"
                    :class="[nav == 'question' ? 'search_page_main_search_nav_li_active' : '']"
                >
                    <a href="javascript:;"
                       class="search_page_main_search_nav_a"
                       @click="tab_nav('question')"
                    >
                        问答
                    </a>
                </li>
            </ul>
            <div class="search_page_main_courses_search_result_div" v-if="nav=='course'">
                <CourseCard class="search_page_result_card"
                            v-for="(course, index) in search_result.results"
                            :key="index"
                            :data="course"
                ></CourseCard>
            </div>
            <div class="search_page_main_question_search_result_div" v-if="nav=='question'">
                <QaItem v-for="(question, index) in search_result.results"
                        :key="index"
                        :data="question"
                ></QaItem>
            </div>
            <TabPage></TabPage>
         </div>
     </div>
</template>
<script type="text/javascript">
import CourseCard from '@/components/common_components/cards/course_card.vue'
import QaItem from '@/components/common_components/qa_item/qa_item.vue'
import TabPage from './main_search_sub_components/tab_page.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        CourseCard,
        QaItem,
        TabPage
    },
    data: function () {
        return {
            // nav: 'course',
            keywords: ''
        }
    },
    computed: {
        ...mapState({
            search_result: state => state.search.search_result,
            nav: state => state.search.nav
        })
    },
    methods: {
        ...mapActions({
            change_search_result: 'search/change_search_result',
            change_nav: 'search/change_nav'
        }),
        tab_nav: function (navTitle) {
            this.change_nav(navTitle)
            this.change_search_result({
                type: navTitle,
                search: this.keywords
            })
            // get the data

        }
    },
    watch: {
        '$route': function () {
            this.keywords = this.$route.query.keywords
        }
    },
    created: function () {
        // console.log(1)
        this.keywords = this.$route.query.keywords
        if (!this.$route.query.keywords) {
            // to 404
            this.$router.push({name: 'notfound'})
        }
    }

}
</script>
<style type="text/css">
.search_page_main_search_content_div {
    background: #fff;
    width: 74%;
    border: 1px solid #eee;
    padding: 30px;
}

.search_page_main_search_nav_ul {
    display: flex;
    font-size: 1rem;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
}

.search_page_main_search_nav_li {
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    margin-right: 48px;
}

.search_page_main_search_nav_li:hover {
    border-bottom-color: #0c9;
}

.search_page_main_search_nav_li_active {
    border-bottom-color: #0c9;
}

.search_page_main_search_nav_a {
    color: #4c5157;
}

.search_page_main_courses_search_result_div {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
}

.search_page_main_question_search_result_div {
    display: flex;
    /*flex-wrap: wrap;*/
    flex-direction: column;
    margin-left: -15px;
    margin-right: -15px;
}

.search_page_main_search_header {
    font-size: 18px;
}

.search_page_result_card {
    width: 33.333%;
    padding: 0 15px;
    margin-bottom: 20px;
}

</style>
