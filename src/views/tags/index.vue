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
import MainTags from '@/components/MainTags.vue'

export default {
  name: 'index',
  components: {
    'vhead': Head,
    'vmain': MainTags,
  }
}

</script>

<style>
.head {
  background-color: #ffffff;
}

</style>
