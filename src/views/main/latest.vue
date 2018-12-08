<template>
<div>
  <el-container>
    <el-header class="head"><vhead /><head />
    </el-header>
    <el-main><vmain /></el-main>

  </el-container>
</div>
</template>

<script>
import Head from '@/components/Head.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'latest',
  components: {
    'vhead': Head,
    'vmain': Main,
  }
}

</script>

<style>
.head {
  background-color: #ffffff;
}

</style>
