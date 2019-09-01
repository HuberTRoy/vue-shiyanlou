<template>
    <div class="main_questions_nav_bar">
        <ul class="main_questions_nav_bar_ul">
            <div class="main_questions_nav_bar_div">
                <li class="main_questions_nav_bar_li"
                    v-for="tag in all_nav_bar_tag"
                    :key="tag"
                    @click="change_current_nav_bar_tag(tag)"
                    :class="current_nav_bar_tag===tag ? 'main_questions_nav_bar_active' : ''"
                >
                    {{ tag }}
                </li>
            </div>
            <ul class="sort_category_ul">
                <li class="sort_category_li"
                    v-for="(category,index) in all_sort_category"
                    :key="category"
                    @click="change_current_sort_category(category)"
                    :class="current_sort_category===category ? 'sort_category_active' : ''"
                >
                    <span v-if="index !== 0" class="separator">
                    /
                    </span>
                    {{ category }}
                </li>
            </ul>
        </ul>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            current_nav_bar_tag: state => state.questions.current_nav_bar_tag,
            all_nav_bar_tag: state => state.questions.all_nav_bar_tag,
            current_sort_category: state => state.questions.current_sort_category,
            all_sort_category: state => state.questions.all_sort_category
        })
    },

    methods: {
        ...mapActions({
            change_current_nav_bar_tag: 'questions/change_current_nav_bar_tag',
            change_current_sort_category: 'questions/change_current_sort_category'
        })
    }
}

</script>
<style type="text/css">
.main_questions_nav_bar_ul {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    width: 100%;
    margin-bottom: 10px;
}

.main_questions_nav_bar_div {
    display: flex;

}

.main_questions_nav_bar_li {
    font-size: 16px;
    padding-bottom: 4px;
    margin-right: 48px;
    margin-bottom: -1px;
    border-bottom: 1px solid transparent;
}

.main_questions_nav_bar_li:hover {
    cursor: pointer;
    border-bottom-color: #0c9;
}

.main_questions_nav_bar_active {
    border-bottom-color: #0c9;
}

.separator {
    padding-right: 1px;
    padding-left: 2px;
    font-size: 10px;
}

.sort_category_ul {
    display: flex;
    align-items: flex-end;
}

.sort_category_li {
    padding-bottom: 3px;
    font-size: 13px;
    color: #565a61;
}

.sort_category_li:hover {
    cursor: pointer;
    color: #0c9;
}

.sort_category_active {
    color: #0c9;
}

</style>
