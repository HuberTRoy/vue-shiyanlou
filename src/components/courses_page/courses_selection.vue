<template>
    <div class="courses_category">
        <div class="courses_category_div">
            <div class="courses_category_diretion courses_selection">
                <div class="courses_category_title"> 方向：</div>
                <div class="courses_selection_card">
                    <a class="selection_button_a"
                       href="javascript:;"
                       v-for="title in courses_category"
                       :key="title['name']"
                       :class="current_category==title['name'] ? 'selected' : ''"
                       @click="change_current_category(title['name'])"
                    >
                        {{ title['name'] }}
                    </a>
                </div>
            </div>
            <div class="courses_category_tag courses_selection">
                <div class="courses_category_title"> 标签： </div>
                <div class="courses_selection_card">
                    <div
                        v-for="tags in courses_category"
                        :key="tags['name']"
                    >
                        <a class="selection_button_a"
                           href="javascript:;"
                           v-for="tag_information in tags['tags']"
                           :key="tag_information"
                           :class="current_tag==tag_information ? 'selected' : ''"
                           v-show="tags['name'].indexOf(current_category) != -1"
                           @click="change_current_tag(tag_information)"
                        >
                           {{ tag_information }}
                        </a>
                    </div>
                </div>
            </div>
            <div class="courses_order_div">
                <div class="left_order_button_div">
                    <div class="base_order_div order_div">
                        <a class="order_button"
                           href="javascript:;" 
                           v-for="name in ['综合', '最新', '最热']"
                           :key="name"
                           :class="current_base_order==name ? 'order_button_selected' : ''"
                           @click="change_current_base_order(name)"
                        >
                           {{ name }}
                        </a>
                    </div>

                    <div class="category_order_div order_div">
                        <a class="order_button" 
                           href="javascript:;"
                           v-for="name in ['已上线', '即将上线']"
                           :key="name"
                           :class="current_category_order==name ? 'order_button_selected' : ''"
                           @click="change_current_category_order(name)"
                        >
                          {{ name }}
                        </a>
                    </div>
                </div>
                <div class="right_order_button_div">
                    <div class="type_order_div">
                        <a class="courses_selection_sub_selection_a">
                            {{ current_type_order }}
                        </a>
                        <ul id="sub_type_order_ul">
                            <li class="sub_type_order_li" v-for="type in ['全部', '免费', '会员', '私有课']">
                                <a href="javascript:;" class="sub_type_order_a"
                                @click="change_current_type_order(type)"
                                >
                                    {{ type }}
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
import CourseCard from '../common_components/cards/course_card.vue'
import TabPage from './sub_components/tab_page.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
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
            courses_content: state => state.coursesCategory.courses_content,
            courses_category: state => state.coursesCategory.courses_category
        })
    },

    methods: {
        ...mapActions({

            change_current_category: 'coursesCategory/change_current_category',
            change_current_tag: 'coursesCategory/change_current_tag',
            change_current_base_order: 'coursesCategory/change_current_base_order',
            change_current_category_order: 'coursesCategory/change_current_category_order',
            change_current_type_order: 'coursesCategory/change_current_type_order'
        })
    }
}

</script>
<style type="text/css" scoped>
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
    align-items: center;
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
    padding-right: 20px;
    padding-bottom: 10px;

}

.type_order_div:hover #sub_type_order_ul{
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
    cursor: pointer;
}

.courses_selection_sub_selection_a:after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: .225rem;
    border-bottom-color: transparent; 
    border-left-color: transparent; 
    border-right-color: transparent; 
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 9px;
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
    padding-bottom: 5px;
    right: -20px;
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

/* buttons */
.selection_button_a {
    display: inline-block;
    margin: 0 8px 10px 0;
    padding: 4px 10px;
    font-size: 15px;
    color: #666;
    border-radius: 15px;
    cursor: pointer;
    transition: color 1s ease;
    transition: background .5s ease;
}

.selection_button_a:hover {
    color: #fff;
    background: #08bf91;
}

.selected {
    color: #fff;
    background: #08bf91;
}

.order_button {
    display: block;
    color: #999;
    border: 1px solid #c9c9c9;
    padding: 3px 5px;
    font-size: 14px;
}

.order_button:hover, .order_button_selected {
    border: 1px solid #08bf91;
    color: #39cca7;
}
</style>
