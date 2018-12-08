<template>
<el-row :gutter="20">
  <el-col :span="10" :offset="5"><vuedit /></el-col>
  <el-col :span="4"><vright /></el-col>
</el-row>
</template>

<script>
import Uedit from './Uedit.vue'
import Right from './Right.vue'


  export default {
    components: {
    'vuedit': Uedit,
    'vright': Right,
    },
  }
</script>
<style scoped>
.uedit {
  background-color: #ffffff;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 30px;
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

