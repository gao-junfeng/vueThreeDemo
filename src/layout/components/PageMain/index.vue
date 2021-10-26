<template>
  <el-container>
    <!--左侧导航栏-->
    <el-aside>
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
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
            <el-menu-item :route="{ name: 'h5model' }" index="/h5model">拖拽模型</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">A*算法</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2">
              <span slot="title">简介</span>
            </el-menu-item>
            <el-menu-item :route="{ name: 'Astart' }" index="/Astart">
              <span slot="title">地图绘制操作</span>
            </el-menu-item>
            <el-menu-item :route="{ name: 'AstartPro' }" index="/AstartPro">
              <span slot="title">算法演示</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item-group>
          <el-menu-item index="points">
            <span slot="title">微粒子</span>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="fuwenben">
            <span slot="title">富文本</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
    <!--主内容显示区域，数据内容都是在这里面渲染的-->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>
