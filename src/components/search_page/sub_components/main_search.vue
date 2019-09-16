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
             "{{  keywords }}"的搜索结果(count):
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
            <div class="search_page_main_search_result_div" v-if="nav=='course'">
                <!-- <CourseCard></CourseCard> -->
            </div>
            <div class="search_page_main_search_result_div" v-if="nav=='question'">
                <!-- <QaItem></QaItem>   -->
            </div>
         </div>
     </div>
</template>
<script type="text/javascript">
import CourseCard from '@/components/common_components/cards/course_card.vue'
import QaItem from '@/components/common_components/qa_item/qa_item.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        CourseCard,
        QaItem
    },
    data: function () {
        return {
            nav: 'course',
            keywords: ''
        }
    },
    computed: {
        ...mapState({
            search_result: state => state.search.search_result
        })
    },
    methods: {
        tab_nav: function (navTitle) {
            this.nav = navTitle
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
            console.log('main_search.vue 404')
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

.search_page_main_search_result_div {
    display: flex;
    flex-wrap: wrap;
}

.search_page_main_search_header {
    font-size: 18px;
}

</style>
