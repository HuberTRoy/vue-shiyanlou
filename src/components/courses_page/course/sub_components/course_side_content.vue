<template>
    <div class="course_side_content_div">
        <div class="course_base_info_and_feature_div">
            <!-- 
                img
                type
                join in button
                task
                challanges
                hr
                follow
             -->
             <img class="course_info_img" :src="course_info.picture_url">

             <div class="course_info_box">
                 <!-- 
                    训练营的课程内容会显示
                    价格
                    免费 高级会员 
                      打折后的钱 标准会员
                    开通高级会员免费学 链接
                  -->
                 <p v-if="course_info.fee_type !== 'bootcamp'">{{ fee_type_dict[course_info.fee_type] }}</p>
                 <div v-if="course_info.fee_type == 'bootcamp'" class="bootcamp_info_layout">
                    <p class="bootcamp_price">
                        ￥ {{ course_info.real_price }}
                    </p>
                    <div class="member_dict_layout">
                        免费 <img src="https://static.shiyanlou.com/frontend/dist/img/eb8486c.png">
                        <i class="fas fa-angle-down bootcamp_angle"></i>
                        <div class="member_price_card">
                            ￥ {{ course_info.real_price * 0.8 }} <img src="https://static.shiyanlou.com/frontend/dist/img/3ee60d7.png">
                        </div>
                    </div>
                    <div class="bootcamp_member_info">
                        <span>开通高级会员，立享免费学</span>
                        <a href="https://www.shiyanlou.com/vip" target="_blank" class="go_for_purchase">去开通</a>
                    </div>
                 </div>
                 <!-- 这边之后会根据不同的 fee_type 和 userstatus_info 的 status 进行不同的展示，
                      目前已知的:
                      1. 加入会员免费学.
                      2. 训练营的需要额外付费或者开通高级会员.
                      3. 免费的加入课程.
                      4. 已经加入课程后显示继续学习

                      登录和不登录状态下的变化:
                      登录状态下:
                          根据不同的类型:
                             1. 非会员:
                                1. 免费 -> 加入课程
                                2. 会员 -> 加入会员学习
                                3. 训练营 -> 显示购买价格 以及 高级会员免费学。
                             2.
                                会员状态下可学习的应该全都是 加入课程。
                      非登录状态下:
                          1. 免费 -> 原站是 ·立即购买·，这里应该是写错了吧。
                          2. 会员 -> 加入会员学习。
                          3. 训练营 -> 显示购买价格 以及 高级会员免费学。
                  -->
                 <div v-if="sign_on==false">
                     <button class="btn course_side_base_btn join_in_course_button" 
                             v-if="course_info.fee_type==='free'"
                             @click="show_login('on')"
                             >加入课程
                     </button>
                     <a href="https://www.shiyanlou.com/vip" target="_blank" class="btn course_side_base_btn join_member_button" 
                             v-if="course_info.fee_type==='member'"
                             >加入会员免费学
                     </a>
                     <button class="btn course_side_base_btn buy_course_button" 
                             v-if="course_info.fee_type==='bootcamp'"
                             @click="show_login('on')"
                             >立即购买
                     </button>
                </div>
                <div v-else>
                     <button class="btn course_side_base_btn join_in_course_button" 
                             v-if="(course_info.fee_type==='free' || 
                                    (course_info.fee_type==='member' && (user_info.member_type == 'plus' || user_info.member_type == 'premium')) ||
                                    (course_info.fee_type==='bootcamp' && user_info.member_type == 'premium') ) 
                                   && userstatus_info.status!=='active'"
                             @click="join_course()"
                             >加入课程
                     </button>
                     <a href="https://www.shiyanlou.com/vip" target="_blank" class="btn course_side_base_btn join_member_button" 
                             v-if="(course_info.fee_type==='member' && user_info.member_type == null) 
                                   && userstatus_info.status!=='active'"
                             >加入会员免费学
                     </a>
                     <button class="btn course_side_base_btn buy_course_button" 
                             v-if="(course_info.fee_type==='bootcamp' && user_info.member_type != 'premium') 
                                   && userstatus_info.status!=='active'"
                             >立即购买
                             <!-- @click="join_course()" -->
                     </button>                    
                </div>
                 <a :href="'http://www.shiyanlou.com/courses/'+ userstatus_info.course_id +'/learning/?id='+ userstatus_info.last_learned_lab_id" target='_blank'>
                     <button class="btn course_side_base_btn join_in_course_button" 
                             v-if="userstatus_info.status==='active'">
                              继续学习
                     </button>
                 </a>
                 </button>
                 <p class="task_count_p">  &nbsp;{{ course_info.labs_count }} 个在线动手实验</p>
                 <!--  这边用 v-if 判断是否有挑战,后端数据格式还没有确定，暂时不做任何事 -->
                 <!-- <p></p> -->
                 <div class="follow_course_div">
                     <span class="follow_span" 
                           v-if="!userstatus_info.is_followed"
                           @click="_change_follow(true)"
                     > 关注</span>
                     <span class="followed_span" 
                           v-if="userstatus_info.is_followed"
                           @click="_change_follow(false)"
                     >已关注</span>
                 </div>
             </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    data: function () {
        return {
            fee_type_dict: {
                'free': '免费',
                'member': '加入会员免费'
            }
        }
    },
    computed: {
        ...mapState({
            course_info: state => state.course.course_information,
            userstatus_info: state => state.course.course_userstatus[0],
            sign_on: state => state.loginState.sign_on,
            user_info: state => state.loginState.user_info
        })
    },
    methods: {
        ...mapActions({
            change_follow: 'course/change_follow',
            join: 'course/join_course',
            show_login: 'loginState/change_show_state'
        }),

        _change_follow: function (isFollow) {
            let id = this.$route.params.id
            this.change_follow({
                'is_follow': isFollow,
                'id': id
            })
        },
        join_course: function () {
            this.join({
                id: this.$route.params.id
            })
        }
    }
}
</script>
<style type="text/css" scoped>
.course_side_content_div {
    margin-left: 15px;
    width: 315px;
    background: #fff;
}

