<template>
  <div>
    <el-button class="mb-2" type="danger" size="small" @click="add(scope.row.id)">新增</el-button>
    <el-table
      class="mb-2"
      :data="data"
      v-loading="loading"
      tooltip-effect="light"
      ref="dataTable"
      highlight-current-row
      border
      stripe
      size="small"
      element-loading-text="加载中..."
      element-loading-spinner="el-icon-loading"
    >
      <el-table-column label="场地模型编号" prop="reportType"></el-table-column>
      <el-table-column label="场地模型名称" prop="reportVersion"></el-table-column>
      <el-table-column label="当前模型版本" prop="reportName"></el-table-column>

      <el-table-column label="操作" prop="currentConns" width="380">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="issue(scope.row.id)">发版 </el-button>
          <el-button type="text" size="small" @click="edit(scope.row.id)">编辑 </el-button>
          <el-button type="text" size="small" @click="del(scope.row.id)">删除 </el-button>
          <el-button type="text" size="small" @click="pointsManagement(scope.row.id)">点位管理 </el-button>
          <el-button type="text" size="small" @click="roadmapManagement(scope.row.id)">路线管理 </el-button>
          <el-button type="text" size="small" @click="historyVersion(scope.row.id)">历史版本 </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 25, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      class="text-right mt-2"
    ></el-pagination>
  </div>
</template>
<script>
import { get } from 'loadsh';

export default {
  name: 'placeModelManagement',
  data() {
    return {
      data: [],
      loading: false,
      currentPage: 1,
      pageSize: 10,
      total: 0,
    };
  },
  mounted() {},
  methods: {
    // 新增
    add() {},

    // 发版
    issue() {
      console.log('object');
    },

    // 编辑
    edit() {
      console.log('object');
    },

    // 删除
    del() {
      console.log('object');
    },

    // 点位管理
    pointsManagement() {
      console.log('object');
    },

    // 路线管理
    roadmapManagement() {
      console.log('object');
    },

    // 历史版本
    historyVersion() {
      console.log('object');
    },

    getList() {},

    handleSizeChange(val) {
      this.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getList();
    },
  },
};
</script>
