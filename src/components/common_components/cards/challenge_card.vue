<template>
    <div class="challenge_card">
        <!-- 
            上下两部分
         -->
         <div class="challenge_card_top">
             <div class="challenge_card_top_left">
                 <img src="https://static.shiyanlou.com/frontend/dist/img/3dc2259.png">
                 <span class="challenge_card_title">{{ data.name }}</span>
                 <span class="challenge_card_tag">{{ data.tags[0] }}</span>
             </div>
             <div class="challenge_card_top_right">
                 <button class="button look_up_challenge_button">查看题目</button>
                 <button class="button start_challenge_button">开始挑战</button>
             </div>
         </div>
         <div class="challenge_card_bottom">
             <div class="challenge_card_bottom_left">
                 <span>难度：{{ data.specific_lab.level }} </span>
                 <span>分数：{{ data.specific_lab.score }} </span>
                 <span>通过率：{{ data.specific_lab.statistics.pass_rate }} % </span>
             </div>
             <div class="challenge_card_bottom_right">
                 <span>{{ data.specific_lab.statistics.challengers_count }} 人挑战</span>
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
.challenge_card {
    width: 100%;
    border: 1px solid #eee;
    background: #fff;
    padding: 18px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border-radius: 5px;
}

.challenge_card_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    margin-bottom: 20px;
}

.challenge_card_top_left {
    display: flex;
    align-items: center;
}

.challenge_card_title {
    font-size: 15px;
    color: #555;
    margin-left: 10px;
}

.challenge_card_tag {
    background: #eee;
    border: 1px solid transparent;
    border-radius: 20px;
    margin-left: 5px;
    padding: 3px 10px;
    font-size: 12px;
    color: #a4a4a4;
    background-color: #eee;
}

.button {
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    padding: 2px 10px;
    font-size: 14px;
    font-weight: 100;
    border: 1px solid transparent;
}

.look_up_challenge_button {
    margin-right: 5px;
    border: 1px solid #ccc;
    color: #333;
    background-color: #fff;
}

.look_up_challenge_button:hover {
    background-color: #e6e6e6;
    border-color: #adadad;
}

.start_challenge_button {
    background-color: #0c9;
    color: #fff;
    border-color: #0c9;
}

.start_challenge_button:hover {
    background-color: #009973;
    border-color: #008f6b;
}

.challenge_card_bottom {
    display: flex;
    justify-content: space-between;
}

.challenge_card_bottom_left {
    display: flex;
    align-items: center;
    padding-left: 8px;
    color: #666;
    font-size: 12px;
}

.challenge_card_bottom_left span {
    margin-right: 15px;
}

.challenge_card_bottom_right {
    padding-right: 8px;
    color: #666;
    font-size: 12px;
}
</style>
