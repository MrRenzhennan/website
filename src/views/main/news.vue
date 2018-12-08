<template>
<div>
  <el-container>
    <el-header class="head"><vhead /><head />
    </el-header>
    <el-main><vnews /></el-main>

  </el-container>
</div>
</template>

<script>
import Head from '@/components/Head.vue'
import News from '@/components/News.vue'

export default {
  name: 'news',
  components: {
    'vhead': Head,
    'vnews': News,
  }
}

</script>

<style>
.head {
  background-color: #ffffff;
}

</style>
