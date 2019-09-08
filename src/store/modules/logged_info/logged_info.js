import api from '@/api/logged_info/logged_info.js'

const state = {
	user_studied_courses: {

	} 
}

const mutations = {
	change_user_studied_courses (state, data) {
		state.user_studied_courses = data
	} 
}

const actions = {
	change_user_studied_courses (context) {
		api.get_studied_courses().then((response) => {
			context.commit('change_user_studied_courses', response.data)
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}