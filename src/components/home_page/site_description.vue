<template>
    <div class="site_description_div">
        <CardPlus class="site_description_card_plus"
                  v-for="(desc_info, index) in site_description"
                  :key="index"
                  :img_url="desc_info['img_url']"
                  :text="desc_info['text']"
        >
        </CardPlus>
    </div>
</template>

<script type="text/javascript">
import CardPlus from '../common_components/cards/card_plus.vue'
export default {
    data () {
        return {
            site_description: [
                {'img_url': 'https://static.shiyanlou.com/img/introduceContainer1.gif',
                'text': '丰富全面的计算机实验课程'},
                {'img_url': 'https://static.shiyanlou.com/img/introduceContainer2.gif',
                'text': '在线编程环境，1秒启动'},
                {'img_url': 'https://static.shiyanlou.com/img/introduceContainer3.gif',
                'text': '每天一个项目课，丰富你的项目经验'},
                {'img_url': 'https://static.shiyanlou.com/img/introduceContainer4.gif',
                'text': '有效学习时间，真实记录你的代码生涯'}]
            }
    },
    components: {
        CardPlus
    }
}

</script>

<style type="text/css">

.site_description_div {
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    padding: 70px;
}

.site_description_card_plus {
    width: 25%;
}

</style>
