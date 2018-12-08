<template>
<div>
  <div class="head">
    <div class="myinfo">
    <div class="my">
      <div class="my-info">
        <div><img class="user-head" src="../../../assets/man.png" alt=""></div>
        <div><span class="myname">Jason Kowalsi</span></div>
      </div>
    </div>
    <div class="profile">
        <div class="bio">Enter a short bio</div>
        <div class="item"><i class="el-icon-setting"></i> 34,334 ccc</div>
        <div class="item"><i class="el-icon-edit"></i> 32</div>
        <div class="item"><i class="el-icon-date"></i> Aug 11, 2018 at 04:20</div>
    </div>
    </div>
  </div>
  <div class="vline"></div>
  <div><vmenu /></div>
  <div class="history">
    <div class="name flex-between">
      <div class="before">
      <div class="h">History</div>
      <div class="bio">Enter a short bio.</div>
      <div class="button">
        <el-button>Save</el-button>
        <el-button>Cancel</el-button>
      </div>
      </div>
      <div class="active"><img class="img" src="../../../assets/man.png" alt=""></div>
    </div>
  </div>

  <div class="wline"></div>

</div>
</template>

<script>
import Mymenu from './mymenu.vue'

export default {
  data() {
    return {
      search: ""
    };
  },
  components: {
    'vmenu': Mymenu,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.img {
  width: 80px;
  height: auto;
}
.myinfo {
  background-color: #dddd;
  padding: 30px;
  padding-bottom: 20px;
  padding-left: 50px;
}
.my-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.myname {
  font-size: 24px;
  color: #4d5563;
  font-weight: bold;
  line-height: 14px;
}
.bio {
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 16px;
  color: #767e8d;
}
.item {
  padding-left: 20px;
  font-size: 12px;
  color: #767e8d;
  line-height: 18px;
  padding-bottom: 3px;
}
i {
  padding-right: 3px;
}
.tags-all {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tags-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.setting {
  margin-right: 20px;
}
.active {
  color: #409EFF;
}
.tags-line {
  background-color: #eeeeee;
  height: 1px;
  margin-bottom: 30px;
}
.list {
  background: #ffffff;
  padding: 30px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
}
.user-head {
  width: 48px;
  height: auto;
  padding-right: 10px;
}
.vline {
  height: 20px;
}
.wline {
  height: 40px;
  background-color: #ffffff;
}
.total {
  border: 1px solid #409EFF;
  background-color: #eeeeee;
  padding: 30px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;

}
.field {
  background-color: #eeeeee;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ccc {
  color: #409EFF;
  font-size: 24px;
  font-weight: bold;
  line-height: 38px;
}

.h1 {
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
  color: #4d5563;
}
.h3 {
  font-size: 12px;
  line-height: 14px;
  color: #767e8d;
}
.history {
  background-color: #ffffff;
  padding: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
}
.h {
  font-size: 26px;
  font-weight: bold;
  line-height: 40px;
  }
.record {
  border: 1px solid #dddddd;
}
.active {
  color: #409EFF;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
}

</style>
