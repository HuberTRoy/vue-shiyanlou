<template>
    <!-- 
        头像:
        名字:
        我的状态:
        职位/学校
     -->
    <div class="main_profile_base_info_div">
        <div class="main_profile_base_info_layout_div main_profile_base_info_avatar">
            <label class="main_profile_base_info_label">头像: </label>
            <label for="new_upload_avatar">
                <img class="main_profile_base_info_avatar_img" :src="user_info.avatar_url">
            </label>
            <input type="file" id="new_upload_avatar" @change="upload_avatar($event)">
        </div>
        <div class="main_profile_base_info_layout_div main_profile_base_info_name">
            <label class="main_profile_base_info_label">昵称: </label>
            <input type="text" class="form-control" v-model="nickname">
        </div>
        <div class="main_profile_base_info_layout_div main_profile_base_info_state">
            <label class="main_profile_base_info_label">我的状态: </label>
            <input type="radio" name="school" id="school_radio" value="school" class="main_profile_state_input" v-model="state">
            <label class="main_profile_state_label"
                   :class="[state=='school' ? 'main_profile_state_label_checked' : '']"
                   for="school_radio">
                <span>在上学</span>
            </label>
            <input type="radio" name="work" value="work" id="work_radio" class="main_profile_state_input" v-model="state">
            <label class="main_profile_state_label"
                   :class="[state=='work' ? 'main_profile_state_label_checked' : '']"
                   for="work_radio">
                <span>在工作</span>
            </label>
        </div>
        <div class="main_profile_base_info_layout_div main_profile_base_info_location" v-if="state=='school'">
            <label class="main_profile_base_info_label">我的学校</label>
            <input type="text" class="form-control" placeholder="填写在读学校" v-model="school">
        </div>
        <div class="main_profile_base_info_layout_div main_profile_base_info_location2" v-if="state=='work'">
            <label class="main_profile_base_info_label">职位</label>
            <select class="form-control work_select" v-model="job_title">
                <option value="Web前端工程师">Web前端工程师</option>
                <option value="Python研发工程师">Python研发工程师</option>
                <option value="NodeJS研发工程师">NodeJS研发工程师</option>
                <option value="JAVA研发工程师">JAVA研发工程师</option>
                <option value="C/C++研发工程师">C/C++研发工程师</option>
                <option value=".NET研发工程师">.NET研发工程师</option>
                <option value="PHP研发工程师">PHP研发工程师</option>
                <option value="Ruby研发工程师">Ruby研发工程师</option>
                <option value="Linux研发工程师">Linux研发工程师</option>
                <option value="iOS研发工程师">iOS研发工程师</option>
                <option value="Android工程师">Android工程师</option>
                <option value="运维工程师">运维工程师</option>
                <option value="测试工程师">测试工程师</option>
                <option value="硬件开发工程师">硬件开发工程师</option>
                <option value="DBA工程师">DBA工程师</option>
                <option value="产品经理">产品经理</option>
                <option value="教师">教师</option>
                <option value="其他">其他</option>
            </select>
        </div>
        <div class="main_profile_base_info_layout_div">
            <label class="main_profile_base_info_label"></label>
            <button class="save_button" @click="_save_base_info()">保存</button>
        </div>
    </div>    
</template>
<script type="text/javascript">
import { mapState, mapActions } from 'vuex'

