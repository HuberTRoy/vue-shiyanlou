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
             <img class="course_info_img" :src="course_info.course_img">

             <div class="course_info_box">
                 <p>{{ course_info.course_type }}</p>
                 <button class="btn join_in_course_button">加入课程</button>
                 <p class="task_count_p">  &nbsp;{{ course_info.course_process.length }} 个在线动手实验</p>
                 <!--  这边用 v-if 判断是否有挑战,后端数据格式还没有确定，暂时不做任何事 -->
                 <!-- <p></p> -->
                 <div class="follow_course_div">
                     <span class="follow_span"> 关注</span>
                 </div>
             </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            course_info: state => state.course.course_information
        })
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
</style>
