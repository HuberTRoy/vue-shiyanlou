<template>
    <div class="related_items">
        <Card class="recommend_pic"
        :data="{'picture_url': 'https://static.shiyanlou.com/img/louplus/recommend/rec-louplus.png'}"
        ></Card>
        <RecentlyEvent></RecentlyEvent>
        <RecentlyLouPlus></RecentlyLouPlus>
        <div class="wechat_pic_div">
            <img class="wechat_pic"
            :src="'https://static.shiyanlou.com/img/ShiyanlouQRCode.png'"
            >
            <p>
                关注公众号，手机看教程
            </p>
        </div>
    </div>
</template>
<script type="text/javascript">
import Card from '../../../common_components/cards/card.vue'
import RecentlyEvent from './related_items_sub_components/recently_event.vue'
import RecentlyLouPlus from './related_items_sub_components/recently_lou_plus.vue'

// import HotPath from './related_items_sub_components/hot_path.vue'

export default {
    components: {
        Card,
        RecentlyEvent,
        RecentlyLouPlus,
        // HotPath
    }
}

</script>
<style type="text/css">
.related_items {
    display: flex;
    flex-direction: column;
}
.recommend_pic {
    margin-bottom: 10px;
    margin-right: -15px;
    margin-left: -5px;
}

.wechat_pic_div {
    background: #fff;
    padding: 15px;
    margin-left: 10px;
    text-align: center;
    color: #4c5157;
    font-size: 16px;
}

.wechat_pic {
    width: 183px;
    height: 85%;
}

.wechat_pic a {
    border: none !important;
    box-shadow: none !important;
}

</style>
