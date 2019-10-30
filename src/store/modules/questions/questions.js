import QuestionListApi from '../../../api/questions/questions.js'
import RelatedStuffApi from '../../../api/related_stuff/related_stuff.js'
import router from '@/router'

const state = {
  current_nav_bar_tag: '全部',
  all_nav_bar_tag: {'全部': 'all', 
    '课程问答': 'course', 
    '交流讨论': 'discussion',
    '技术分享': 'sharing',
    '站内公告': 'notice'},
  current_sort_category: '最新',
  all_sort_category: {'最新': 'newest', 
    '最热': 'hottest', 
    '未回复': 'unanswered'},
  current_page: 1,
  total_page: 1,
  question_list_information: {},
  related_stuff_information: {
    'recently_event': [],
    'recently_louplus': []
  }
}

const getters = {
  router_args: state => {
    return {
      type: state.current_nav_bar_tag,
      sort: state.current_sort_category,
      page: state.current_page,
      page_size: 15
    }
  },
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
  change_current_nav_bar_tag (state, tag) {
    state.current_nav_bar_tag = tag
  },

  change_current_sort_category (state, category) {
    state.current_sort_category = category
  },

  change_question_list_information (state, qLInformation) {
    state.question_list_information = qLInformation
    state.total_page = Math.ceil(qLInformation.count / 15)
  },

  change_current_page (state, page) {
    state.current_page = page
  },

  change_related_stuff (state, stuffArgs) {
    // stuffArgs
    // index
    // data 
    state.related_stuff_information[stuffArgs.index] = stuffArgs.data
  }
}

const actions = {
  router_to ({ getters }) {
    router.push({
      path: '/questions',
      query: getters.router_args
    })
  },

  change_current_nav_bar_tag (context, tag) {
    context.commit('change_current_nav_bar_tag', tag)
    context.dispatch('router_to')
  },

  change_current_sort_category (context, category) {
    context.commit('change_current_sort_category', category)
    context.dispatch('router_to')
  },

  change_question_list_information (context, questionListArgs) {
    QuestionListApi.get_question_list(questionListArgs).then((questionsList) => {
      context.commit('change_question_list_information', questionsList.data)
    })
  },

  change_current_page (context, page) {
    // 去尾空格，非重要。
    if (page === '...' || page === '... ') {
      return
    }

    context.commit('change_current_page', page)
    context.dispatch('router_to')
  },

  get_related_stuff (context) {
    RelatedStuffApi.get_recently_activities().then((response) => {
      context.commit('change_related_stuff', {'index': 'recently_event', 'data': response.data})
    })
    RelatedStuffApi.get_recently_louplus().then((response) => {
      context.commit('change_related_stuff', {'index': 'recently_louplus', 'data': response.data})
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
