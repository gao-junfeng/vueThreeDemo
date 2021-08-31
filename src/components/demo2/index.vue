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
    this.minDistance('wqeq', 'wrtt');
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
    minDistance(word1, word2) {
      //1.初始化
      let n = word1.length,
        m = word2.length;
      let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
      console.log(dp);
      for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
      }
      for (let j = 0; j <= m; j++) {
        dp[0][j] = j;
      }
      //2.dp
      for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
          if (i * j) {
            dp[i][j] =
              word1[i - 1] == word2[j - 1]
                ? dp[i - 1][j - 1]
                : Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
          } else {
            dp[i][j] = i + j;
          }
          console.log(dp[i][j]);
        }
      }
      return dp[n][m];
    },
  },
};
</script>
