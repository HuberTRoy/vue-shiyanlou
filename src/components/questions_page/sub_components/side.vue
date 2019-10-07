<template>
    <div class="side_items">
        <div class="operation_div">
            <router-link tag="a" 
                         class="operation_button post_button"
                         :to="{ name: 'publish' }"   
            >
                     我要发帖
            </router-link>
            <a href="javascript:;" @click="checkin({'method':'POST'})" 
                                   v-if="!beans"
                                   class="operation_button record_button"
            >每日签到</a>
            <button disable="disable" v-if="beans" class="operation_button already_record_button">今日已签到 <div class="font_size_12">(获得{{beans}}个实验豆)</div></button>
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

import { mapState, mapActions } from 'vuex'

export default {
    components: {
        Card,
        RecentlyEvent,
        RecentlyLouPlus,
        HotPath
    },
    computed: {
        ...mapState({
            beans: state => state.user.beans
        })
    },
    methods: {
        ...mapActions({
            checkin: 'user/checkin'
        })
    }
}

</script>
<style type="text/css" scoped>
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
    transition: color .3s ease-in-out, background .3s ease-in-out;
}

.record_button:hover {
    color: #fff;
    background: #08bf91;
}

.already_record_button {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;
    opacity: .65;
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

.font_size_12 {
    font-size: 12px;
}
</style>
