
<template>
    <div class="search_result_tab_page_div">
        <button class="search_result_tab_page_button search_result_tab_page_button_prev"
        @click="tab_page('p')">«上一页</button>
        <button class="search_result_tab_page_button search_result_tab_page_button_next"
        @click="tab_page('n')">下一页»</button>
    </div>    
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            nav: state => state.search.nav,
            prev: function (state) { 
                let p = state.search.search_result.previous
                if (p) {

                    p = this.translate_query(p.split('?')[1])
                    return {'page': p.page ? p.page : 1, 'type': p.type ? p.type : this.nav}
                }
                return ''
            },
            next: function (state) {
                let n = state.search.search_result.next
                if (n) {
                    n = this.translate_query(n.split('?')[1])
                    return {'page': n.page ? n.page : 1, 'type': n.type ? n.type : this.nav}
                }
                return ''
            }
        })
    },
    methods: {
        ...mapActions({
            get_search: 'search/change_search_result'
        }),
        translate_query: function (queryString) {
            // x=1&y=2
            // to {x:1,y:2}
            let q = {}
            for (let i of queryString.split('&')) {
                let temp = i.split('=')
                q[temp[0]] = temp[1]
            }
            return q

        },
        tab_page: function (types) {
            if (types=='p') {
                if (!this.prev) {
                    return
                }

                this.get_search({
                    'type': this.prev.type,
                    'page': this.prev.page,
                    'search': this.$route.query.keywords                  
                })
            } else if (types=='n') {
                if (!this.next) {
                    return
                }

                this.get_search({
                    'type': this.next.type,
                    'page': this.next.page,
                    'search': this.$route.query.keywords                  
                })   
            }
            let t = document.getElementsByClassName('search_page_main_search_div')[0]
            t.scrollIntoView(true)

        }
    }
}

</script>
<style type="text/css" scoped>
.search_result_tab_page_div {
    display: flex;
    justify-content: center;
}

.search_result_tab_page_button {
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #08bf91;
    background-color: #fff;
    border: 1px solid #dee2e6;
}

.search_result_tab_page_button_next {
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
}

.search_result_tab_page_button_prev {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
}

.search_result_tab_page_button:hover {
    z-index: 2;
    color: #057659;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
}
</style>
