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
                let p = state.path.comment_information.previous
                if (p) {
                    p = p.substr(1).split('&')[0]
                    p = p.split('=')[1]
                    p = decodeURIComponent(p)
                    return p
                }
                return ''
            },
            next: state => {
                let n = state.path.comment_information.next
                if (n) {
                    n = n.substr(1).split('&')[0]
                    n = n.split('=')[1]
                    n = decodeURIComponent(n)
                    return n
                }
                return ''
            }
        })
    },
    methods: {
        ...mapActions({
            change_cursor: 'path/change_cursor',
            get_comments: 'path/change_comment_information' 
        }),
        tab_page: function (cursor) {
            this.change_cursor(cursor)
            this.get_comments({
                'topic_id': this.$route.params.id,
                'topic_type': 'path',
                'page_size': 15,
                'cursor': cursor
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
