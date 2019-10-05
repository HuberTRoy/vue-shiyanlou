<template>
    <div class="publish_div">
        <input type="text" placeholder="请输入帖子标题" class="publish_title_input" v-model="title">
        <MarkdownEditor class="publish_markdown_editor" 
                        :placeholder="'写点什么吧....'" 
                        :preview="preview"
                        @text="get_content">
        </MarkdownEditor>
        <div class="publish_tools">
            <div class="publish_tags">
                <span class="publish_tag">
                    发布至:
                </span>
                <span class="publish_tag"
                      @click="tab_active('交流讨论')"
                      :class="[tag=='交流讨论' ? 'publish_tag_active' : '']"
                >
                    交流讨论
                </span>
                <span class="publish_tag"
                      @click="tab_active('技术分享')"
                      :class="[tag=='技术分享' ? 'publish_tag_active' : '']"
                >
                    技术分享
                </span>
            </div>
            <div class="publish_operation_tools">
                <button class="publish_button publish_preview_button" @click="tab_preview()" v-show="!preview">预览</button>
                <button class="publish_button publish_preview_button" @click="tab_preview()" v-show="preview">取消预览</button>
                <button class="publish_button" @click="publish()">发布</button>
            </div>
        </div>
    </div>    
</template>
<script type="text/javascript">
import MarkdownEditor from '@/components/common_components/markdown_editor/markdown.vue'

import questionApi from '@/api/questions/question.js'

export default {
    components: {
        MarkdownEditor
    },
    data: function () {
        return {
            tag: '交流讨论',
            tag_dict: {
                '交流讨论': 'discuss',
                '技术分享': 'sharing'

            },
            preview: false,
            content: '',
            title: ''
        }
    },
    methods: {
        tab_active: function (tag) {
            this.tag = tag
        },
        tab_preview: function () {
            this.preview = !this.preview
        },
        get_content: function (content) {
            this.content = content
        },
        publish: async function () {
            let res = await questionApi.publish_question({
                title: this.title,
                content: this.content,
                type: this.tag_dict[this.tag],
                // 这个参数好像是个预留参数暂时没用的样子。
                'beans': 0
            })

            if (res.data.id) {
                this.$router.push({ name: 'question', params: { id: res.data.id } })
            }
        }
    }
}

</script>
<style type="text/css" scoped>
.publish_div {
    width: 660px;
    height: calc(100vh - 120px);
    margin: auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
}

.publish_title_input {
    font-size: 20px;
    padding: .375rem .75rem;
    width: 100%;
    line-height: 1.5;
    border: 0;
    outline: none;
    box-shadow: none;
    resize: none;
    color: #333;
    background: #f9f9f9;
}

.publish_markdown_editor {
    border: none!important;
    flex-grow: 1;
}

.publish_tools {
    position: fixed;
    width: 50%;
    bottom: 0;
    left: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    margin-top: 10px;
    background: #f9f9f9;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}

.publish_tags {
    color: #333;
    font-size: 14px;
    font-weight: 700;
    display: flex;
}

.publish_tag {
    /*font-weight: 500;*/
    padding: 2px 10px;
    margin-right: 10px;
    border-radius: 20px;
    cursor: pointer;
}

.publish_tag_active {
    color: #fff;
    background: #4e5d63;
}

.publish_operation_tools {
    display: flex;

}

.publish_button {
    padding: 6px 20px;
    background: rgb(8, 191, 145);
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin-right: 5px;
}

.publish_button:hover {
    color: #fff;
    background: #069a75;
}

.publish_preview_button {
    background-color: #fff;
    color: #08bf91;
    border-color: #08bf91;
}

.publish_preview_button:hover {
    color: #fff;
    background-color: #08bf91;
}

</style>
