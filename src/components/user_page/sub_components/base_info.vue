<template>
    <div class="user_base_info">
        <!--
            avatar nickname level edit   medal
            avatar join_date          meaal
         -->
        <div class="base_info_left">
            <img :src="user_info.avatar_url" class="big_avatar">
            <div class="base_info">
                <div class="nickname_level">
                    <span class="big_nickname">{{ user_info.name }}</span>
                    <span class="big_level">L{{ user_info.level }}</span>
                    <a href="javascript:;" class="edit_base_info_button">
                        <i class="edit_icon fas fa-edit"></i>
                    </a>
                </div>
                <div class="join_date">
                    <span class="join_date">{{ user_info.join_date }} 加入实验楼</span>
                </div>
            </div>
        </div>

        <div class="user_medal">
            <span class="medal_tip">
                还没有获得勋章
            </span>
            <a class="get_medal_button" href="javascript:;">
                获得勋章
            </a>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            user_info: state => state.user.user_info,
            user_id: state => state.user.user_id
        })
    }
}

</script>
<style type="text/css">
.user_base_info {
    display: flex;
    justify-content: space-between;
    background: #fff;
    border: 1px solid #eee;
    padding: 20px;
}

.base_info {
    display: flex;
    flex-direction: column;
    margin: auto 20px;
}

.base_info_left {
    display: flex;
}

.big_avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

/* */

.nickname_level {
    display: flex;
    align-items: center;
}

.big_nickname {
    font-weight: 700;
    font-size: 22px;
    color: #a4a4a4;
}

.big_level {
    font-size: 22px;
    margin-left: 10px;
    color: #fec42d;
    font-weight: 700;
}

.join_date {
    margin-top: 18px;
    font-size: 14px;
    color: #666;
    letter-spacing: .5px;
    line-height: 20px;
}

.edit_base_info_button {
    font-size: 18px;
    color: #666;
    margin-left: 10px;
}

.edit_icon {
    font-weight: 100;
}

/* */
.user_medal {
    width: 270px;
    height: 110px;
    text-align: center;
    border-radius: 5px;
    border: 1px dashed #eee;
    display: flex;
    flex-direction: column;
}

.medal_tip {
    line-height: 35px;
    display: inline-block;
    font-size: 14px;
    padding: 30px 0 16px;
    color: #a4a4a4;
}

</style>
