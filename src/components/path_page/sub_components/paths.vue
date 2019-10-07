<template>
    <div class="paths_card_div">
            <FloatCard class="path_card"
                       v-for="path_info in path_information.results"
                       :key="path_info.path_id"
                       :data="path_info"
            >
            </FloatCard>
    </div>
</template>
<script type="text/javascript">
import FloatCard from '@/components/common_components/cards/float_card.vue'
import { mapState } from 'vuex'

export default {
    components: {
        FloatCard
    },

    computed: {
        ...mapState({
            path_information: state => state.path.path_information
        })
    }
}
</script>
<style type="text/css" scoped>
.paths_card_div {
    display: flex;
    flex-wrap: wrap;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
}

.path_card {
    width: 25%;
}
</style>
