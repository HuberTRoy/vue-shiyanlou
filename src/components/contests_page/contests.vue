<template>
    <div class="contests_page_div">
        <div class="contests_page_header">
            <div class="rank_div_layout">
                <div class="rank_div">
                    <div class="rank_item" v-if="contests.results">
                        {{ contests.results[0].name }}排行榜
                    </div>
                    <div class="rank_item" 
                         v-for="(rank, index) in contest_rank.results"
                         :key="rank.user.id"
                    >
                        <img class="avatar" :src="rank.user.avatar_url">
                        <span class="username">{{ rank.user.name }}</span>
                        <span class="level">L{{ rank.user.level }}</span>
                        <img :src="`https://static.shiyanlou.com/img/contest-${rank_img[index]}.png`">
                    </div>
                </div>
            </div>
        </div>
        <div class="contest_main_page">
            <MainContests></MainContests>
            <Side></Side>
        </div>
    </div>
</template>
<script type="text/javascript">
import MainContests from './sub_components/main_contests.vue'
import Side from './sub_components/side.vue'

import { mapState } from 'vuex'

export default {
    components: {
        MainContests,
        Side
    },
    data: function () {
        return {
            rank_img: ['first', 'second', 'third', 'four', 'five']
        }
    },
    computed: {
        ...mapState({
            contest_rank: state => state.contests.contest_rank,
            contests: state => state.contests.contests
        })
    }
}
</script>
<style type="text/css" scoped>
.contests_page_header {
    margin-top: -20px;
    background: url("https://static.shiyanlou.com/img/contest/banner.png") no-repeat;
    background-position: 50%;
    background-size: cover;
    height: 340px;
}

.rank_div_layout {
    width: 1170px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: flex-end;
}

.rank_div {
    margin-top: 10px;
    margin-bottom: 20px;
    transform: translateX(-20px);
    width: 24.33%;
    height: 90%;
    background: #fff;
    padding: 0 10px;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
}

.rank_item {
    cursor: pointer;
    border: 1px solid transparent;
    border-top-color: #eee;
    border-bottom-color: #eee;
    padding: 8px 2px;
    font-size: 16px;
    color: #666;
    height: 16.666%;
    display: flex;
    align-items: center;
}

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
}

.level {
    color: #ffc500;
    font-size: 14px;
    margin-left: 5px;
    font-weight: 700;
    flex-grow: 1;
}

.username {
    font-size: 14px;
}

.contest_main_page {
    width: 1170px;
    margin: auto;
    padding: 30px;
    display: flex;
}

</style>
