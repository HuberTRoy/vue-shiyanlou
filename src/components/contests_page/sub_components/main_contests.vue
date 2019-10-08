<template>
    <div class="main_contests">
        <div class="contests">
            <!-- 站位，目前没有内容 -->
            <h4>开放中</h4>
            <span class="contests_description">
                （立即加入，排行榜实时更新）
            </span>
        </div>
        <div class="challenges">
            <div class="challenges_headers">
                <h4>热门挑战题</h4>
                <div class="challenges_tags">
                    <div class="challenges_tag" 
                         v-for="tag in tags"
                         :key="tag.name"
                    >
                        {{ tag.name }}
                    </div>
                </div>
                <span class="challenges_tag">更多</span>
            </div>
            <div class="challenges_content">
                <ChallengeCard v-for="(challenge, index) in challenges.results"
                               :key="index"
                               :data="challenge"
                >
                </ChallengeCard>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import ChallengeCard from '@/components/common_components/cards/challenge_card.vue'

import { mapState } from 'vuex'

export default {
    components: {
        ChallengeCard
    },
    computed: {
        ...mapState({
            tags: state => state.contests.challenges_tags.slice(0,5),
            challenges: state => state.contests.challenges
        })
    }
}

</script>
<style type="text/css">
.main_contests {
    width: 75%;
}

.contests {
    display: flex;
    align-items: center;
    color: #666;
    font-weight: 300;
    margin-bottom: 30px;
}

.contests_description {
    font-size: 16px;
    color: #a4a4a4;
}

.challenges {
    display: flex;
    flex-direction: column;
}

.challenges_headers {
    display: flex;
    color: #666;
    font-weight: 300;
    align-items: center;
}

.challenges_tags {
    display: flex;
    flex-grow: 1;
    padding-left: 3px;
}

.challenges_tag {
    padding: 3px 8px;
    color: #a4a4a4;
    font-size: 16px;
    cursor: pointer;
}

.challenges_tag:hover {
    background: #08bf91;
    border-radius: 14px;
    color: #fff;
}

.challenges_content {
    background: #fff;
    border: 1px solid #eee;
    padding: 30px;
}
</style>
