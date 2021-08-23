<template>
  <div>
    <el-button type="primary" @click="press">threejs</el-button>
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
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'p1',
  data() {
    return { dialogVisible: false };
  },
  components: { HelloWorld },
  methods: {
    press() {
      this.dialogVisible = true;
    },
  },
};
</script>
