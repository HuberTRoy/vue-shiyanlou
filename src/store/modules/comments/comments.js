import CommentsApi from '@/api/comments/comments.js'

const state = {
    comment_information: {},
    // 这个是旧有的，与API参数不符。
    comment_args: {
        page_size: 15,
        current_page: 1
    },
    reply_id: 0,
    text_placeholder: '请输入想说的话...',
    comments_userstatus: {}
}

const mutations = {
    change_comment_information (state, info) {
        state.comment_information = info
    },
    change_reply_id (state, id) {
        state.reply_id = state
    },
    change_text_placeholder (state, text) {
        state.text_placeholder = text
    },
    change_comments_userstatus (state, userstatus) {
        state.comments_userstatus = userstatus
    }
}

const actions = {
    async change_comment_information (context, args) {
        let res = await CommentsApi.get_comments(args)
        context.commit('change_comment_information', res.data)
    },
    async change_comments_userstatus (context, args) {
        let res = await CommentsApi.get_comments_userstatus(args)
            let newData = {}
            let comment_ids = args['comment_ids'].split(',')
            for (var i = comment_ids.length - 1; i >= 0; i--) {
                newData[comment_ids[i]] = res.data[i]
            }

        context.commit('change_comments_userstatus', newData)        
    },
    async post_comment (context, args) {
        let res = await CommentsApi.post_comment(args)
        context.commit('add_comment', res.data)
        
    },
    async delete_comment (context, args) {
        // 这边先不做任何后续动作。
        let res = await CommentsApi.delete_comment(args)

    },
    change_reply_id (context, id) {
        context.commit('change_reply_id', id)
    },
    change_text_placeholder (context, text) {
        context.commit('change_text_placeholder', text)
    },
    async delete (context, args) {
        let res = await CommentsApi.get_comments_userstatus(args)
        context.commit('change_comments_userstatus', args)         
    }


}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}