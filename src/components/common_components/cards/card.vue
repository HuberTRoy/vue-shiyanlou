<template>
    <!-- 普通 card a 标签 + img  -->
    <div class="normal_card">
        <a tag="a"
                     class="normal_card_a"
                     target="_blank"
                     :href="data.html_url"
        >
                     <!-- :to="{ name: 'course', params: {id: data.course_id} }" -->
            <img :src="data.picture_url" class="normal_card_img">
        </a>
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
.normal_card {
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
}

.normal_card_a {
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 2px 0 #ddd;
}

.normal_card_a:hover{
    box-shadow: 0 1px 30px 0 #d2d2d2;
}

.normal_card_img {
    width: 100%;
}

</style>
