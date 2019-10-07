<template>
    <div class="live_page_div">
        <LivePage></LivePage>
    </div>
</template>
<script type="text/javascript">
import LivePage from '@/components/live_page/live.vue'

import { mapActions } from 'vuex'

export default {
    components: {
        LivePage
    },
    methods: {
        ...mapActions({
            change_live_courses: 'live/change_live_courses'
        })
    },
    mounted: async function () {
        // 在同一个函数里的 await 也不是并行的，先这样做吧。
        await this.change_live_courses({
            status: 'ended',
            page_size: 100
        })
        await this.change_live_courses({
            status: 'not_ended',
            page_size: 100
        })
    }
}
</script>
<style type="text/css">
    
</style>
