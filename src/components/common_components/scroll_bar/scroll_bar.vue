<template>
    <div class="scroll_bar">
        <div class="scroll_bar_div">
            <div class="scroll_navigation_div">

                <a class="scroll_navigation_logo_a" href="/">
                    <img src="https://static.shiyanlou.com/img/shiyanlou_logo.svg" class="scroll_navigation_img" />
                </a>
                <ul class="scroll_selection_menu">
                    <li id="courses_li" class="scroll_sub_selection_li scroll_navigation_li">
                        <router-link :to="{name: 'courses'}" tag="a" id="courses_button" class="scroll_sub_selection_a">
                            课程
                            <span class="spread"></span>
                        </router-link>
                        <ul class="scroll_sub_ul">
                            <li class="scroll_sub_li">
                                <router-link :to="{ name: 'courses', query: {fee: 'free'}}" tag="a" class="scroll_sub_a">
                                    免费课
                                </router-link>
                            </li>
                            <li class="scroll_sub_li">
                                <router-link :to="{ name: 'courses', query: {fee: 'member'}}" tag="a" class="scroll_sub_a">
                                    会员课
                                </router-link>
                            </li>
                            <li class="scroll_sub_li">
                                <a href="#11" class="scroll_sub_a">
                                训练营
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li id="trail_li" class="scroll_sub_selection_li scroll_navigation_li">
                        <router-link :to="{name: 'path'}" tag="a" id="trail_button" class="scroll_sub_selection_a">
                            路径
                        </router-link>
                    </li>
                    <li id="lou_puls_li" class="scroll_sub_selection_li scroll_navigation_li">
                        <a href="https://www.shiyanlou.com/louplus/" id="lou_puls_button" class="scroll_sub_selection_a">
                            楼+
                        </a>
                    </li>
                    <li id="trail_li" class="scroll_sub_selection_li scroll_navigation_li">
                        <a href="https://www.shiyanlou.com/vip" id="VIP_button" class="scroll_sub_selection_a">
                            会员
                        </a>
                    </li>
                    <li id="community_li" class="scroll_sub_selection_li scroll_navigation_li">
                        <router-link tag="a" 
                                    class="scroll_sub_selection_a"
                                    id="community_button" 
                                    :to="{ name: 'questions' }" 
                        >
                            社区
                            <span class="spread"></span>
                        </router-link>

                        <ul class="scroll_sub_ul">
                            <li class="scroll_sub_li">
                                <router-link tag="a" 
                                             class="scroll_sub_a"
                                             :to="{ name: 'questions' }" 
                                >
                                    讨论
                                </router-link>
                            </li>
                            <li class="scroll_sub_li">
                                <router-link tag="a"
                                             class="scroll_sub_a"
                                             :to="{name: 'library'}"
                                >
                                         教程库
                                </router-link>
                            </li>
                            <li class="scroll_sub_li">
                                <router-link tag="a" 
                                             class="scroll_sub_a"
                                             :to="{ name: 'live' }"

                                >
                                    直播
                                </router-link>
                            </li>
                            <li class="scroll_sub_li">
                                <a href="#12" class="scroll_sub_a">
                                    比赛
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="feature_div">
                <div class="feature_sign_div">
                    <ul class="feature_ul">
                        <li class="feature_li">
                            <a href="" id="tab_version_button" class="feature_a">
                                企业版
                            </a>
                        </li>
                        <li class="feature_li">
                            <div id="_search_bar">
                                <input type="text" name="search" id="_search_input" autocomplete="off" placeholder="搜索 课程/问答" v-model="search_text" @keyup.enter="search()">
                                <label id="_search_button"
                                       @click="search()"
                                >
                                    <i class="fa fa-search"></i>
                                </label>
                            </div>
                        </li>

                        <div class="unlogged_in_div"
                             v-if="login_state === false"
                        >
                            <li class="feature_li">
                                <a href="javascript:;" class="feature_a"
                                   @click="change_show_state('on')"
                                >
                                    登录
                                </a>

                            </li>
                            <li class="feature_li" id="register_li">
                                <a href="javascript:;" id="_register_button" class="feature_a"
                                   @click="change_show_state('up')"
                                >
                                    注册
                                </a>
                            </li>
                        </div>
                        <div class="logged_div"
                             v-if="login_state"
                        >
                            <li class="feature_li history_courses_li">
                                <a href="javascript:;" class="history_courses_a feature_a">
                                    我的课程
                                </a>
                                <HistoryCoursesCard class="scroll_bar_history_courses_card"
                                :data="studied_info.results"
                                ></HistoryCoursesCard>

                            </li>
                            <li class="feature_li">
                                <a href="javascript:;"
                                   class="feature_a bell_a"
                                >
                                    <i class="far fa-bell"></i>
                                </a>
                            </li>
                            <li class="feature_li avatar_li">
                                <router-link tag="a"
                                             :to="{ name: 'user', params: { id : user_info.id } }"
                                   class="feature_a avatar_a"
                                >
                                    <img class="avatar_img" :src="user_info.avatar_url"
                                    title="Avatar"
                                    >
                                </router-link>
                                <UserCard class="scroll_bar_user_card"
                                :data="user_info"
                                ></UserCard>
                            </li>
                        </div>
                    </ul>
                </div>
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
    data: function () {
        return {
            search_text: ''
        }
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
        },
        search: function () {
            if (this.search_text) {
                this.$router.push({name: 'search', query: {keywords: this.search_text}})
            }
        }
    }
}

