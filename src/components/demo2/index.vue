<template>
  <div>
    <div v-for="(item, index) in treeData" :key="index">用户：{{ item.label }},密码:{{ item.value }}</div>
  </div>
</template>
<script>
export default {
  name: 'demo2',
  data() {
    return {
      treeData: [],
      randomData: [],
    };
  },
  created() {
    this.getRandomData();
  },
  mounted() {
    this.start();
  },
  methods: {
    getRandomData() {
      const treeDataCopy = [];
      for (let i = 0; i < 10; i++) {
        const query = {
          label: Math.random()
            .toString(36)
            .substr(2),
          value: Math.floor(Math.random() * 100),
          parent: i,
        };
        treeDataCopy.push(query);
      }
      this.treeData = treeDataCopy;
      console.log(this.treeData);
    },
    // getTreeData(parent){
    //   console.log('整理父级数据')
    //   const treeDataCopy =[]
    //   let parent=parent
    //   this.treeData.map((item,index)=>{
    //     item.parent===parent
    //     item.children=[]
    //     parent=item.parent
    //     return getTreeData(0)
    //   })
    // }

    // 求和
    sum(n) {
      if (n === 1) return 1;
      return this.sum(n - 1) + n;
    },
    start() {
      const a = this.sum(2);
      console.log(a);
    },
  },
};
</script>
