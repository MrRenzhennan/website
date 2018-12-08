<template>
  <div id="app">

    <el-container>
      <el-header><navmenu></navmenu></el-header>
      <el-container>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
