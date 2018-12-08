<template>
<el-row :gutter="20">
  <el-col :span="10" :offset="5"><vleft :list='list' /></el-col>
  <el-col :span="4"><vright /></el-col>
</el-row>
</template>

<script>
import Left from './Left.vue'
import Right from './Right.vue'

  export default {
    components: {
    'vleft': Left,
    'vright': Right,
    },
    props: {
      list: '',
    },
    data () {
      return {
        search: '',
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created () {
      console.log("this.list", this.list);

    }
  }
</script>
<style scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 3px;
  }
  .bg-purple {
    background: #ffffff;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .right {
    display: flex;
    justify-content: space-around;
     align-items: center;
  }
</style>
