<template>
  <el-form ref="form" :model="selectOption" label-position="right" label-width="120px">
    <el-form label="选择：" props="select">
      <el-select style="width: 300px" v-model="selectOption.select"></el-select>
    </el-form>
    <el-form>
      <el-button @click="callback">取 消</el-button>
      <el-button type="danger">确 定</el-button>
    </el-form>
  </el-form>
</template>
<script>
export default {
  name: 'addorEdit',
  props: {
    id: {
      type: String,
      default: '',
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    callback: Function,
  },
  data() {
    return {
      selectOption: {
        select: '',
      },
      rules: {
        select: [{ required: true, message: '请选择', trigger: 'change' }],
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>
