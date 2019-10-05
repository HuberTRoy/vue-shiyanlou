<template>
    <div class="training_card">
        <div class="training_card_img_div">
            <router-link class="training_card_a"
                         tag="a"
                         :to="{ name: 'course', params: {id: data.id} }"
            >
                <img :src="data.picture_url" class="training_card_img">
            </router-link>
        </div>
        <div class="training_card_text_div">
            <div class="training_card_title_description_div">
                <h4 class="training_card_text_title">
                    {{
                        data.name
                    }}
                </h4>
                <p class="training_card_text_description">
                    {{
                        data.description
                    }}
                </p>
            </div>
            <div class="training_card_text_footer_div">
                <p class="training_card_text_tag">
                    {{
                        data.tags.join(" ")
                    }}
                </p>
                <router-link class="go_to_detail_a"
                             tag="a"
                             target="_blank"
                             :to="{ name: 'course', params: {id: data.id } }"
                >
                    查看详情
                </router-link>
            </div>
        </div>
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
<style type="text/css" scoped>

/* 整个布局为

    img  title
    img  description
    img  tag     gotodetail

 */
.training_card {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
}

/*  img */
.training_card_img_div {
    height: 100%;
    flex-basis: 43%;
}

.training_card_img {
    width: 100%;
}

/* text */
.training_card_text_div {
    flex-basis: 57%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
}

.training_card_text_title {
    font-size: 16px;
    color: #424242;
    font-weight: 400;
    margin-bottom: 5px;
}

.training_card_text_description {
    font-size: 14px;
    color: #666;
    padding: 0 0 10px;
    word-break: break-all;
    margin: 18px 0 0;
}

/* footer */
.go_to_detail_a {
    display: inline-block;
    /*margin: 30px 0 0 10px;*/
    padding: 4px 16px;
    color: #fff;
    background: #ff9717;
    font-size: 21px;
}

.go_to_detail_a:active {
    box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
}

.go_to_detail_a:hover {
    color: #fff;
}

.training_card_text_tag {
    font-size: 14px;
    color: #666;
}

.training_card_text_footer_div {
    display: flex;
    align-self: stretch;
    flex-direction: row;
    justify-content: space-between;
}

</style>
