<template>
  <div>
    <div id="e">
      <el-button type="primary" @click="press">threejs</el-button>
      <el-button type="primary" @click="getNode">获取123节点</el-button>
      <el-button type="primary" @click="isShow">v-if</el-button>
      <span id="a" v-show="isShowV">{{ Math.random() }}</span>
    </div>

    <img id="b" />
    <el-dialog title="提示" v-if="dialogVisible" :visible.sync="dialogVisible" width="900px">
      <div style="margin:auto">
        <span>这是一段信息</span>
        <HelloWorld :width="600" />
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// import HelloWorld from '@/components/HelloWorld';
import html2canvas from 'html2canvas';

const files = require.context('@/components', false, /\.vue$/);
let components = {};
// 遍历files对象，构建components键值
files.keys().forEach(key => {
  components[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
});
console.log(components);

export default {
  name: 'p1',
  data() {
    return { dialogVisible: false, isShowV: true };
  },
  components,
  methods: {
    press() {
      this.dialogVisible = true;
    },
    getNode() {
      const node = document.getElementById('e');
      console.log(node);
      html2canvas(node, { dpi: window.devicePixelRatio }).then(canvas => {
        const b = document.getElementById('b');
        const img = canvas.toDataURL('/image/png', 1.0);
        b.src = img;
      });
    },
    isShow() {
      this.isShowV = !this.isShowV;
    },
  },
};
</script>
