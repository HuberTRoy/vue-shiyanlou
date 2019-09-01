<template>
    <div class="lou_plus_card">
        <router-link :to="{ name: 'louPlus', params: {'name': data.lou_plus_name} }"
                     class="lou_plus_card_a"
                     target="_blank">
            <img :src="data.img_src" class="lou_plus_card_img">

            <div class="lou_plus_card_text_div">
                <p class="lou_plus_description">
                    {{ data.description }}
                </p>
                <p class="lou_plus_last_time">
                    {{ data.last_time }}
                </p>
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

.lou_plus_card_a {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: auto;
    box-shadow: 0 1px 2px 0 #ddd;
    background: #fff;
    /*position: relative;*/
}

.lou_plus_card_a:hover {
    box-shadow: 0 1px 30px 0 #d2d2d2;
}

.lou_plus_card_text_div {
    padding: 18px 10px 15px;
}

.lou_plus_card_img {
    height: 90px;
    width: 100%;
}

.lou_plus_card_text_div p {
    margin: 0 0 10px;
}

.lou_plus_description {
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #565656;
}

.lou_plus_last_time {
    margin: 0;
    font-size: 16px;
    color: #a4a4a4;
}

</style>
