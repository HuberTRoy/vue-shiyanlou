<template>
    <div class="markdown_editor">
        <!-- 
            一个常规的富文本编辑器
            上面一排是工具栏

            ------------
            |tools     |
            |          |
            |textarea  |
            ------------
            [发布] [预览]
              ↓      ↓
    这个按钮props   这个投到全屏差不多的样子。
         -->
        <div class="markdown_container" v-show="!preview">
            <div class="markdown_container_editor" v-show="!preview">
                <div class="markdown_tools">
                    <div class="tools">
                        <i class="fa fa-bold" @click="replace('**')"></i>
                        <i class="fa fa-italic" @click="replace('*')"></i>
                        <i class="fa fa-link" @click="linkWith()"></i>
                        <i class="fa fa-quote-left" @click="startWith('> ')"></i>
                        <i class="fa fa-code" @click="replace('```')"></i>
                        <i class="fa fa-image" @click="upload()"></i>
                        <i class="fa fa-list-ol" @click="startWith('1. ')"></i>
                        <i class="fa fa-list-ul" @click="startWith('- ')"></i>
                    </div>
                    <router-link tag="a"
                                 :to="{ name: 'question', params: { id: '764' } }"
                                 class="get_markdown_knowledge">
                        <i class="fa fa-question-circle"></i>
                        MarkDown 语法
                    </router-link>
                </div>
                <textarea class="markdown_text" id="markdown_textarea"
                          :placeholder="placeholder"
                          v-model="text"
                          @select="selected()"
                >            
                </textarea>
            </div>
        </div>
        <section class="markdown_container_previewer" v-show="preview">
            <VueMarkdown :source="text"></VueMarkdown>
        </section>
        <div class="markdown_operation" v-if="hidden_default_tools">
            <div>
                <button class="markdown_operation_button markdown_operation_preview_button" @click="tab_preview()" v-show="!preview">预览</button>
                <button class="markdown_operation_button markdown_operation_preview_button" @click="tab_preview()" v-show="preview">取消预览</button>
                <button class="markdown_operation_button markdown_operation_public_button">发布</button>
            </div>
        </div>
    </div>
</template>    
<script type="text/javascript">
import VueMarkdown from 'vue-markdown'

export default {
    props: {
        placeholder: {
            type: String,
            require: false
        },
        preview: {
            type: Boolean,
            require: false,
            default: false
        },
        hidden_default_tools: {
            type: Boolean,
            require: false,
            require: true
        }
    },
    data: function () {
        return {
            text: '',
            selected_text: ''
        }
    },
    components: {
        VueMarkdown
    },
    methods: {
        tab_preview: function () {
            this.preview = !this.preview
        },
        selected: function () {
            // console.log(event)
            let textarea = document.getElementById('markdown_textarea')
            let selectedText = textarea.value.substr(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart)
            this.selected_text = selectedText
            let left = textarea.value.substr(0, textarea.selectionStart)
            let right = textarea.value.substr(textarea.selectionEnd, textarea.value.length)

            return {
                'left': left,
                'right': right,
                'selected': selectedText
            }
        },
        replace: function (symbo) {
            let getSelected = this.selected()
            let newSymboText = `${symbo}${getSelected.selected}${symbo}`
            this.text = `${getSelected.left}${newSymboText}${getSelected.right}`
        },
        startWith: function (symbo) {
            let getSelected = this.selected()
            let newSymboText = `${symbo}${getSelected.selected}`
            this.text = `${getSelected.left}${newSymboText}${getSelected.right}`
        },
        linkWith: function () {
            let getSelected = this.selected()
            let newSymboText = ''
            if (getSelected.selected.substr(0,4) == 'http') {
                newSymboText = `[描述](${getSelected.selected})`
            } else if (getSelected.selected == '') {
                newSymboText = `[描述](链接)`
            } else {
                newSymboText = `[${getSelected.selected}](链接)`
            }

            this.text = `${getSelected.left}${newSymboText}${getSelected.right}`
        },
        upload: function () {
            // 上传图片待添加。
            console.log('upload img')
        }
    },
    watch: {
        text: function () {
            this.$emit('text', this.text)
        }
    }

}
</script>
<style type="text/css">
.markdown_editor {
    min-height: 250px;
}

.markdown_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    min-height: 250px;
}

.markdown_container_editor {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 250px;
}

.markdown_tools {
    background: #f7f7f7;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tools .fa {
    padding: 10px 15px;
    margin: 0;
    font-size: 14px;
    cursor: pointer;
}

.tools .fa:hover {
    box-shadow: 0 0 1px 1px #ccc;
}

.get_markdown_knowledge {
    color: #08bf91;
}

.markdown_text {
    flex-grow: 1;
    border: none;
    outline: none;
    color: #495057;
    font-size: 1rem;
    padding: .375rem .75rem;
}

.markdown_container_previewer {
    padding: 10px 20px;
    background: #fff;
    border: 1px solid #eee;
    word-break: break-all;
    height: 100%;
    overflow: auto;
}

.markdown_operation {
    display: flex;
    justify-content: flex-end;
}

.markdown_operation_button {
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .375rem 20px;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.markdown_operation_public_button {
    color: #fff;
    background-color: #08bf91;
    border-color: #08bf91;
}

.markdown_operation_public_button:hover {
    color: #fff;
    background-color: #069a75;
    border-color: #069a75; 
}

.markdown_operation_preview_button {
    color: #08bf91;
    border-color: #08bf91;
    background-color: #fff;
}

.markdown_operation_preview_button:hover {
    color: #fff;
    background-color: #08bf91;
    border-color: #08bf91;
}


</style>
