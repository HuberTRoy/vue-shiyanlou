<template>
    <div class="history_courses_card_div">
        <ul class="history_courses_card_ul">
            <li class="history_courses_card_li history_courses_card_title">
                <i class="far fa-clock"></i>已学课程
            </li>
            <li class="history_courses_card_li"
                v-for="history in data"
                :key="history.course_id"
            >
                <a :href="history.course_id"
                    class="history_courses_card_a"
                >
                    {{ history.course_title }}
                </a>
            </li>
            <li class="detail_history_courses_button_li">
                <router-link to="#" tag="p" class="detail_history_courses_button_p">
                    查看更多
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
export default {
    props: {
        data: {
            type: Array,
            require: true
        }
    }
}
</script>
<style type="text/css">
.history_courses_card_div {
    display: none;
}

.history_courses_card_ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 250px;
    top: 70px;
    padding: 0;
    margin: 0;
    background: #fff;
    list-style: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 15px 16px 0 rgba(0,0,0,.18);
    z-index: 2;
}

.history_courses_card_li {
    padding: 8px 15px;
    font-size: 14px;
    color: #a4a4a4;
    text-align: left;
}

.history_courses_card_a {
    color: black;
    font-size: 14px;
}

.history_courses_card_a:hover {
    color: #08bf91;
}

.detail_history_courses_button_p {
    padding: 5px 10px;
    border: 1px solid #eee;
    border-radius: 20px;
    width: 100px;
    text-align: center;
    color: #3a3a3a;
    margin: 10px auto;
}

.detail_history_courses_button_p:hover {
    color: #08bf91;
}
</style>
