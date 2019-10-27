<template>
    <div class="tab_page_div">
            <a href="javascript:;"
               class="tab_page_a"
               @click="change_current_page(current_page-1)"
            >
                上一页
            </a>
            <!-- 具体的页数有3种显示模式：
                 1. 当前页的前后2个。
                 2. '...' 会在当前页的前后2个没有涉及到third 和 last-third 时出现。
                 3. 最前面的两个和最后面的两个恒出现。

                 为了区分：
                 前面一个...用了'...'，
                 后面一个...用了'... '。
             -->
            <a href="javascript:;" class="tab_page_a"
               v-for="(page_info, page_index) in showing_page_info"
               :key="page_index"
               :class="current_page==page_info ? 'page_active':''"
               v-show="(current_page - 2 <= page_info && page_info <= current_page + 2)
                        || (page_info == 1 || page_info == 2 )
                        || (page_info == all_page || page_info == all_page - 1)
                        || (page_info == '...' && current_page - 2 > 1)
                        || (page_info == '... ' && current_page + 2 < all_page - 1)"
               @click="change_current_page(page_info)"
            >
            {{ page_info }}
            </a>

            <a href="javascript:;"
               class="tab_page_a"
               @click="change_current_page(current_page+1)"
            >
                下一页
            </a>
    </div>
</template>
<script type="text/javascript">
export default {
    props: {
        change_current_page: {
            type: Function,
            require: true
        },
        showing_page_info: {
            type: Array,
            require: true
        },
        current_page: {
            require: true
        },
        all_page: {
            require: true
        }
    }
}
</script>
<style type="text/css" scoped>
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