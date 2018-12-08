<template>
<div>
  <el-container>
    <el-header class="head"><vhead /><head />
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="14" :offset="5">
          <vmain />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</div>
</template>

<script>
import Head from '@/components/Head.vue'
import Myprofile from './components/bookmarks.vue'

export default {
  name: 'myprofile',
  components: {
    'vhead': Head,
    'vmain': Myprofile,
  }
}

</script>

<style>
.head {
  background-color: #ffffff;
}

</style>
