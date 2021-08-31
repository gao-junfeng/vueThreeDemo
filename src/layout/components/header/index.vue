<template>
  <div class="header">
    <el-row style="margin: 10px 15px">
      <el-col :span="2">
        就是个模型
        <!-- <a href="#" @click="changeCollapse" style="font-size: 25px;color:#909399;"><i :class="collpaseIcon"></i>123</a> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    changeCollapse() {
      // 更改左侧导航栏展示状态
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>
<style scoped>
.dogimg {
  width: 50px;
}
</style>
