<template>
    <div class="course_description_div">
        <!-- 
            
         -->
        <ul class="course_nav_ul">
            <li class="course_nav_li">
                课程介绍
            </li>
        </ul>

        <div class="main_description_div">
            <h2 class="main_description_header main_description_target">实验任务</h2>
            <ul class="main_description_target_list">
                <li class="main_description_target_list_item">
                    测试文本1
                </li>
                <li class="main_description_target_list_item">
                    测试文本2
                </li>
            </ul>
            <h2 class="main_description_header">先学知识</h2>
            <p>测试文本2</p>
            <h2 class="main_description_header">课程难度</h2>
            <p>测试文本3</p>
            <h2 class="main_description_header">面向用户</h2>
            <p>测试文本4</p>
        </div>     
    </div>
</template>
<script type="text/javascript">

</script>
<style type="text/css">
.course_description_div {
    background: #fff;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    padding: 30px;
}

.course_nav_ul {
    margin-bottom: 10px;
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

.main_description_header {
    margin-top: 25px;
    font-size: 16px;
    line-height: normal;   
}

.main_description_target_list {
    list-style-type: disc;
    background: #fbfbf8;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 40px;
    color: #817f74;
    line-height: 2;
}
</style>
