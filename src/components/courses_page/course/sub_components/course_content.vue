<template>
    <div class="course_content">
        <div class="course_nav_div">
            <ul class="course_nav_ul">
                <li class="course_nav_li">
                    课程内容
                </li>
            </ul>
        </div>
        <div class="lab_contents">
            <div class="lab_item"
                 v-for="(course_process, index) in course_content.course_process"
                 :key="course_process.course_category">
                <div class="lab_header">
                    <div class="lab_text">
                        <div class="lab_icon lab_text_item">
                            <!-- <i class="fa fa-check-circle lab_icon_i"></i> -->
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAipJREFUSA3tlcFrE0EUxpONNaGQpYdAEXopNHoIBjaGJEKhLRREPVkR9NKTkn+gDQiKF9H2UMhJClXosXgQSqEXqfSWbAiktOSiIAhepAjCYkOaZtPfW51QQjZtQgoFHRi+mbdvvu+9N29Yj+f/uGgV8KqAcrncNOvFRqMRBS8pew945PV6d30+XyaRSGzJeUckn8+HbdveZf9D07T3CB30QK6OBFjch2MErmgqlfriRIzAXT4EMI5j/K68e8VSqbRQqVT2//JmNSEivSHBfggIj2EYvwBL8Toi8uE8R9ci1FpjdtUYp4rQdY8LhUJEZWqa5ksa5Y3s+ZYpFotX1Dc37CgCyQsOZpkDQlAuly+TxRNq/Un2jPFarbZ9mpCrCNE+h2Sefr9Dv+8Io2VZM4LBYPCDYCgUegB8FSH8h8XWbriKEPEjpklb59RB9mnmaiQSORRbOByuktUytqtsbyi/VnS9QL/ff7tarW4T5RrleFiv10fp+wkySysS7ucW9jUCmaP9N5W9FV0zicVi3xCa5ICB0D3Ipoj4YzKZ/KxIEF1B4BkCS8rWDl0zEWcRIotr8Xi8hoAE9O4kia7rY6p0J+2t644i4iwCgtTeBmQ2x1kExNm1XE2mPiyUyE/hog31PnB6KLG8q0Gmw6vKtYHhFXVf5wG+5TJ/9yoGR4BGmeW8lFl4//xPZEE73qRbXrO8jqPzwsXe7eDuhHyPQJ/Sic031i3PP+x/DBPn3QC5lw/kAAAAAElFTkSuQmCC" />
                        </div>
                        <div class="lab_category lab_text_item">
                            {{ course_process.course_category }}
                        </div>

                        <div class="lab_name lab_text_item">
                            {{ course_process.course_name }}
                        </div>
                    </div>
<!--                     <div class="lab_control" v-if="index == course_content.current_course_process">
                        <a href="javascript:;"
                           class="lab_control_button look_up_experiment_steps"
                        >
                            查看实验步骤
                        </a>
                        <a href="javascript:;"
                           class="lab_control_button start_experiment"
                        >
                            开始实验
                        </a>
                    </div> -->
                </div>
                <div class="lab_description">
                    <div class="inner_lab_description"
                         v-if="course_process.course_description !== ''"
                    >
                        {{ course_process.course_description }}
                    </div>
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
            course_content: state => state.course.course_information
        })
    }
}
</script>
<style type="text/css">
.course_content {
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

.course_nav_a {
    display: block;
    padding: 0 0 4px;
    margin: 0 48px 0 0;
    font-size: 16px;
    color: #4c5157;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
}

.active_course_nav_a, .course_nav_a:hover {
    border-bottom: 1px solid #0c9;
}

/* lab 显示区域的设置 */
.lab_contents {
    display: flex;
    flex-direction: column;
}

.lab_item {
    border: 1px solid #eee;
    margin: 12px 0;
}

/* lab header设置，包括 icon category name */
.lab_header {
    background: #f7f7f7;
    border-bottom: 1px solid #eee;
    padding-right: 10px;
    height: 55px;
    display: flex;
    justify-content: space-between;
}

/*  */
.lab_text {
    display: flex;
    align-items: center;
}

.lab_text_item {
    margin: 0 12px;
    padding: 14px 0;
    font-size: 16px;
}

.lab_icon_i {
    font-size: 24px;
    color: #aeaeae;
}

.lab_category {
    color: #999;
}

/* */
.lab_description {
    padding: 0 20px;
}

.inner_lab_description {
    margin: 10px 0;
    overflow: hidden;
    font-size: 14px;
    color: #a4a4a4;
}

/* */
.lab_control {
    margin: 10px 0 0;
    display: flex;
    align-items: flex-start;
}

.lab_control_button {
    padding: 6px 20px;
    border-radius: 4px;
    font-size: 16px;
}

.look_up_experiment_steps {
    border: 1px solid transparent;
    color: #999;
    margin-right: 5px;
}

.look_up_experiment_steps:hover {
    border: 1px solid #ccc;
    color: #666;
}

.start_experiment {
    color: #fff;
    background: #08bf91;
    border-color: #08bf91;
}

.start_experiment:hover {
    color: #fff;
    background: #21d6a8;
    border-color: #21d6a8;
}

</style>
