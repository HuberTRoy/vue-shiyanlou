<template>
    <router-link tag="a" 
                 class="live_course_card"
                 :to="{ name: 'course', params: { id: data.id} }"
    >
        <div class="live_course_card_layout">
            <img class="course_img" :src="data.picture_url">
            <div class="live_course_card_main_content">
                <div class="course_title_layout">
                    <p class="course_title">{{ data.name }}</p>
                    <p class="course_type_p"
                       :class="course_type_class[data.fee_type]"
                    >
                        {{ course_type_name[data.fee_type] }}
                    </p>
                </div>
                <p class="course_description">{{data.description}}</p>
                <router-link tag="a"
                             class="course_router_link"
                             :to="{ name: 'course', params: { id: data.id} }"
                >
                    <button class="course_router_button">
                        <i class="fas fa-redo-alt"></i>
                        查看回放
                    </button>
                </router-link>
            </div>
        </div>
    </router-link>
</template>
<script type="text/javascript">
export default {
    props: {
        data: {
            type: Object,
            require: true
        }
    },
    data: function () {
        return {
            course_type_class: {
                'free': 'free_course_p',
                'member': 'vip_course_p',
                'bootcamp': 'training_course_p',
                'private': 'private_course_p',
                '': ''
            },
            course_type_name: {
                'free': '免费',
                'member': '会员',
                'bootcamp': '训练营',
                'private': '私有',
                '': ''
            }
        }
    }
}
</script>
<style type="text/css" scoped>
.live_course_card {
    padding: 0 10px;
    margin-bottom: 20px;
    box-shadow: 0 2px 2px 0 #eee;
}

.live_course_card_layout {
    background: #fff;
}

.course_img {
    width: 100%;
    height: 50%;
}

.live_course_card_main_content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: #666;
}

.course_title_layout {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.course_title {
    width: 83.33%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1rem;
    margin-bottom: 0;
}

.course_description {
    display: -webkit-box;
    height: 60px;
    overflow: hidden;
    word-break: break-word;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #666;
    margin-bottom: 0;
}

.course_router_button {
    width: 100%;
    margin-top: 25px;
    border: 1px solid transparent;
    line-height: 1.5;
    border-radius: .25rem;
    padding: .375rem .75rem;
    color: #fff;
    font-size: 16px;
    background: #08bf91;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.course_router_button:hover {
    background: #069a75;
    border-color: #069a75;
}

.course_type_p {
    min-height: 23px;
    color: #fff;
    padding: 3px 10px;
    border-radius: 100px;
    margin-bottom: 0;
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

.private_course_p {
    background: #7f8bc5;
}
</style>
