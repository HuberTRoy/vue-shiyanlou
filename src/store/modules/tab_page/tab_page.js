const state = {
    total_page: 0,
    current_page: 0
}

const getters = {
    showing_page_info: state => {
                let p = []
                for (var i = 1; i <= state.total_page; i++) {
                    p.push(i)
                    if (i === 2) {
                        p.push('...')
                    } else if (i === state.total_page - 2) {
                        p.push('... ')
                    }
                }
                return p
            }
}

const mutations = {
    change_total_page (state, totalPage) {
        state.total_page = totalPage
    },

    change_current_page (state, cuurentPage) {
        state.currnet_page = currentPage
    }
}


const actions = {
    change_total_page (context, totalPage) {
        context.commit('change_total_page', totalPage)
    },

    change_current_page (context, currentPage) {
        
    }
}

export default {
    namespaced: true,
    state,
    getters
}