.course_info_img {
    padding: 5px 5px 0;
    width: 100%;
}

.course_info_box {
    padding: 1rem 1rem 5px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
}

.course_side_base_btn {
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    box-shadow: none;
}

.join_in_course_button {
    color: #fff;
    background-color: #08bf91;
    border-color: #08bf91;
}

.join_in_course_button:hover {
    color: #fff;
    background-color: #069a75;
    border-color: #068e6c;    
}

.join_member_button {
    color: #fff;
    background-color: #ff9c4a;
    border-color: #ff9c4a;
}

.join_member_button:hover {
    color: #fff;
    background-color: #ff8017;
    border-color: #ff8017;
}

.buy_course_button {
    color: #fff;
    background-color: #f66;
    border-color: #f66;
}

.buy_course_button:hover {
    color: #fff;
    background-color: #f33;
    border-color: #ff2626;
}

.task_count_p {
    margin-top: 15px;
    font-size: 14px;
    color: #a4a4a4;
}

.task_count_p:before {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAURJREFUOBFjYBhowAhywIkTJ2L//fvXy8jIyE2kg34A1TVYWlpOBhtw/PjxtywsLPampqZXiDHgzJkzkr9//74iISEhzQTVwEGsZpB6ExOT50Dq5du3b3lgBkDNIZ1iQddy48YN3g8fPgT8////DDBMGIF0MpDaAcRsZmZm24H0P2Q9KC44duyYyvv37xcANb0BBtB1IB0FVHzK3Nx8DzCQDYCBXYmsGcRGMYCfn/8FUOw70BY1YEDxA9nWfHx8W8+ePcsJZKsA8R8gRgEoBmhra3+xsLCIB9p8BoiVgDgPJPbnzx89JiamEqCrOlF0AzkYYQC0/S9Q/CiyQqChJ5D5yGwUFyBLEGIDXcf069evfzAXnAQGYDvQ9tOENILkgeoUgQb8BHrpHdgAYED5ffr0KQYop0WMAcAY+QBU50iMWtqrAQClMXrxPbjrawAAAABJRU5ErkJggg==);
    vertical-align: middle;
}

.follow_course_div {
    margin-top: 50px;
    padding-top: 15px;
    border-top: 1px solid #eee;
    text-align: center;
    color: #a4a4a4;
}

