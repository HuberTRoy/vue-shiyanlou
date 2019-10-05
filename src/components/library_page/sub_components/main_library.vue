<template>
    <div class="libary_main_libray_div">
        <div v-for="library in _library_content.blocks"
             :key="library.topic"
        >
            <div class="libary_main_libray_content_header">
                <h5>{{library.topic}}</h5>
                <router-link class="more_library_a"
                             tag="a"
                             :to="{ name: 'library', query: {'topic': library.topic} }"
                >更多</router-link>
            </div>
            <div class="libary_main_libray_content_cards">
                <div class="libray_main_library_content_card"
                     v-for="md in library.books"
                     :key="md.name"
                >
                    <LibraryCard :data="md"
                    >
                    </LibraryCard>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import LibraryCard from '@/components/common_components/cards/library_card.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        LibraryCard
    },
    computed: {
        ...mapState({
            index_content: state => state.library.index_content,
            library_content: state => state.library.library_content
        }),
        _library_content: function () {
            if (!this.$route.query.topic) {
                return this.index_content
            }
            // {
            //    prev: '',
            //    next: '',
            //    results: {}
            // } to
            // {
            //    prev: '',
            //    next: '',
            //    blocks: [{'topic': route.query.topic, books: results}]   
            // }
            // 好像没有上一页下一页的需求...
            let c = this.library_content
            let newC = {'previous': c.previous, 'next': c.next, blocks:[{
                'topic': this.$route.query.topic,
                'books': c.results
            }]}
            return newC
        }
    },
    methods: {
        ...mapActions({
            change_library_content: 'library/change_library_content'
        })
    },
    watch: {
        '$route': function (newQuery) {
            this.change_library_content(this.$route.query)
        }
    }

}
</script>
<style type="text/css" scoped>
.libary_main_libray_div {
    width: 74%;
    margin-left: 15px;
    background: #fff;
    border: 1px solid #eee;
    padding: 15px;
}

.libary_main_libray_content_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.libary_main_libray_content_cards {
    display: flex;
    flex-wrap: wrap;
}

.libray_main_library_content_card {
    width: 33%;
    padding: 0 15px;
}

.more_library_a {
    font-size: 1rem;
    color: #666;
}


</style>