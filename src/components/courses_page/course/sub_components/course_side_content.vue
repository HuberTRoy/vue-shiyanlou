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
                 <p>{{ course_info.fee_type }}</p>

                 <!-- 这边之后会根据不同的 fee_type 和 userstatus_info 的 status 进行不同的展示，
                      目前已知的:
                      1. 加入会员免费学.
                      2. 训练营的需要额外付费或者开通高级会员.
                      3. 免费的加入课程.
                      4. 已经加入课程后显示继续学习
                  -->
                 <button class="btn join_in_course_button" 
                         v-if="course_info.fee_type==='free' && userstatus_info.status==='not_joined'"
                         @click="join_course()"
                         >加入课程
                 </button>
                 <a :href="'http://www.shiyanlou.com/courses/'+ userstatus_info.course_id +'/learning/?id='+ userstatus_info.last_learned_lab_id" target='_blank'>
                     <button class="btn join_in_course_button" 
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
    computed: {
        ...mapState({
            course_info: state => state.course.course_information,
            userstatus_info: state => state.course.course_userstatus[0]
        })
    },
    methods: {
        ...mapActions({
            change_follow: 'course/change_follow',
            join: 'course/join_course'
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
<style type="text/css">
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

.join_in_course_button {
    color: #fff;
    background-color: #08bf91;
    border-color: #08bf91;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    box-shadow: none;
}

.join_in_course_button:hover {
    color: #fff;
    background-color: #069a75;
    border-color: #068e6c;    
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
</style>
