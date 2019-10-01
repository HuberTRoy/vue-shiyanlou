<template>
    <div class="courses_category">
        <div class="courses_category_div">
            <div class="courses_category_diretion courses_selection">
                <div class="courses_category_title"> 方向：</div>
                <div class="courses_selection_card">
                    <SelectionButton v-for="title in courses_category"
                    :text="title['name']"
                    :key="title['name']"
                    :class="current_category==title['name'] ? 'selected' : ''"
                    @click.native="change_current_category(title['name'])"
                    ></SelectionButton>
                </div>
            </div>
            <div class="courses_category_tag courses_selection">
                <div class="courses_category_title"> 标签： </div>
                <div class="courses_selection_card">
                    <div
                        v-for="tags in courses_category"
                        :key="tags['name']"
                    >
                        <SelectionButton v-for="tag_information in tags['tags']"
                        :text="tag_information"
                        :key="tag_information"
                        :class="current_tag==tag_information ? 'selected' : ''"
                        v-show="tags['name'].indexOf(current_category) != -1"
                        @click.native="change_current_tag(tag_information)"
                        >
                        </SelectionButton>
                    </div>
                </div>
            </div>
            <div class="courses_order_div">
                <div class="left_order_button_div">
                    <div class="base_order_div order_div">
                        <OrderButton v-for="name in ['综合', '最新', '最热']"
                        :text="name"
                        :key="name"
                        :class="current_base_order==name ? 'order_button_selected' : ''"
                        @click.native="change_current_base_order(name)"
                        >
                        </OrderButton>
                    </div>

                    <div class="category_order_div order_div">
                        <OrderButton v-for="name in ['已上线', '即将上线']"
                        :text="name"
                        :key="name"
                        :class="current_category_order==name ? 'order_button_selected' : ''"
                        @click.native="change_current_category_order(name)"
                        >
                        </OrderButton>
                    </div>
                </div>
                <div class="right_order_button_div">
                    <div class="type_order_div">
                        <a href="#8" id="type_order_button" class="courses_selection_sub_selection_a">
                            {{ current_type_order }}
                            <span class="spread"></span>
                        </a>
                        <ul id="sub_type_order_ul">
                            <li class="sub_type_order_li">
                                <a href="javascript:;" class="sub_type_order_a"
                                @click="change_current_type_order('全部')"
                                >
                                    全部
                                </a>
                            </li>
                            <li class="sub_type_order_li">
                                <a href="javascript:;" class="sub_type_order_a"
                                @click="change_current_type_order('免费')"
                                >
                                    免费
                                </a>
                            </li>
                            <li class="sub_type_order_li">
                                <a href="javascript:;" class="sub_type_order_a"
                                @click="change_current_type_order('会员')"
                                >
                                    会员
                                </a>
                            </li>
                            <li class="sub_type_order_li">
                                <a href="javascript:;" class="sub_type_order_a"
                                @click="change_current_type_order('会员')"
                                >
                                    私有课
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="javascript:;" id="add_to_person_courses" class="add_to_person_courses_button">
                        加入私有课
                    </a>
                </div>
            </div>
        </div>
        <div class="courses_div">
            <CourseCard
                class="courses_selection_course_card"
                v-for="(course_info, index) in courses_content['results']"
                :key="index"
                :data="course_info"
            >

            </CourseCard>
        </div>
        <TabPage>
        </TabPage>
    </div>
</template>

<script type="text/javascript">
import SelectionButton from './sub_components/selection_button.vue'
import OrderButton from './sub_components/order_button.vue'
import CourseCard from '../common_components/cards/course_card.vue'
import TabPage from './sub_components/tab_page.vue'