export default {
    data: function () {
        return {
            state: 'school',
            nickname: '',
            school: '',
            job_title: '',
            avatar_url_upload: ''
        }
    },

    computed: {
        ...mapState({
            user_info: state => state.loginState.user_info,
        })
    },

    watch: {
        user_info: function (newUserInfo, oldUserInfo) {
            this.nickname = newUserInfo.name
            this.school = newUserInfo.scholl
            this.job_title = newUserInfo.job_title
            if (newUserInfo.is_graduated == true) {
                this.state = 'work'
            }
        }
    },
    methods: {
        ...mapActions({
            save_base_info: 'profile/save_base_info',
            change_base_info_by_data: 'loginState/change_user_info_by_data',
            get_upload_key: 'profile/get_upload_key',
            get_upload_domain: 'profile/get_qiniu_api'
        }),
        _save_base_info: async function () {
            // Json
            // 这个页面下有四个状态:
            // {
            //    avatar_url: "https://dn-simplecloud.shiyanlou.com/gravatar8mlv5aoFoWEr.jpg?imageView2/1/w/200/h/200",
            //    is_graduated: true,
            //    job_title: "其他", 这里如果上面是 false 那应该是 school
            //    name: "LOU2484605287"
            // }
            let data = {
                avatar_url: this.user_info.avatar_url, // 没有对接上传功能,暂时不能更改
                is_graduated: this.state == 'school' ? false : true,
                name: this.nickname
            }

            if (this.state=='school') {
                data['school'] = this.school
            } else {
                data['job_title'] = this.job_title
            }
            let response = await this.save_base_info(data)
            this.change_base_info_by_data(response.data)
        },
        get_upload_name: function () {
            // courses/uid1146797-20190920-1568960683910
            // 名字试了试无所谓,这样生成应该是保证唯一。
            let id = this.user_info.id
            let date = new Date()
            let today = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`
            let time = date.getTime()

            return `courses/uid${id}-${today}-${time}`
        },
        upload_avatar: async function (event) {
            // console.log(event)
            let upload_name = this.get_upload_name()
            let form = new FormData()
            // console.log(event.target.files[0])
            form.append('file', event.target.files[0])

            // 第一步向服务器请求上传所需的token, key其实是上传的文件名。
            let keys = await this.get_upload_key({
                bucket: 'simplecloud',
                key: upload_name
            })

            // 第二步向七牛申请可用上传域名。
            let upload_domains = await this.get_upload_domain({
                ak: keys.data.token.split(':')[0],
                bucket: 'simplecloud'
            })
            console.log(upload_domains)
        }
    },
    mounted: function () {
        this.nickname = this.user_info.name
        this.school = this.user_info.school
        this.job_title = this.user_info.job_title
        if (this.user_info.is_graduated == true) {
            this.state = 'work'
        }        
    }
}

</script>
<style type="text/css">
.main_profile_base_info_div {
    display: flex;
    flex-direction: column;
    width: 70%;

}

.main_profile_base_info_layout_div {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
}

.main_profile_base_info_label {
    padding-right: 5px;
    padding-left: 5px;
    padding-top: calc(.375rem + 1px);
    padding-bottom: calc(.375rem + 1px);
    margin-bottom: 0;
    font-size: 1rem;
    line-height: 1.5;
    max-width: 16.66666%;
    flex: 0 0 16.6666%;
}

.main_profile_base_info_avatar_img {
    width: 125px;
    height: 125px;
    border-radius: 25px;
    cursor: pointer;
}

.main_profile_base_info_state {
    display: flex;
    position: relative;
}

.main_profile_state_label {
    font-size: 1rem;
    margin-bottom: 0;
    position: relative;
    padding-left: 1.5rem;
    margin-right: 1.5rem;
}

.main_profile_state_label::before {
    content: "";
    position: absolute;
    display: block;
    width: 1rem;
    height: 1rem;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    left: 0;
    top: .25rem;

}

.main_profile_state_label::after {
    content: "";
    position: absolute;
    display: block;
    width: 1rem;
    height: 1rem;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    left: 0;
    top: .25rem;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.main_profile_state_label_checked::after {
    content: "";
    background: no-repeat 50%/50% 50%;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
    position: absolute;
    display: block;
    width: 1rem;
    height: 1rem;
    border: 1px solid #08bf91;
    background-color: #08bf91;
    border-radius: 50%;
    left: 0;
    top: .25rem;

}

.main_profile_state_input {
    /*display: none;*/
    /*visibility: hidden;*/
    position: absolute;
    opacity: 0;
}

.main_profile_state_input:active~.main_profile_state_label:after {
    color: #fff;
    background-color: #80fadb;
    border-color: #80fadb; 
}

.main_profile_state_input:focus~.main_profile_state_label_checked:after {
    box-shadow: 0 0 0 0.2rem rgba(8,191,145,.25);
}

.work_select:after {
    /*display: none;*/
    content: "333";
    width: 1rem;
    height: 1rem;
    position: absolute;
}

.work_select {
    appearance: none;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75rem center/8px 10px;

}

.save_button {
    color: #fff;
    border-color: #08bf91;
    background-color: #08bf91;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.save_button:hover {
    color: #fff;
    border-color: #068e6c;
    background-color: #068e6c;
}

#new_upload_avatar {
    display: none;
}

</style>