</script>
<style type="text/css" scoped>
.scroll_bar {
    /*position: fixed;*/
    top: 0;
    height: 73px;
    background: #fff;
    width: 100%;
    z-index: 10;
}

.scroll_bar_div {
    display: flex;
    width: 1170px;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;

}

/* 导航区域 */
.scroll_navigation_div {
    display: flex;
}

.scroll_navigation_logo_a {
    display: block;
    padding: 10px 0;
    border: 0;
    height: 70px;
}

.scroll_navigation_img {
    display: block;
}

.scroll_selection_menu {
    display: flex;
}

.scroll_sub_selection_li {
    padding: 20px 15px;
}

/* 导航区域子菜单 */

.scroll_sub_selection_a {
    color: #3a3a3a;
    font-size: 16px;
    /*padding: 20px 15px;*/
    line-height: 1.9;
}

.scroll_sub_selection_a:hover {
    color: #08bf91;
}

.scroll_sub_ul {
    display: none;
    position: absolute;
    top: 73px;
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

#courses_li:hover ul{
    display: block;
}

/* 子按钮社区和课程部分的 ↓ 箭头 span */

.spread {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid \9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}

.scroll_sub_a {
    display: block;
    color: #3a3a3a;
    width: 90%;
    padding: 15px 0 15px 15px;
    font-size: 16px;
}

.scroll_sub_a:hover {
    color: #08bf91;
}

.scroll_sub_li:hover {
    background: #f7f7f7;
}

/* 右边功能区 */
.feature_div {
    margin-right: 15px;
}

.feature_ul {
    display: flex;
}

.feature_li {
    padding: 20px 15px;
}

.feature_a {
    text-align: center;
    /*padding: 26px 15px;*/
    line-height: 32px;
    color: #3a3a3a;
    font-size: 16px;
}

.feature_a:hover {
    color: #08bf91;
}

/* 登陆与未登录的 UI */

.unlogged_in_div {
    display: flex;
}

.logged_div {
    display: flex;
}

.bell_a {
    font-size: 22px;
}

.bell_a:hover {
    color: #08bf91;
}

.avatar_li {
    padding-top: 10px;
}

.avatar_a {
    display: block;
}

.avatar_img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

.history_courses_li:hover .scroll_bar_history_courses_card {
    display: flex;
}

.avatar_li {
    position: relative;
}

.avatar_li:hover .scroll_bar_user_card {
    visibility: visible;
    opacity: 1;
}

/* */

#tab_version_button {
    font-size: 15px;
    color: #a4a4a4;
}

#tab_version_button:hover {
    color: #08bf91;
}

#register_li {
    background: #08bf91;
}

#_register_button {
    color: #fff;
}

#_register_button {

}

/* 搜索框部分 */
#_search_bar {
    position: relative;
    margin-left: -10px;
    margin-top: -2px;
    margin-right: -5px;
}

#_search_input {
    font-size: 14px;
    box-sizing: border-box;
    width: 200px;
    height: 34px;
    padding: 6px 12px;
    border-radius: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #555;
    outline: none;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
}

#_search_input:focus {
    border: 1px solid #08bf91;
    box-shadow: 0 0 0 1px #21d6a8;
}

#_search_button {
    position: absolute;
    top: 5px;
    right: 10px;
    margin-right: 4px;
    font-size: 16px;
    color: #3a3a3a;
}

</style>
