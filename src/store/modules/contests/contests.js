import ContestsApi from '@/api/contests/contests.js'

const state = {
    challenges_tags: [],
    challenges: [],
    challenges_userstatus: [],
    contests: [],
    contests_rank: [],
    contest_rank: []
}

const mutations = {
    change_challenges_tags (state, tags) {
        state.challenges_tags = tags
    },
    change_challenges (state, challenges) {
        state.challenges = challenges
    },
    change_challenges_userstatus (state, userstatus) {
        state.challenges_userstatus = userstatus
    },
    change_contests (state, contests) {
        state.contests = contests
    },
    change_contests_rank (state, rank) {
        state.contests_rank = rank
    },
    change_contest_rank (state, rank) {
        state.contest_rank = rank
    }
}

const actions = {
    async change_challenges_tags (context) {
        let res = await ContestsApi.get_challenges_tags()
        context.commit('change_challenges_tags', res.data)
    },
    async change_challenges (context, args) {
        let res = await ContestsApi.get_challenges(args)
        context.commit('change_challenges', res.data)
    },
    async change_challenges_userstatus (context, args) {
        let res = await ContestsApi.get_challenges_userstatus(args)
        context.commit('change_challenges_userstatus', res.data)
    },
    async change_contests (context, args) {
        let res = await ContestsApi.get_contests(args)
        context.commit('change_contests', res.data)
    },
    async change_contests_rank (context, args) {
        let res = await ContestsApi.get_contests_rank(args)
        context.commit('change_contests_rank', res.data)
    },
    async change_contest_rank (context, args) {
        let res = await ContestsApi.get_contest_rank(args)
        context.commit('change_contest_rank', res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}