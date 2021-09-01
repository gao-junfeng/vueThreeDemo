<template>
  <div class="header">
    <el-row>
      <el-col :span="2">
        <img style="width:80%;" src="./dog.jpg" alt="" />
      </el-col>
      <el-col :span="20">
        three模型看板
      </el-col>
      <el-col :span="2">
        <i class="el-icon-full-screen"></i>
        <span class="screenFull" @click="screenFull">全屏</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  inject: ['screenType'],

  methods: {
    changeCollapse() {
      // 更改左侧导航栏展示状态
      this.isCollapse = !this.isCollapse;
    },
    screenFull() {
      console.log('点了就全屏');
      this.screenType.isFull = !this.screenType.isFull;
      console.log(this.screenType.isFull);
    },
  },
};
</script>
<style scoped>
.screenFull {
  cursor: pointer;
}
</style>
