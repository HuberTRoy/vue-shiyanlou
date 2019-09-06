<!-- 暂时不做优化,都可抽象为一个
     这里干脆也用统一的样式了，api里有返回next和prev。
 -->
<template>
    <div class="comment_tab_page_div">
        <button class="comment_tab_page_button comment_tab_page_button_prev"
        @click="tab_page(current_page-1)">«上一页</button>
        <button class="comment_tab_page_button comment_tab_page_button_next"
        @click="tab_page(current_page+1)">下一页»</button>
    </div>    
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            current_page: state => state.course.qa_information.page,
            next: state => state.course.qa_information.next
            // prev: state => { 
            //     let p = state.course.course_comment_information.previous
            //     if (p) {
            //         p = p.substr(1).split('&')[0]
            //         p = p.split('=')[1]
            //         p = decodeURIComponent(p)
            //         return p
            //     }
            //     return ''
            // },
            // next: state => {
            //     let n = state.course.course_comment_information.next
            //     if (n) {
            //         n = n.substr(1).split('&')[0]
            //         n = n.split('=')[1]
            //         n = decodeURIComponent(n)
            //         return n
            //     }
            //     return ''
            // }
        })
    },
    methods: {
        ...mapActions({
            // change_cursor: 'path/change_cursor',
            get_questions: 'course/change_qa_information',
            change_qa_args: 'course/change_qa_args'
        }),
        tab_page: function (page) {
            // this.change_cursor(cursor)
            if (page<1) {
                return
            }

            if (!this.next && page > this.current_page) {
                return 
            }

            // this.change_qa_args({
            //     'current_page': page
            // })

            this.get_questions({
                'course_id': this.$route.params.id,
                'page': page
                // 'topic_id': this.$route.params.id,
                // 'topic_type': 'course',
                // 'page_size': 15,
                // 'cursor': cursor
            })
        }
    }
}

</script>
<style type="text/css">
.comment_tab_page_div {
    display: flex;
    justify-content: center;
}

.comment_tab_page_button {
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #08bf91;
    background-color: #fff;
    border: 1px solid #dee2e6;
}

.comment_tab_page_button_next {
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
}

.comment_tab_page_button_prev {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
}

.comment_tab_page_button:hover {
    z-index: 2;
    color: #057659;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
}
</style>
