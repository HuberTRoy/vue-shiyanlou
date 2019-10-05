<template>
    <div class="learning_card">
        <div class="_learning_card card_one">
            <img src="https://static.shiyanlou.com/img/user/icon_level.png">
            <span class="learning_card_text_span current_lab_level_span">
                当前楼层
                <span class="current_lab_level_span2">
                    {{ user_info.level }}楼<img src="https://static.shiyanlou.com/img/user-floor-icon.png">
                </span>
            </span>
        </div>

        <div class="_learning_card card_two">
            <img src="https://static.shiyanlou.com/img/user/icon_lab.png">
            <span class="learning_card_text_span count_experimental_span">
                累计实验 {{ user_info.study_labs_count }} 次
            </span>
        </div>

        <div class="_learning_card card_three">
            <img src="https://static.shiyanlou.com/img/user/icon_time.png">
            <span class="learning_card_text_span study_time_span">

                有效学习时间 {{ user_info.study_minutes }} 分钟
            </span>
        </div>

        <div class="_learning_card card_four">
            <img src="https://static.shiyanlou.com/img/user/icon_bean.png">
            <span class="learning_card_text_span lab_bean_span">
                剩余 {{ user_info.beans }} 颗实验豆
            </span>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            user_info: state => state.user.user_info
        })
    }
}

</script>
<style type="text/css" scoped>
.learning_card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #fff;
    padding: 25px 15px;
    margin-top: 10px;
}

.learning_card_text_span {
    font-size: 16px;
    color: #666;
}

._learning_card {
    margin: 10px 0;
}
</style>
