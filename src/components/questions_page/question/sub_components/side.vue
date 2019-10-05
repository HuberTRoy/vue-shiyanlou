<template>
    <div class="side_items">
        <div class="operation_div">
            <router-link tag="a" 
                         class="operation_button post_button"
                         :to="{ name: 'publish' }"   
            >
                     我要发帖
            </router-link>
        </div>
        <Card class="ad_card"
              :data="{ 'img_url': 'https://static.shiyanlou.com/img/banner-vip.png'}"></Card>
        <RelatedQuestion></RelatedQuestion>
    </div>
</template>
<script type="text/javascript">
import Card from '@/components/common_components/cards/card.vue'
import RelatedQuestion from './side_sub_components/related_question.vue'
export default {
    components: {
        Card,
        RelatedQuestion
    }
}

</script>
<style type="text/css" scoped>
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
