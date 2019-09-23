<!-- 
    又一个 tab_page 是时候抽象一波了。
 -->
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
            prev: function (state) { 
                let p = state.reports.labreports_information.previous
                if (p) {
                    p = this.translate_query(p.split('?')[1])
                    p = decodeURIComponent(p.cursor)
                    return p
                }
                return ''
            },
            next: function (state) {
                let n = state.reports.labreports_information.next
                if (n) {
                    n = this.translate_query(n.split('?')[1])
                    n = decodeURIComponent(n.cursor)
                    return n
                }
                return ''
            },
        })
    },
    methods: {
        ...mapActions({
            get_reports: 'reports/change_labreports_information' 
        }),
        tab_page: function (cursor) {
            // this.change_cursor(cursor)
            this.get_reports({
                'page_size': 16,
                'cursor': cursor,
                ...this.$route.query
            })
        },
        translate_query: function (queryString) {
            // x=1&y=2
            // to {x:1,y:2}
            let q = {}
            for (let i of queryString.split('&')) {
                let temp = i.split('=')
                q[temp[0]] = temp[1]
            }
            return q

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
