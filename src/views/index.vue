<template>
<div>
  <el-container>
    <el-header class="head"><vhead /><head />
    </el-header>
    <el-main><vmain :list='list' /></el-main>

  </el-container>
</div>
</template>

<script>
import Head from '@/components/Head.vue'
import Main from '@/components/Main.vue'
import { postMain } from '../request'
import { getStore, setStore } from '../utils/cache.js'

export default {
  name: 'index',
  components: {
    'vhead': Head,
    'vmain': Main,
  },
  data () {
    return {
      pageNum: 0,
      list: null,
    }
  },
  methods: {
    },
    created(){
      postMain(this.pageNum).then( ret => {
        if(ret.errcode === 1000)
          this.list = ret.data.posts;
      });

    }
}

</script>

<style>
.head {
  background-color: #ffffff;
}

</style>
