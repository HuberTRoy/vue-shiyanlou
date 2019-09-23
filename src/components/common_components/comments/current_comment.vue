<template>
    <!-- 出现在很多地方了
         抽象成一个公共组件。
         创建一个新的仓库来存储评论数据。
         好像没有清晰的思路实现:
         1. 通过 props 来指定应该请求哪个链接。
         2. 每个各自的 store 里各自实现相关 change_comment_information 和 userstatus。
         3. 相关的还有回复id。
         否决 2. 改成统一在 comment中实现, 通过参数控制。
     -->
    <div class="comments_div">
        <div class="comments_nav_div">
            <ul class="comments_nav_ul">
                <li class="comments_nav_li">
                    <a class="comments_nav_a">
                        最新评论
                    </a>
                </li>
            </ul>
        </div>
        <div class="current_comments">
            <CommentsItem v-for="item in comments.results"
                          :key="item.id"
                          :data="item"
            ></CommentsItem>
            <TabPage
            :_name="_name"
            ></TabPage>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

import CommentsItem from './comments_item.vue'
import TabPage from './comments_tab_page.vue'

export default {
    props: {
        _name: {
            type: String,
            require: true
        }
    },
    computed: {
        ...mapState({
            comments: state => state.comments.comment_information,
            page_size: state => state.comments.comment_args.page_size,
            current_page: state => state.comments.comment_args.current_page,
            id: function () { return this.$route.params.id },
            isLogin: state => state.loginState.sign_on
        })
    },

    methods: {
        ...mapActions({
            get_comments: 'comments/change_comment_information',
            change_comments_userstatus: 'comments/change_comments_userstatus'
        })
    },
    components: {
        CommentsItem,
        TabPage
    },

    created: function () {
        this.get_comments({
            'topic_id': this.id,
            'page_size': this.page_size,
            'topic_type': this._name
        })
    },

    watch: {
        comments: function (newComments, oldComments) {
            if (!this.isLogin) {
                return
            }
            let comment_ids = []
            for (let i of newComments.results) {
                comment_ids.push(i.id)
            }
            this.change_comments_userstatus({'comment_ids': comment_ids.join(',')})
        }
    }
}
</script>
<style type="text/css">
.comments_nav_ul {
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.comments_nav_li {

}

.comments_nav_a {
    display: block;
    padding: 0 0 4px;
    margin: 0 48px 0 0;
    font-size: 16px;
    color: #4c5157;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
}
</style>
