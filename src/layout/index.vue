<template>
  <el-container>
    <!--顶部-->
    <el-header>
      <Header />
    </el-header>

    <!--中央区域-->
    <el-main>
      <PageMain />
    </el-main>

    <!--底部-->
    <!-- <el-footer> <SideBar /></el-footer> -->
  </el-container>
</template>
<script>
import Header from './components/header';
import PageMain from './components/PageMain';
import SideBar from './components/sideBar';

export default {
  data() {
    return {
      screenType: {
        isFull: true,
      },
    };
  },
  components: {
    Header,
    PageMain,
    SideBar,
  },

  provide() {
    return {
      screenType: this.screenType,
    };
  },
};
</script>
<style scoped>
/*整体显示区域布局样式*/
.el-container {
  height: 800px;
}

.el-header,
.el-main {
  padding: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
/*左边导航栏具体样式*/
.el-menu-vertical-demo.el-menu {
  padding-left: 20px;
  text-align: left;
  height: 100%;
  padding: 0;
}

el-container > .el-menu-vertical-demo.el-menu {
  padding: 0;
}

.el-submenu .el-menu-item,
.el-menu-item {
  min-width: 50px;
}

.el-menu-item {
  padding: 0;
}
</style>
