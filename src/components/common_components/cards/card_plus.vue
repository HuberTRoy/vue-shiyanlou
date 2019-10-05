<template>
    <!-- 普通 card 升级版 a 标签 + img + p-->
    <div class="normal_card_plus">
        <a :href="a_url" class="normal_card_plus_a">
            <img :src="img_url" class="normal_card_plus_img">
        </a>
        <p class="normal_card_plus_p">
            {{ text }}
        </p>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: {
            a_url: {
                type: String,
                require: false
            },
            img_url: {
                type: String,
                require: true
            },
            text: {
                type: String,
                require: true
            }
        }
    }
</script>

<style type="text/css" scoped>
.normal_card_plus {
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    text-align: center;
}

.normal_card_plus_img {
    /*width: 100%;*/
    height: auto;
    margin-bottom: 10px;
}

.normal_card_plus_p {
    color: #666;
    font-size: 16px;
    margin: 0 auto;
}

</style>
