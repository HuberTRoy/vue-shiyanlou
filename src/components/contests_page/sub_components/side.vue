<template>
    <div class="challenges_side">
        <div class="ended_contests">
            <h4>往期比赛</h4>
            <div class="ended_contests_list">
                <div class="contest" v-for="contest in contests.results"
                                     :key="contest.id"
                >
                    <span class="contest_name">{{ contest.name }}</span>
                    <div class="wrap">
                        <span class="contest_subjust">{{ contest.subject }}</span>
                    </div>
                    <span class="contest_users">{{ contest.users_count }}人参赛</span>
                </div>
            </div>
        </div>
        <div class="contest_ranks">
            <h4 class="contest_rank_title">
                积分榜比赛总榜
            </h4>
            <div class="rank_list">
                <div class="rank" v-for="(rank, index) in contests_rank"
                                  :key="rank.user.id"
                >
                    <img class="avatar" :src="rank.user.avatar_url">
                    <div class="info_layout">
                        <div class="inner_info_layout inner_info_layout_top">
                            <span class="username">{{ rank.user.name }}</span>
                            <span class="level">L{{ rank.user.level }}</span>
                        </div>
                        <div class="inner_info_layout">
                            <span>{{ rank.total_score }}分</span>
                            <span>({{ rank.joined_contest_count }}场)</span>
                        </div>
                    </div>
                    <img :src="rank_img[index]">
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    data: function () {
        return {
            rank_img: ['https://static.shiyanlou.com/frontend/dist/img/93f24b3.png',
                       'https://static.shiyanlou.com/frontend/dist/img/6eb5673.png',
                       'https://static.shiyanlou.com/frontend/dist/img/7239bf0.png',
                       'https://static.shiyanlou.com/frontend/dist/img/875ce67.png',
                       'https://static.shiyanlou.com/frontend/dist/img/73f49ad.png'
            ]
        }
    },
    computed: {
        ...mapState({
            contests: state => state.contests.contests,
            contests_rank: state => state.contests.contests_rank
        })
    }
}

</script>
<style type="text/css" scoped>
.challenges_side {
    width: 25%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
}

.ended_contests {
    display: flex;
    flex-direction: column;
}

.ended_contests_list {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 15px;
}

.contest {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #565a61;
    padding: 12px 0;
}

.wrap {
    display: flex;
    flex-grow: 1;
    margin-left: 15px;
}

.contest_subjust {
    background: #a4a4a4;
    border: 1px solid transparent;
    border-radius: 20px;
    color: #fff;
    padding: 3px 8px;
    font-size: 12px;
}

.contest_ranks {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: #fff;
    margin-top: 10px;
}

.contest_rank_title {
    font-size: 16px;
    color: #666;
    font-weight: 700;
    padding: 0 0 10px;
    border-bottom: 1px solid #eee;
}

.rank {
    padding: 20px 15px;
    font-size: 14px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

.info_layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    width: 50%;
    margin-left: 10px;
    color: #666;
    font-size: 14px;
}

.inner_info_layout {
    display: flex;
}


.inner_info_layout_top {
    margin-bottom: 1rem;
}

.level {
    margin-left: 10px;
    color: #fec42d;
    font-weight: 700;
}
</style>