.follow_span:before {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAc9JREFUOBGtVE2rQVEUXVcPZeBzruSjEGIqZehPGvglRlIUSYjI15R8xEi5z9qvc3tc7977Xm/V6e69z9rr7MPeR9MfwD/C5URrPB6Dywk+7Ejz+RzdbldoHo8HiUTCMsVWsN/vI5vNightO0HLK69WK1wuF+RyOVm0GbOCpSArymQy8Hq9stLpNBizgnHl+/2O8/ks63g8Yr/f43A4oFarGfn5fB6j0QjNZhORSATBYBB+v1+Wy/VVm8a2abVamEwmoKjb7UYgEBBSNBpFKpUyBGlMp1Nst1ucTic5/Ha7gWKsvlwuAxRsNBp6u93Wr9cr3V+BOcylBiF1VioV6bPdbvdUjROHOexRaghUOYvFQq/X6/p6vVYh2y+5zGGuglxZOb8RfSdGnSdBBh7ly6mPP4juW3CPlZH7ClMfcrx8Ph80TfvxJ+QeOeS+wiTI3guFQq88k08Oua8wGlttkBQOh5UL9tlgMBC/UChIn9Ihx7FgLBaTJudUcNRUxWyPYrEojwVjy+XSOFgZpgr5AHDs+GRxaqrVKjgxxGazQafTwXA4RDwel4dDCamvjJ5y+O31epLIJyuZTH7fMuzZbCbNzINKpZIRp2ESfNr9g/MJ9WrieGiQzqYAAAAASUVORK5CYII=);
    vertical-align: middle;
}

.followed_span:before {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAapJREFUOBHVlL9LQlEUx895Sjj0D+iaFpUNEc1BEdTSEA0NranPqbGG4k1RBGGD+IP2aIhoaW+NBqFoUBqiINGgaEyfp+995kN99jSX6IKec8/53s+5P44S/cWQaDQjur7YS23uJgJoikzzhpjvye+fYMOoua3R3JJWzjR3LCsyRsXiSje9K1BisUkAlmyIyLaIuJ7KFUgA2DDliIRJ15dbYm0Tu5rE44PIBalWG4YNwY7AruFja+Bjxk8AX8ArwM/DL1Ag8Ii7rVpp9SWRyDXMtPL7HBXANzmTOawfWdP2Aar0CVPLHrDTE+VYQE6nz8jjUS/4qYK/Gsx3pGkznM2+qHUt94MGXkClc8R9PUJz0M0D9trQtwBVENA5QC/hDjREP9gcTjXLqdRbc97ZNn7/VbPAxb9thymtE1gqhRDvtjvVPuFOxZzAarWj0LFYZFQMw7HeEXBUZi4itgHgMazVvN9wH5XLwfZCTiBRfYfM6rK38EBDaNgjvOQ6eb3jgJ4iLhaow2m87RUAeEZf7ZLPd8CJxHtznpPJPOar+Jnu4S/NgO6jOf8//C8DrX88kmxjGQAAAABJRU5ErkJggg==);
    vertical-align: middle;
}

.bootcamp_info_layout {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
}

.member_price_card {
    position: absolute;
    display: none;
    box-shadow: 0 3px 16px 0 rgba(0,0,0,.18);
    padding: 3px 10px;
    background: #fff;
}

.bootcamp_price {
    color: #f66;
    font-weight: 700;
    font-size: 24px;
}

.bootcamp_angle {
    cursor: pointer;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out;
    color: #6c757d;
}

.member_dict_layout {
    margin-bottom: 1rem;
}

.member_dict_layout:hover .bootcamp_angle{
    transform: rotate(180deg);
}

.member_dict_layout:hover .member_price_card {
    display: block;
}

.bootcamp_member_info {
    display: flex;
    justify-content: space-between;
    background: #f9f9f9;
    padding: 4px 8px;
    font-size: 12px;
    margin-bottom: 1rem;
}

.go_for_purchase {
    color: #fd8c51;
}

.go_for_purchase:hover {
    color: #fd8c51;
    text-decoration: underline !important;
}

</style>
