<template>
    <div class="question_reply_tab_page_div">
        <button class="question_reply_tab_page_button question_reply_tab_page_button_prev"
        @click="tab_page(prev)">«上一页</button>
        <button class="question_reply_tab_page_button question_reply_tab_page_button_next"@click="tab_page(next)">下一页»</button>
    </div>    
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            prev: state => { 
                let p = state.question.question_reply_information.previous
                if (p) {
                    p = p.substr(1).split('=')[1]
                    p = decodeURIComponent(p)
                    return p
                }
                return ''
            },
            next: state => {
                let n = state.question.question_reply_information.next
                if (n) {
                    n = n.substr(1).split('=')[1]
                    n = decodeURIComponent(n)
                    console.log(n, 333)
                    return n
                }
                return ''
            }
        })
    },
    methods: {
        ...mapActions({
            change_cursor: 'question/change_cursor',
            get_reply: 'question/change_question_reply_information' 
        }),
        tab_page: function (cursor) {
            this.change_cursor(cursor)
            this.get_reply()
        }
    }
}

</script>
<style type="text/css">
.question_reply_tab_page_div {
    display: flex;
    justify-content: center;
}

.question_reply_tab_page_button {
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #08bf91;
    background-color: #fff;
    border: 1px solid #dee2e6;
}

.question_reply_tab_page_button_next {
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
}

.question_reply_tab_page_button_prev {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
}

.question_reply_tab_page_button:hover {
    z-index: 2;
    color: #057659;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
}
</style>
