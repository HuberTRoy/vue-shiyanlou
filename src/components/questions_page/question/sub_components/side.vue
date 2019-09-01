<template>
    <div class="side_items">
        <div class="operation_div">
            <a href="javascript:;" class="operation_button post_button">我要发帖</a>
        </div>
        <Card class="ad_card"
              :data="{ 'img_url': 'https://static.shiyanlou.com/img/banner-vip.png'}"></Card>
        <RelatedQuestion></RelatedQuestion>
    </div>
</template>
<script type="text/javascript">
import Card from '@/components/common_components/cards/card.vue'
import RelatedQuestion from './side_sub_components/related_question.vue'

import { mapActions } from 'vuex'

export default {
    components: {
        Card,
        RelatedQuestion
    },

    methods: {
        ...mapActions({
            get_related_question: 'question/change_related_question_information'
        })
    },

    created: function () {
        this.get_related_question()
    }

}

</script>
<style type="text/css">
.operation_div {
    margin-left: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
}

.operation_button {
    display: block;
    border: 1px solid #eee;
    padding: 14px 0;
    width: 100%;
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
}

.post_button {
    border: none;
    background: #0c9;
    color: #fff;
}

.post_button:hover {
    background: rgba(0,204,153,.7);
    color: #fff;
}

.ad_card {
    margin-left: -5px;
    margin-right: -15px;
    margin-bottom: 10px;
}

</style>
