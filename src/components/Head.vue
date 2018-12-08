<template>
<div class="head">
  <el-row :gutter="20">
  <el-col :span="10" :offset="5"><div class="grid-content line">
    <div><img src="../assets/logo.png" alt=""></div>
    <div>
      <span><router-link to="/">Featured</router-link></span>
      <span><router-link to="/latest">Latest</router-link></span>
      <span><router-link to="/news">News</router-link></span>
    </div>
    <div style="width: 30%;"><el-input
    placeholder="Search..."
    suffix-icon="el-icon-search"
    v-model="search">
  </el-input></div>
    </div></el-col>
  <el-col :span="4"><div class="grid-content">
    <div class="right" v-if="true">
      <div>
        <el-button type="primary" round @click="create">Create</el-button>
      </div>
    <div>
      <el-button @click="login">Login</el-button>
    </div>
    <div>
      <el-button @click="signup">Sign in</el-button>
    </div>
    </div>
    <div class="right" v-else>
      <div>
        <el-button type="primary" round>Create</el-button>
      </div>
    <div>
      <el-button icon="el-icon-bell" circle></el-button>
    </div>
    <div>
      <el-button type="primary">Logout</el-button>
    </div>
    </div>
  </div></el-col>
</el-row>
</div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
      }
    },
    methods: {
      create () {
        this.$router.push({path: '/create'})
      },
      login () {
        this.$router.push({path: '/login'})
      },
      signup () {
        this.$router.push({path: '/signup'})
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
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
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
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
  .head {
    margin-top: 10px;
  }
  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    margin-right: 20px;
  }
  .right {
    display: flex;
    justify-content: space-between;
     align-items: center;
  }
</style>
