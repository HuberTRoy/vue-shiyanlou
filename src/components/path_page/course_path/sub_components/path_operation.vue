<template>
    <div class="path_operation_div">
        <div class="path_button_div">
            <a href="javascript:;"
               :pathId="path_learning_info.path_id"
               class="join_path_button"
               v-if="!userstatus || !userstatus.is_joined"
               @click="_join_and_delete_path('join')"
               >
                加入路径
            </a>
            <a href="javascript:;"
               :pathId="path_learning_info.path_id"
               class="joined_path_button"
               @mouseover="joined_hover('enter')"
               @mouseout="joined_hover('out')"
               @click="_join_and_delete_path('delete')"
               v-else
               >
                {{ joined_then_exit }}
            </a>           
            <span class="path_button_extra_label">
                加入获得路径课程更新提醒
            </span>
        </div>
        <div class="path_learning_info_div">
            <span class="path_learning_info_span">
                学习人数{{ path_learning_info.students_count }}
            </span>
            <span class="path_learning_info_span">
                课程 {{ path_learning_info.courses_count }}
            </span>
            <span class="path_learning_info_span">
                预计学习 {{ path_learning_info.estimated_study_hours }} 小时
            </span>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    data: function () {
        return {
            joined_then_exit: '已加入'
        }
    },
    computed: {
        ...mapState({
            path_learning_info: state => state.path.course_path_information,
            userstatus: state => state.path.course_path_userstatus[0]
        })
    },
    methods: {
        ...mapActions({
            join_and_delete_path: 'path/join_and_delete_path'
        }),
        _join_and_delete_path: function (type) {
            if (type=='join') {
                this.join_and_delete_path({
                    method: 'POST',
                    id: this.$route.params.id
                })
            }else{
                this.join_and_delete_path({
                    method: 'DELETE',
                    id: this.$route.params.id
                })                
            }
        },
        joined_hover: function (type) {
            if (type=='enter') {
                this.joined_then_exit = '退出'
            } else {
                this.joined_then_exit = '已加入'
            }
        }
    }
}

</script>
<style type="text/css">
.path_operation_div {
    height: 100px;
    font-size: 18px;
    padding: 30px 15px 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    box-shadow: 0 1px 3px 0 #c2c2c2;
    background: #fff;
    margin-bottom: 10px;
}

.path_button_div {
    display: flex;
    align-items: center;
}

.join_path_button {
    display: block;
    padding: 7px 12px;
    background: #ff9717;
    box-shadow: 1px 3px rgba(0,0,0,.2);
    border: none;
    width: 210px;
    font-size: 16px;
    text-align: center;
    color: #fff;
}

.join_path_button:hover {
    color: #fff;
}

.joined_path_button {
    display: block;
    padding: 7px 12px;
    background: #08bf91;
    /*box-shadow: 1px 3px rgba(0,0,0,.2);*/
    border: none;
    width: 210px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.joined_path_button:hover {
    color: #fff;
    background: #c9302c;
}

.path_button_extra_label {
    color: #787878;
    font-size: 16px;
    margin-left: 12px;
}

.path_learning_info_span {
    font-size: 16px;
    color: #666;
    margin: 0 15px;
}

</style>
