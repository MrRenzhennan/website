<template>
<el-row :gutter="20">
  <el-col :span="10" :offset="5">
  <div>
  <div class="all">
    <div class="list">
    <div class="content">
      <div class="img"><img class="img" src="../assets/1.jpg" alt=""></div>
      <div class="text">
        <div class="title">How I Saw the Crypto Market Crash Coming Five Hours Early and Got My People Out Before It Was Too Late…</div>
        <div class="flag">
          <div class="url"><span>coindesk.com</span> | <span>24 mins age</span></div>
        </div>
    </div>
    </div>
  </div>
  <div class="vline"></div>
  </div>

  <div class="all">
    <div class="list">
    <div class="content">
      <div class="img"><img class="img" src="../assets/1.jpg" alt=""></div>
      <div class="text">
        <div class="title">How I Saw the Crypto Market Crash Coming Five Hours Early and Got My People Out Before It Was Too Late…</div>
        <div class="flag">
          <div class="url"><span>coindesk.com</span> | <span>24 mins age</span></div>
        </div>
    </div>
    </div>
  </div>
  <div class="vline"></div>
  </div>

  <div class="all">
    <div class="list">
    <div class="content">
      <div class="img"><img class="img" src="../assets/1.jpg" alt=""></div>
      <div class="text">
        <div class="title">How I Saw the Crypto Market Crash Coming Five Hours Early and Got My People Out Before It Was Too Late…</div>
        <div class="flag">
          <div class="url"><span>coindesk.com</span> | <span>24 mins age</span></div>
        </div>
    </div>
    </div>
  </div>
  <div class="vline"></div>
  </div>

  <div class="all">
    <div class="list">
    <div class="content">
      <div class="img"><img class="img" src="../assets/1.jpg" alt=""></div>
      <div class="text">
        <div class="title">How I Saw the Crypto Market Crash Coming Five Hours Early and Got My People Out Before It Was Too Late…</div>
        <div class="flag">
          <div class="url"><span>coindesk.com</span> | <span>24 mins age</span></div>
        </div>
    </div>
    </div>
  </div>
  <div class="vline"></div>
  </div>

  <div class="all">
    <div class="list">
    <div class="content">
      <div class="img"><img class="img" src="../assets/1.jpg" alt=""></div>
      <div class="text">
        <div class="title">How I Saw the Crypto Market Crash Coming Five Hours Early and Got My People Out Before It Was Too Late…</div>
        <div class="flag">
          <div class="url"><span>coindesk.com</span> | <span>24 mins age</span></div>
        </div>
    </div>
    </div>
  </div>
  <div class="vline"></div>
  </div>

  <div class="all">
    <div class="list">
    <div class="content">
      <div class="img"><img class="img" src="../assets/1.jpg" alt=""></div>
      <div class="text">
        <div class="title">How I Saw the Crypto Market Crash Coming Five Hours Early and Got My People Out Before It Was Too Late…</div>
        <div class="flag">
          <div class="url"><span>coindesk.com</span> | <span>24 mins age</span></div>
        </div>
    </div>
    </div>
  </div>
  <div class="vline"></div>
  </div>

  <div class="all">
    <div class="list">
    <div class="content">
      <div class="img"><img class="img" src="../assets/1.jpg" alt=""></div>
      <div class="text">
        <div class="title">How I Saw the Crypto Market Crash Coming Five Hours Early and Got My People Out Before It Was Too Late…</div>
        <div class="flag">
          <div class="url"><span>coindesk.com</span> | <span>24 mins age</span></div>
        </div>
    </div>
    </div>
  </div>
  <div class="vline"></div>
  </div>

  <div class="all">
    <div class="list">
    <div class="content">
      <div class="img"><img class="img" src="../assets/1.jpg" alt=""></div>
      <div class="text">
        <div class="title">How I Saw the Crypto Market Crash Coming Five Hours Early and Got My People Out Before It Was Too Late…</div>
        <div class="flag">
          <div class="url"><span>coindesk.com</span> | <span>24 mins age</span></div>
        </div>
    </div>
    </div>
  </div>
  <div class="vline"></div>
  </div>

  <div class="all">
    <div class="list">
    <div class="content">
      <div class="img"><img class="img" src="../assets/1.jpg" alt=""></div>
      <div class="text">
        <div class="title">How I Saw the Crypto Market Crash Coming Five Hours Early and Got My People Out Before It Was Too Late…</div>
        <div class="flag">
          <div class="url"><span>coindesk.com</span> | <span>24 mins age</span></div>
        </div>
    </div>
    </div>
  </div>
  <div class="vline"></div>
  </div>

  <div class="all">
    <div class="list">
    <div class="content">
      <div class="img"><img class="img" src="../assets/1.jpg" alt=""></div>
      <div class="text">
        <div class="title">How I Saw the Crypto Market Crash Coming Five Hours Early and Got My People Out Before It Was Too Late…</div>
        <div class="flag">
          <div class="url"><span>coindesk.com</span> | <span>24 mins age</span></div>
        </div>
    </div>
    </div>
  </div>
  <div class="vline"></div>
  </div>

  </div>
  </el-col>
  <el-col :span="4"><vright /></el-col>
</el-row>
</template>

<script>
import Right from './Right.vue'

  export default {
    components: {
    'vright': Right,
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
    }
  }
</script>
<style scoped>
.list {
  background: #ffffff;
  padding: 10px;
  padding-left: 30px;
}
.vline {
  height: 2px;
}

.content {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.img {
  width: 120px;
  height: auto;
  padding-right: 20px;
}
.title {
  font-size: 18px;
  color: #212837;
  line-height: 26px;
  padding-bottom: 8px;
}
.tag {
  font-size: 12px;
  color: #4D5563;
  margin-top: 8px;
  margin-bottom: 12px;
}
.url {
  font-size: 12px;
  color: #767E8D;
  line-height: 18px;
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
