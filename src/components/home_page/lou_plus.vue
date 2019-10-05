<template>
    <div id="lou_plus_div">
        <Title class="lou_plus_course_title"
               :title="'楼+ 实战课程 |'"
               :description="'定期开班，导师助教全程辅导，最快最优成长'"
        >
        </Title>
        <div class="item_card">
            <Card class="lou_plus_card"
                  v-for="(data, index) in index_louplus "
                  v-if="index<4"
                  :key="index"
                  :data="data"
            >

            </Card>

        </div>
    </div>
</template>

<script type="text/javascript">
import Title from './sub_components/title.vue'
import Card from '../common_components/cards/lou_plus_card.vue'

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            index_louplus: state => state.home.home_content.index_louplus
        })
    },
    components: {
      Title,
      Card
    }
}
</script>

<style type="text/css" scoped>
#lou_plus_div {
    display: flex;
    flex-direction: column;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
    background: #f7f7f7;
    margin-bottom: 30px;
}

.lou_plus_course_title {
    margin-bottom: 30px;
}

.item_card {
    display: flex;
    justify-content: space-around;
    padding: 0 15px;
}

.lou_plus_card {
    width: 25%;
    box-sizing: border-box;
    padding-right: 19px;
}

</style>
