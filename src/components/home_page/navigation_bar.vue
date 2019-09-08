<template>
    <div id="navigation_bar" class="navigation_bar_header">
        <div id="navigation_logo_sign">
            <div id="navigation_logo">
                <a id="navigation_logo_a" href="/">
                    <img src="https://static.shiyanlou.com/img/shiyanlou_logo.svg" />
                </a>
                <span id="logo_text">做实验，学编程</span>
            </div>

            <div id="navigation_sign">
                <ul id="sign_menu">
                    <li class="navigation_li">
                        <a href="#2" id="tab_button">
                            企业版
                        </a>
                    </li>

                    <div class="navigation_bar_unlogged_in_div"
                         v-if="!login_state"
                    >
                        <li class="navigation_li">
                            <a href="#"
                               id="sign_button"
                               @click="change_show_state('on')"
                            >
                                登录
                            </a>
                        </li>
                        <li class="navigation_li">
                            <a href="#"
                               id="register_button"
                               @click="change_show_state('up')"
                               >
                                注册
                            </a>
                        </li>
                    </div>
                    <div class="navigation_bar_logged_div"
                         v-if="login_state"
                    >
                            <li class="navigation_feature_li history_courses_li">
                                <a href="javascript:;" class="navigation_feature_a">
                                    我的课程
                                </a>
                                <HistoryCoursesCard class="history_courses_card"
                                                    :data="studied_info.results"
                                ></HistoryCoursesCard>
                            </li>
                            <li class="navigation_feature_li">
                                <a href="javascript:;"
                                   class="navigation_feature_a bell_a"
                                >
                                    <i class="far fa-bell"></i>
                                </a>
                            </li>
                            <li class="navigation_feature_li avatar_li">
                                <router-link :to="{ name: 'user', params: {id: user_info.id} }"
                                             class="navigation_feature_a navigation_avatar_a"
                                             target="_blank"
                                >
                                    <img class="navigation_avatar_img" :src="user_info.avatar_url"
                                    title="Avatar"
                                    >
                                </router-link>
                                <UserCard class="user_card"
                                          :data="user_info"
                                ></UserCard>
                            </li>
                    </div>
                </ul>
            </div>
        </div>
        <div id="selection_bar">
            <ul id="selection_menu">
                <li id="all_courses_li" class="navigation_li">
                    <router-link to="/courses" tag="a" id="all_courses_button">
                        <i id="all_courses_i" class="fa fa-th"></i>
                        全部课程
                    </router-link>
                </li>
                <li id="trail_li" class="sub_selection_li navigation_li">
                    <router-link to="/path" tag="a" id="trail_button" class="sub_selection_a">
                        路径
                    </router-link>
                </li>
                <li id="lou_puls_li" class="sub_selection_li navigation_li">
                    <a href="#7" id="lou_puls_button" class="sub_selection_a">
                        楼+
                    </a>
                </li>
                <li id="trail_li" class="sub_selection_li navigation_li">
                    <a href="#6" id="VIP_button" class="sub_selection_a">
                        会员
                    </a>
                </li>
                <li id="community_li" class="sub_selection_li navigation_li">
                    <router-link tag="a" to="/questions" id="community_button" class="sub_selection_a">
                        社区
                        <span class="spread"></span>
                    </router-link>
                    <ul id="sub_community_ul">
                        <li class="sub_community_li">
                            <router-link tag="a" to="/questions" class="sub_community_a">讨论</router-link>
                        </li>
                        <li class="sub_community_li">
                            <a href="#10" class="sub_community_a">教程库</a>
                        </li>
                        <li class="sub_community_li">
                            <a href="#11" class="sub_community_a">
                                直播
                            </a>
                        </li>
                        <li class="sub_community_li">
                            <a href="#12" class="sub_community_a">
                                比赛
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div id="search_bar">
                <label id="search_button"><i class="fa fa-search"></i></label>
                <input type="text" name="search" id="search_input" autocomplete="off" placeholder="搜索 课程/问答">
            </div>
        </div>

    </div>
</template>

<script type="text/javascript">
import HistoryCoursesCard from '@/components/common_components/cards/history_courses_card.vue'
import UserCard from '@/components/common_components/cards/user_card.vue'

import { mapState } from 'vuex'

export default {
    components: {
        HistoryCoursesCard,
        UserCard
    },
    computed: {
        ...mapState({
            login_state: state => state.loginState.sign_on,
            user_info: state => state.loginState.user_info,
            studied_info: state => state.loggedInfo.user_studied_courses
        })
    },
    methods: {
        change_show_state: function (onOrUp) {
            this.$store.dispatch('loginState/change_show_state', onOrUp)
        }
    }
}
</script>

