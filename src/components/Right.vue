<template>
<div>
  <div class="tags">
    <div class="tag">
      <div class="title">
        Discussion
      </div>
      <div class="lists">
        <span class="list"># Crypto Discussion</span>
        <span class="list"># Bounty Campaigns</span>
        <span class="list"># Trading Discussion</span>
        <span class="list"># Beginners & Help</span>
        <span class="list"># Altcoin Discussion</span>
        <span class="list"># Development & Technical Discussion</span>
        <span class="list"># Mining</span>
        <span class="list"># ICO & Startups</span>
        <span class="list"># Altcoin Discussion</span>
        <span class="list"># Serious discussion</span>
      </div>
    </div>
    <div class="vline"></div>
  </div>
  <div class="app">
    <div class="download">
      <div class="title">
        Download App
      </div>
        <div class="ios">
      <img src="../assets/qrcode-ios.png" alt="">
      <p>IOS download</p>
    </div>
       <div class="android">
         <img src="../assets/qrcode-ios.png" alt="">
         <p>Android download</p>
         </div>
    </div>
    <div class="vline"></div>
  </div>
  <div class="company">
    <div class="info"></div>
    <div class="vline"></div>
  </div>
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
.vline {
  height: 20px;
}
.tag {
  background-color: #ffffff;
  padding: 30px;
}
.download {
  background-color: #ffffff;
  padding: 30px;
}
.info {
  background-color: #ffffff;
  padding: 30px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  color: #212837;
  margin-bottom: 20px
}
.list {
  font-size: 12px;
  color: #4D5563;
  margin-bottom: 5px;
  display: block;
}
p {
  text-align: center;
}
img {
  width: 80px;
  margin-left: auto;
  margin-right:auto;
  display:block;
}

</style>
