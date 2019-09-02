import HomeApi from '@/api/home/home.js'

const state = {
    home_content: {
        'index_categories': [{'name':'',
                              'recommend_courses':[],
                              'tags': []}],
        'index_banner': [{'picture_url': '',
                          'background_color': '',
                          'html_url': ''}],
        'index_louplus': [{'html_url': '',
                           'open_time': '',
                           'picture_url': '',
                           'title': ''}],
        'classfication_courses': [{},{},{},{},{}],
        'bootcamps': [],
        'path': []
    }
}

const mutations = {
    change_home_content (state, datas) {
        // {homeIndex: 'index_categories',
        //  data: data}
        let homeIndex = datas.home_index
        let homeContent = datas.data
        state.home_content[homeIndex] = homeContent
    }
}

const actions = {
    // async get_and_change_home_content (context) {
    //     let content = await HomeApi.get_home_content()
    //     context.commit('change_home_content', content)
    // }
    get_and_change_home_content (context) {
        // index categories
        HomeApi.get_index_categories().then((categories)=>{
            context.commit('change_home_content', {'home_index':'index_categories', 'data': categories.data})
        })

        // index banner
        HomeApi.get_index_banner().then((banner) => {
            context.commit('change_home_content', {'home_index': 'index_banner', 'data': banner.data})
        })

        // index louplus
        HomeApi.get_index_louplus().then((louplus) => {
            context.commit('change_home_content', {'home_index': 'index_louplus', 'data': louplus.data})
        })

        // index classfication courses
        HomeApi.get_classfication_courses().then((classficationCourses) => {
            // process index 1:
            // [0,1,2,3,4,5,6,7] to [[0,1,2,3], [4,5,6,7]]
            let newData = []
            let tempList = []
            for (let [index, course] of classficationCourses.data[1].courses.entries()) {

                tempList.push(course)
                if ( (index+1) % 4 === 0 ) {
                    newData.push(tempList)
                    tempList = []

                }
            }
            classficationCourses.data[1].courses = newData


            context.commit('change_home_content', {'home_index': 'classfication_courses', 'data': classficationCourses.data})
        })

        //index bootcamps
        HomeApi.get_index_bootcamps().then((bootcamps)=>{
            context.commit('change_home_content', {'home_index': 'bootcamps', 'data': bootcamps.data})
        })

        // paths
        HomeApi.get_paths().then((paths) => {
            context.commit('change_home_content', {'home_index': 'paths', 'data': paths.data})
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