<style type="text/css">

/*总导航区域*/
#navigation_bar {
    display: flex;
    flex-wrap: wrap;
    background: #f7f7f7;
    height: 144px;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
}

.navigation_li {
    float: left;
}

/* logo 切换/登陆/注册 区域 */
#navigation_logo_sign {
    display: flex;
    justify-content:space-between;
    align-content: center;
    width: 1170px;
    height: 84px;
}

/* logo */
#navigation_logo {
    display: inline-flex;
    justify-content: flex-start;
}

#navigation_logo_a {
    display: block;
    border: 0;
    padding: 10px 0;
    margin-top: 8px;
    height: 70px;
}

#logo_text {
    display: block;
    font-size: 18px;
    color: #274A59;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
}

/* 登陆注册区域 */
#navigation_sign {
    align-self: center;
}

/* 切换按钮 */
#tab_button {
    border: 1px solid #08bf31;
    color: #08bf91;
    padding: 6px 22px;
    border-radius: 30px;
    margin: 5px 25px auto auto;
    font-size: 16px;
}

/* 登陆按钮 */
#sign_button {
    font-size: 16px;
    color: #3a3a3a;
    padding: 12px 25px;
}

/* 注册按钮 */
#register_button {
    padding: 12px 25px;
    font-size: 16px;
    color: #ffffff;
    background: #08bf91;
}

/* 登陆前后切换的UI */
#sign_menu {
    display: flex;
    align-items: center;
}

.navigation_bar_unlogged_in_div {
    display: flex;
}

.navigation_bar_logged_div {
    display: flex;
    align-items: center;
}

.navigation_feature_li {
    padding: 20px 15px;
}

.navigation_feature_a {
    text-align: center;
    /*padding: 26px 15px;*/
    line-height: 32px;
    color: #3a3a3a;
    font-size: 16px;
    width: 100%;
    height: 100%;
}

.bell_a {
    font-size: 22px;
}

.navigation_avatar_img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

.history_courses_li:hover {
    cursor: pointer;
}

.history_courses_li:hover > .history_courses_card {
    display: flex;
}

.history_courses_li:hover > .navigation_feature_a {
    color: #08bf91;
}

.avatar_li:hover .user_card {
    visibility: visible;
    opacity: 1;
}

/* 选择区域 */
#selection_bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: #fff;
    height: 60px;
}

/* 全部课程按钮 */
#all_courses_li {
    display: flex;
    height: 60px;
    width: 260px;
    background: #08bf91;
    font-size: 16px;
}

#all_courses_i {
    color: #fff;
}

#all_courses_button {
    display: block;
    color: #fff;
    padding: 20px 15px;
    width: 260px;
}

/* 其他选项 包括 路径/社区等 */
.sub_selection_li {
    display: flex;
    height: 60px;
}

.sub_selection_a {
    color: #3a3a3a;
    font-size: 16px;
    padding: 20px 15px;
}

.sub_selection_a:hover {
    color: #08bf91;
}

/* 社区的二级子菜单 */
.sub_community_li {
    width: 100%;
    clear: left;
    font-size: 16px;
    /*padding: 15px 0 15px 15px;*/

}

.sub_community_a {
    display: block;
    color: #3a3a3a;
    width: 90%;
    padding: 15px 0 15px 15px;
}

.sub_community_a:hover {
    color: #08bf91;
}

.sub_community_li:hover {
    background: #f7f7f7;
}

#sub_community_ul {
    display: none;
    position: absolute;
    top: 144px;
    width: 150px;
    background: #fff;
    padding: 0;
    margin: 0;
    box-shadow: 0 15px 16px 0 rgba(0,0,0,.18);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    z-index: 10;
}

#community_li:hover ul{
    display: block;
}

/* 搜索框区域 */
#search_bar {
    align-self: center;
    margin-right: 5px;
    height: 34px;
    width: 232px;
    position: relative;

}

#search_button {
    align-self: center;
    position: absolute;
/*    right: 30px;
    height: 34px;*/
    /*bottom: 10px;*/
    right: 10px;
    top: 5px;
    font-size: 16px;
    color: #3a3a3a;
}

#search_input {
    width: 232px;
    padding: 6px 12px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #555;
    outline: none;
    font-size: 14px;
}

#search_input:focus {
    border: 1px solid #08bf91;
    box-shadow: 0 0 0 1px #21d6a8;
}

</style>
