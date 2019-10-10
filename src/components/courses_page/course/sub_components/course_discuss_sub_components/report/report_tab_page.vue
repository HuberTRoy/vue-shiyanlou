<!-- 暂时不做优化,都可抽象为一个 -->
<template>
    <div class="comment_tab_page_div">
        <button class="comment_tab_page_button comment_tab_page_button_prev"
        @click="tab_page(prev)">«上一页</button>
        <button class="comment_tab_page_button comment_tab_page_button_next"
        @click="tab_page(next)">下一页»</button>
    </div>    
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            prev: state => { 
                let p = state.course.report_information.previous
                if (p) {
                    p = p.substr(1).split('&')[1]
                    p = p.split('=')[1]
                    p = decodeURIComponent(p)
                    return p
                }
                return ''
            },
            next: state => {
                let n = state.course.report_information.next
                if (n) {
                    n = n.substr(1).split('&')[1]
                    n = n.split('=')[1]
                    n = decodeURIComponent(n)
                    return n
                }
                return ''
            },
            lab_id: state => state.course.course_report_args.lab_id
        })
    },
    methods: {
        ...mapActions({
            get_reports: 'course/change_report_information' 
        }),
        tab_page: function (cursor) {
            this.get_reports({
                'course_id': this.$route.params.id,
                'lab_id': this.lab_id,
                'page_size': 16,
                'cursor': cursor
            })
        }
    }
}

</script>
<style type="text/css" scoped>
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
