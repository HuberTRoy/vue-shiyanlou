<template>
    <!--
        Path 中用的Card。
     -->
    <div class="float_card_div">
        <router-link :to="{name: 'coursePath', params: {id: data.path_id}}"
                     tag="a"
                     class="float_card_a"
                     target="_blank">
            <img :src="data.path_img_url" class="float_card_img">
            <div class="float_card_text_div">
                <p class="float_card_text_p"> {{ data.path_name }} </p>
                <p class="float_card_text_p float_card_text_information"> {{ data.path_description }} </p>
            </div>
        </router-link>
    </div>
</template>

<script type="text/javascript">
export default {
    props: {
        data: {
            type: Object,
            require: true
        }
    }
}
</script>

<style type="text/css">
.float_card_div {
    box-sizing: border-box;
    padding-right: 15px;
    padding-left: 15px;
}

.float_card_a {
    transition: bottom .3s;
    display: block;
    width: 100%;
    /*height: 100%;*/
    box-shadow: 0 1px 2px 0 #ddd;
    position: relative;
    bottom: 0;
}

.float_card_a:hover {
    box-shadow: 0 4px 20px 4px #ddd;
    bottom: 10px;
}

.float_card_img {
    height: 130px;
    width: 100%;

}

.float_card_text_div {
    width: 100%;
    background: #fff;

}

.float_card_text_p {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 30px 0 15px;
    font-size: 18px;
    color: #666;
}

.float_card_text_information {
    padding: 0 0 15px;
    font-size: 14px;
    color: #a4a4a4;
}

</style>
