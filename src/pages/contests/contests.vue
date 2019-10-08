<template>
    <div class="contests_div">
        <ContestsPage></ContestsPage>
    </div>    
</template>
<script type="text/javascript">
import ContestsPage from '@/components/contests_page/contests.vue'

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        ContestsPage
    },
    computed: {
        ...mapState({
            sign_on: state => state.loginState.sign_on,
            contests: state => state.contests.contests
        })
    },
    methods: {
        ...mapActions({
            get_challenges_tags: 'contests/change_challenges_tags',
            get_challenges: 'contests/change_challenges',
            get_challenges_userstatus: 'contests/change_challenges_userstatus',
            get_contests: 'contests/change_contests',
            get_contests_rank: 'contests/change_contests_rank',
            get_contest_rank: 'contests/change_contest_rank'
        })
    },
    watch: {
        contests: async function () {
            // 获取最新一期contests的排行。
            await this.get_contest_rank({
                contest_name: this.contests.results[0].slug,
                page_size: 5
            })
        }
    },
    mounted: async function () {
        // 首次加载自上而下加载顺序
        await this.get_contests({
            page_size: 6,
            status: 'finished',
            sort: 'newest'
        })
        await this.get_challenges_tags()
        await this.get_challenges({
            page_size: 15
        })
        await this.get_contests_rank({
            page_size: 15,
            limit: 5
        })
    }
}
</script>
<style type="text/css">
    
</style>