import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            has_created: false
        }
    },

    components: {
        SelectionButton,
        OrderButton,
        CourseCard,
        TabPage
    },

    computed: {
        ...mapState({
            current_category: state => state.coursesCategory.current_category,
            current_tag: state => state.coursesCategory.current_tag,
            current_base_order: state => state.coursesCategory.current_base_order,
            current_category_order: state => state.coursesCategory.current_category_order,
            current_type_order: state => state.coursesCategory.current_type_order,
            current_page: state => state.coursesCategory.current_page,
            all_page: state => state.coursesCategory.all_page,
            courses_content: state => state.coursesCategory.courses_content,
            courses_category: state => state.coursesCategory.courses_category
        })
    },

    methods: {
        // change_current_category: function (x) {
        //     console.log(x)
        // }
        // change_current_category: function (category) {
        //     this.$store.dispatch('coursesCategory/change_current_category', category)
        // },
        ...mapActions({

            change_current_category: 'coursesCategory/change_current_category',
            change_current_tag: 'coursesCategory/change_current_tag',
            change_current_base_order: 'coursesCategory/change_current_base_order',
            change_current_category_order: 'coursesCategory/change_current_category_order',
            change_current_type_order: 'coursesCategory/change_current_type_order',
            router_to: 'coursesCategory/router_to',
            change_courses_content: 'coursesCategory/change_courses_content',
            change_query: 'coursesCategory/change_query',
            change_courses_category: 'coursesCategory/change_courses_category'
        })
    },
    watch: {
        '$route': function () {
            this.change_courses_content(this.$route.query)
        }
    },
    created: function () {
        // console.log(1)
        // this.has_created = true
        // this.router_to()
        this.change_courses_category()
        this.change_courses_content(this.$route.query)
    }
}

</script>
<style type="text/css">
.courses_category {
    width: 1170px;
    padding: 0 5px;
    margin-left: auto;
    margin-right: auto;
}

/* 课程分类区域 */
.courses_category_div {
    width: 100%;
    background: #fff;
    padding: 20px;
    border: 1px solid #eee;
    margin-bottom: 10px;
}

.courses_category_title {
    font-size: 16px;
    color: #666;
    width: 62px;
    min-width: 62px;
}

.courses_selection {
    display: flex;
    margin-bottom: 10px;
    /*flex-wrap: wrap;*/
}

.courses_category_tag {
    border-bottom: 2px solid #eee;

}

.courses_selection_card {
    display: flex;
    flex-wrap: wrap;
}

/* 分为左右两部分 */
.courses_order_div {
    display: flex;
    justify-content: space-between;
    padding: 10px 0 0;
}

.left_order_button_div {
    display: flex;
}

.right_order_button_div {
    display: flex;
    /*flex-basis: baseline;*/
    align-items: baseline;
}

/* 排序按钮区域 */
.order_div {
    display: flex;
}

.base_order_div {
    /*display: flex;*/
    margin-right: 50px;
}

.order_button {
    margin-left: -1px;
}

/* type order 的二级子菜单及其父组件 */
.type_order_div {
    position: relative;
    padding: 0 10px;

}

.type_order_div:hover #sub_type_order_ul{
    /*border: 1px solid;*/
    display: block;

}

.sub_type_order_li {
    width: 100%;
    font-size: 14px;
    text-align: center;
    margin-bottom: 5px;
}

.sub_type_order_a, .courses_selection_sub_selection_a {
    display: block;
    color: #3a3a3a;
    padding: 6px 0 0;
    font-size: 14px;
}

.sub_type_order_a:hover, .courses_selection_sub_selection_a:hover{
    color: #08bf91;
}

#sub_type_order_ul {
    display: none;
    position: absolute;
    min-width: 105px;
    background: #fff;
    padding: 0;
    margin: 2px 0;
    box-shadow: 0 15px 16px 0 rgba(0,0,0,.18);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    /*z-index: 10;  这里如果覆盖掉触发按钮的话有很大几率会导致还未滑动到菜单上hover效果就消失了*/
    padding-top: 10px;
    padding-bottom: 5px;
    right: -30px;
}

/* 加入私有课按钮 */
.add_to_person_courses_button {
    display: block;
    font-size: 14px;
    color: #08BF91;
    background: #fff;
    padding: 3px 20px;
    border: 1px solid #08BF91;
    border-radius: 36px;
    box-shadow: none;
}

/* 课程 card 区域的样式 */

.courses_div {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}

.courses_selection_course_card {
    width: 25%;
    margin: 0 0 20px;
    padding: 0 15px;
}

/* 换页区域 */

.tab_page_div {
    margin: 0 auto;
}

</style>
