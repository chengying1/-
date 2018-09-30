<template>
    <div class="write-note">
      <div class="main-content w1170">
        <div class="title">
          标题
        </div>
        <div class="input-wrap">
          <el-input v-model="formData.title"></el-input>
        </div>
        <div class="title">
          内容
        </div>
        <quill-editor
          v-model="formData.content"
          ref="myQuillEditor"
          :options="editorOption"
        >
        </quill-editor>
        <div class="category">
          <span class="strong">分类：</span>
        </div>
        <el-button type="primary">
          发布笔记
        </el-button>
      </div>
    </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

  Quill.register('modules/ImageExtend', ImageExtend)
    export default {
      components: {quillEditor},
      data() {
        return {
          formData:{
            content: '',
            title:''
          },
          // 富文本框参数设置
          editorOption: {
            modules: {
              ImageExtend: {
                loading: true,
                name: 'img',
                action: "http://qieniu.com",
                response: (res) => {
                  return res.info
                }
              },
              toolbar: {
                container: container,
                handlers: {
                  'image': function () {
                    QuillWatch.emit(this.quill.id)
                  }
                }
              }
            }
          }
        }
      }
    }
</script>

<style scoped lang="scss">
.main-content {
  margin-top: 30px;
  background: #fff;
  border-radius: 6px;
  padding: 30px;
  box-sizing: border-box;

  .title {
    color: #444;
    line-height: 2;
    font-size: 20px;
    font-weight: 600;
  }
  .category {
    margin: 30px 0;
    .strong {
    color: #409eff;
    font-weight: 700;
    font-size: 14px;
  }
}
}
</style>
<style>
  .ql-container{
    min-height: 300px;
  }
</style>
