<template>
  <el-container>
    <!--左侧导航栏-->
    <el-aside>
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>threejs</span>
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item :route="{ name: 'three' }" index="/three">草地模型1</el-menu-item>
            <el-menu-item :route="{ name: 'mesh' }" index="/mesh">转圈模型1</el-menu-item>
            <el-menu-item :route="{ name: 'threeButton' }" index="/threeButton">弹框模型</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-location"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!--主内容显示区域，数据内容都是在这里面渲染的-->
    <el-main> <router-view></router-view></el-main>
  </el-container>
</template>

<script>
export default {};
</script>
