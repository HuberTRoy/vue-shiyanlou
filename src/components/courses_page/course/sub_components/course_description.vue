<template>
    <div class="course_long_description_div">
        <!-- 
            
         -->
        <ul class="course_nav_ul">
            <li class="course_nav_li">
                课程介绍
            </li>
        </ul>

        <div class="main_description_div">
            <VueMarkDown v-if="description.long_description" :source="description.long_description"></VueMarkDown>
        </div>     
    </div>
</template>
<script type="text/javascript">
import VueMarkDown from 'vue-markdown'
import { mapState } from 'vuex'

export default {
    components: {
        VueMarkDown
    },
    computed: {
        ...mapState({
            description: state => state.course.course_information
        })
    }
}

</script>
<style type="text/css">
.course_long_description_div {
    background: #fff;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    padding: 30px;
}

.course_nav_ul {
    margin-bottom: 0px !important;
    border: none;
    border-bottom: 1px solid #eee;
    display: flex;
}

.course_nav_li {
    color: #565656;
    font-weight: 500;
    font-size: 20px;
    padding-bottom: 5px;
}


.main_description_div h2 {
    margin-top: 25px;
    font-size: 16px;
    line-height: normal;   
}

.main_description_div ul {
    list-style-type: disc;
    background: #fbfbf8;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 40px;
    color: #817f74;
    line-height: 2;
}
</style>
