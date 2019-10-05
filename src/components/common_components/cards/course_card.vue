<template>
    <div class="course_card_div">
        <div class="course_div">
            <router-link tag="a"
                         class="course_img_a"
                         :to="{ name: 'course', params: {id: data.id} }">
                <div class="course_img_div">
                    <img :src="data.picture_url" class="course_img_img">
                </div>
                <div class="course_body">
                    <div class="course_description_title_div">
                        {{ data.name }}
                    </div>
                    <div class="course_description_div">
                        {{ data.description }}
                    </div>
                    <div class="course_information_div">
                        <div>
                            <i class="fa fa-users"></i>
                            <span class="members_p">{{ data.students_count }}</span>
                        </div>
                        <p class="course_type_p"
                        :class="course_type_class[data.fee_type]"
                        >{{ course_type_name[data.fee_type] }}</p>
                    </div>
                </div>
            </router-link>
            <!-- </a> -->
        </div>
        <!-- </div> -->
    </div>
</template>

<script type="text/javascript">
export default {
    data () {
        return {
            course_type_class: {
                'free': 'free_course_p',
                'member': 'vip_course_p',
                'bootcamp': 'training_course_p',
                '': ''
            },
            course_type_name: {
                'free': '免费',
                'member': '会员',
                'bootcamp': '训练营',
                '': ''
            }
        }
    },
    props: {
        // {  }
        data: {
            type: Object,
            require: true
        }
    }
}
</script>

<style type="text/css" scoped>
.course_card_div {
    min-height: 220px;
    box-sizing: border-box;
}

/**/
.course_div {
    width: 100%;
}

.course_img_div {
    width: 100%;
    height: 150px;
}

.course_img_img {
    width: 100%;
}

.course_img_a {
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 2px 0 #ddd;
}

.course_img_a:hover {
    box-shadow: 0 1px 30px 0 #d2d2d2;
}

/**/
.course_body {
    position: relative;
    background: #fff;
    height: 100px;
    bottom: 0;
    width: 100%;
    transition: bottom .3s;
}

.course_img_a:hover .course_body {
    bottom: 54.5px;
}

.course_img_a:hover .course_description_div {
    height: 54.5px;
}

.course_description_title_div {
    box-sizing: border-box;
    color: #666;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    padding: 20px 10px 0;
}

.course_description_div {
    height: 0;
    bottom: 0;
    padding: 0 10px;
    margin-top: 10px;
    font-size: 13px;
    color: #666;
    position: relative;
    overflow: hidden;
    transition: height .3s;
}

.course_information_div {
    box-sizing: border-box;
    height: 43px;
    color: #9b9da2;
    width: 100%;
    margin-top: 10px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

/*.course_information_div p {
    padding: 4px 0 0 ;
}*/

/* course_type css设计 */
.course_type_p {
    min-height: 23px;
    color: #fff;
    padding: 3px 10px;
    border-radius: 100px;
}

.free_course_p {
    background: #59cf4a;
}

.training_course_p {
    background: #f66e6e;
}

.vip_course_p {
    background: #ffae0f;
}

</style>
