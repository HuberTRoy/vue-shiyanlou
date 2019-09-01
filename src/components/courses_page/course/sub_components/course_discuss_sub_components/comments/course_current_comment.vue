<template>
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
            <CommentsItem v-for="item in comments.items"
                          :key="item.comment_id"
                          :avatar_url="item.author.avatar"
                          :author_name="item.author.name"
                          :author_level="item.author.level"
                          :comment_text="item.content"
                          :created_time="item.created_time"
                          :source_lab="item.source_lab"
            ></CommentsItem>
            <TabPage
            :pageType="'comment'"
            ></TabPage>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

import CommentsItem from './comments_item.vue'
import TabPage from '../tab_page.vue'

export default {
    computed: {
        ...mapState({
            comments: state => state.course.course_comment_information,
            page_size: state => state.course.course_comment_args.page_size,
            current_page: state => state.course.course_comment_args.current_page,
            course_id: function () { return this.$route.params.id }
        })
    },

    methods: {
        ...mapActions({
            get_comments: 'course/change_comment_information'
        })
    },
    components: {
        CommentsItem,
        TabPage
    },

    created: function () {
        this.get_comments({
            'course_id': this.course_id,
            'page': this.current_page,
            'page_size': this.page_size
        })
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
