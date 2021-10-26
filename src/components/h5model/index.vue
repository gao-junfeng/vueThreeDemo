<template>
  <div>
    <div class="ql-align-center red">123123123</div>
    <a :href="navigator">下载zip</a>
    <div class="ql-snow">
      <div class="ql-editor" v-html="imageMsg"></div>
    </div>
    <quill-editor v-model="imageMsg" ref="myQuillEditor"> </quill-editor>
    <div class="ql-snow">
      <div class="ql-editor" v-html="data"></div>
    </div>
  </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.snow.css';
import { data1 } from './data.js';

export default {
  data() {
    return {
      data: data1,
      navigator: '//platcom.oss-cn-hangzhou.aliyuncs.com/testrule/25/wenzhou092802.zip',
      imageMsg: '',
    };
  },
  components: { quillEditor },
};
</script>
