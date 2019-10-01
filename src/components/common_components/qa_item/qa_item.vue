<template>
    <!--
        问答区域的item样式。
        data数据数据格式：
                {
                    创建者及其信息
                    'author': {
                        'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                        'created_time': '2019-01-03T02:26:00Z',
                        'home_page': '/user/1',
                        'id': 123,
                        'level': 99,
                        'is_member': false,
                        'is_teacher': false,
                        'name': 'Shiyanlou'
                    },
                    创建时间
                    'created_time': '2019-01-03T02:26:00Z',
                    最后回复者信息，没有的话需要全部填空或者任意数据
                        'last_reply': {
                            'author': {
                                'avatar': '',
                                'created_time': '',
                                'home_page': '',
                                'id': ,
                                'level': ,
                                'is_member': ,
                                'is_teacher': ,
                                'name': ''
                            }
                        }
                    'last_reply': {
                        'author': {
                            'avatar': 'https://dn-simplecloud.shiyanlou.com/gravatar6DKTRJ4Q5FEG.jpg?imageView2/1/w/200/h/200',
                            'created_time': '2019-01-03T02:26:00Z',
                            'home_page': '/user/1',
                            'id': 123,
                            'level': 99,
                            'is_member': false,
                            'is_teacher': false,
                            'name': 'Shiyanlou'
                        }
                    },
                    来源，暂未确定具体格式
                    'source': '',
                    问题标题
                    'title': 'Test Text For Question Title Yooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!',
                    回复数量
                    'answer_number': 0,
                    查看数量
                    'view_number': 99,
                    问题id
                    'question_id': 123
                }
     -->
    <div class="qa_item_div">
        <div class="qa_item_question_div">
            <router-link tag="a" :to="{ name: 'user', params: { id: data.author.id} }">
                <img :src="data.author.avatar_url" class="item_question_avatar" />
            </router-link>
            <div class="item_question">
                <router-link :to="{name:'question', params: { id: data.id }}" tag="a" 
                              class="item_question_title">
                    {{ data.title }}
                </router-link>
                <div class="item_question_base_info">
                    <!--  -->
                    <span>{{ data.author.name }}</span>
                    <span class="level">L{{ data.author.level }}</span>
                    <span>{{ data.updated_at }}</span>
                    <span v-if="data.answers_count!==0">
                        最后回复 {{ data.latest_answer_author.name }}
                        <span class="level">L{{ data.latest_answer_author.level }}</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="item_view_answer_div">
            <div class="view_answer_div answer_number_div">
                <span class="view_span view_answer_span">{{ data.answers_count }}</span>
                <span class="view_span view_answer_span">回复</span>
            </div>
            <div class="view_answer_div view_number_div">
                <span class="answer_span view_answer_span">{{ data.views }}</span>
                <span class="answer_span view_answer_span">查看</span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    props: {
        data: {
            type: Object,
            require: true
        }
    }
}
</script>
<style type="text/css">
.qa_item_div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
}

.qa_item_question_div {
    display: flex;
    width: 83%;
}

.item_question {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    max-width: 83%;
    /*max-width: 600px;*/
}

.item_question_avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
}

.item_question_title {
    display: inline-block;
    white-space: nowrap;
    font-size: 18px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #4c5157;
    max-width: 100%;
}

.item_question_base_info {
    margin-top: 8px;
    font-size: 13px;
    color: #9b9da2;
}

.item_view_answer_div {
    display: flex;
    width: 16%;
    /*margin: 0 30px;*/
    padding: 0 15px;
    justify-content: space-around;
}

.view_answer_div {
    display: flex;
    flex-direction: column;
    /*margin-right: 5px;*/
}

.view_answer_span {
    font-size: 14px;
    text-align: center;
}

.view_span {
    color: #0c9;
}

.level {
    color: #ffc500;
}

</style>
