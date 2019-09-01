<template>
    <div class="tab_page_div">
            <a href="javascript:;"
               class="tab_page_a"
               @click="change_current_page({
                'pageNumber': current_page - 1,
                'pageType': pageType
               })"
            >
                上一页
            </a>
            <!-- 具体的页数有3种显示模式：
                 1. 当前页的前后4个。
                 2. '...' 会在当前页的前后4个没有涉及到third 和 last-third 时出现。
                 3. 最前面的一个和最后面的一个恒出现。

                 为了区分：
                 前面一个...用了'...'，
                 后面一个...用了'... '。
             -->
            <a href="javascript:;" class="tab_page_a"
               v-for="(page_info, page_index) in showing_page_info"
               :key="page_index"
               :class="current_page==page_info ? 'page_active':''"
               v-show="(current_page - 3 <= page_info && page_info <= current_page + 3)
                        || (page_info == 1)
                        || (page_info == total_page)
                        || (page_info == '...' && current_page - 3 > 1)
                        || (page_info == '... ' && current_page + 3 < total_page - 1)"
               @click="change_current_page({
                'pageNumber': page_info,
                'pageType': pageType
               })"
            >
            {{ page_info }}
            </a>

            <a href="javascript:;"
               class="tab_page_a"
               @click="change_current_page({
                'pageNumber': current_page + 1,
                'pageType': pageType
               })"
            >
                下一页
            </a>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    props: {
        pageType: {
            type: String,
            require: true
        }
    },
    computed: {
        ...mapState({
            current_page: function (state) { return state.course[state.course.page_args_type[this.pageType]].current_page },
            total_page: function (state) { return state.course[state.course.page_args_type[this.pageType]].total_page }
        }),
        ...mapGetters({
            showing_page_info: 'course/showing_page_info'
        })

    },

    methods: {
        ...mapActions({
            change_current_page: 'course/change_current_page'
        })
    }
}

</script>
<style type="text/css">
.tab_page_div {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.tab_page_a {
    display: block;
    font-size: 14px;
    color: #565a61;
    background: #fff;
    padding: 6px 12px;
    margin: 0 2px;
}

.tab_page_a:hover, .page_active {
    color: #fff;
    background: #0c9;
}

</style>
