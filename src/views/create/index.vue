<template>
<div>
  <el-container>
    <el-header class="head"><vhead /><head />
    </el-header>
    <el-main>
      <vuedit />
    </el-main>

  </el-container>
</div>
</template>

<script>
import Head from '@/components/Head.vue'
import Uedit from '@/components/Create.vue'


export default {
  name: 'create',
  components: {
    'vhead': Head,
    'vuedit': Uedit,
  },

}

</script>

<style>
.head {
  background-color: #ffffff;
}

</style>
