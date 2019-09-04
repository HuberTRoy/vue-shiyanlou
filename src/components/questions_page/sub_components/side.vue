<template>
    <div class="side_items">
        <div class="operation_div">
            <a href="javascript:;" class="operation_button post_button">我要发帖</a>
            <a href="javascript:;" class="operation_button record_button">每日签到</a>
            <a href="javascript:;" class="shop_button">
                <i class="fas fa-gift" style="font-size: 14px"></i> 前往实验豆商城兑换好礼>
            </a>
        </div>
        <RecentlyEvent></RecentlyEvent>
        <RecentlyLouPlus></RecentlyLouPlus>
        <HotPath></HotPath>
        <div class="wechat_pic_div">
            <Card class="wechat_pic"
            :data="{ 'picture_url': 'https://static.shiyanlou.com/img/ShiyanlouQRCode.png'}"
            ></Card>
        </div>
    </div>
</template>
<script type="text/javascript">
import Card from '@/components/common_components/cards/card.vue'
import RecentlyEvent from './side_sub_components/recently_event.vue'
import RecentlyLouPlus from './side_sub_components/recently_lou_plus.vue'
import HotPath from './side_sub_components/hot_path.vue'

import { mapActions } from 'vuex'

export default {
    components: {
        Card,
        RecentlyEvent,
        RecentlyLouPlus,
        HotPath
    },
    methods: {
        ...mapActions({
            get_related_stuff: 'questions/get_related_stuff'
        })
    },
    created: function () {
        this.get_related_stuff()
    }
}

</script>
<style type="text/css">
.wechat_pic_div {
    background: #fff;
    padding: 15px;
    margin-left: 10px;
}

.wechat_pic a {
    border: none !important;
    box-shadow: none !important;
}

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

.record_button {
    border-color: #08bf91;
    background: #fff;
    color: #08bf91;
}

.record_button:hover {
    color: #08bf91;
}

.shop_button {
    color: #0c9;
    font-size: 12px;
    font-weight: 500;
    display: block;
    width: 100%;
    text-align: center;
}

.shop_button:hover {
    color: #0c9;
}
</style>
