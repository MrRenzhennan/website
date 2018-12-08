<template>
<div class="container">
  <div class="top"></div>
<el-row type="flex" justify="center" align="bottom">
<el-col :span="10">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <div class="grid-content">
    <div class="in-content">
      <div class="title">
        <div class="head">
          <div>
          <img src="../../assets/logo.png" alt="">
          </div>
        <div class=""><span class="h2">CoinClub</span></div>
        </div>
        <div><el-button type="primary" size="mini" round @click="onSubmit">Next</el-button></div>
      </div>
      <div class="info">
        <span class="h2">Create your acconunt</span>
      </div>
      <div class="text item">
  <el-form-item label="Name: " prop="name">
     <el-col :span="22"><el-input v-model="ruleForm.name" placeholder="Your name"></el-input></el-col>
  </el-form-item>
  <el-form-item v-if="false" label="Phone: " required>
    <el-col :span="8">
     <el-select v-model="ruleForm.countryCode" placeholder="Country Code" clearable>
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
    </el-col>
   <el-col :span="1"> -</el-col>
    <el-col :span="13">
        <el-input v-model="ruleForm.phone" placeholder="Phone Number"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item v-if="false" label="Code: " prop="code">
    <el-col :span="8">
    <el-input v-model="ruleForm.code" placeholder="Code"></el-input>
    </el-col>
    <el-col :span="14">
      <el-button style="float: right;" type="primary">Send SMS</el-button>
    </el-col>

  </el-form-item>
  <el-form-item label="Password: " prop="password">
    <el-col :span="22"><el-input type="password" v-model="ruleForm.password" placeholder="PassWord for login"></el-input></el-col>
  </el-form-item>
  <el-form-item label="Invite Code: " prop="inviteCode">
    <el-col :span="22"><el-input v-model="ruleForm.inviteCode" placeholder="Invite Code (Option)"></el-input></el-col>
  </el-form-item>

  <el-form-item  v-if="false" >
    <el-col :span="22">
      <div  style="float: right;">
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
    <el-button type="primary" >Create</el-button>
      </div>
    </el-col>
  </el-form-item>
      </div>
      <div class="bottom">By signing up, you agree to the <br />
        <a href="service.html">Terms of Service</a> and <a href="privacy.html">Privacy Policy</a>, include Cookie Use</div>
    </div>
  </div>
</el-form>
</el-col>
</el-row>
</div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
        inviteCode: "",
        phone: "",
        countryCode: "",
      },
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      rules: {
        name: [
          {
            required: true,
            message: "Please input your name",
            trigger: "blur"
          },
          { min: 3, max: 30, message: "min 3 and max 30", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "Please input your login password.",
            trigger: "blur"
          },
          { min: 6, max: 20, message: "min 6 and max 20", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    onSubmit(formName) {
      const self = this;
      console.log('submit!', self.$refs);
      self.$router.push({ path: '/phone' })
      self.$refs[formName].validate( valid => {
        console.log('asdfasfasf: ', valid);

      })
      },
    submitForm(formName) {
      const self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem("ms_username", self.ruleForm.name);
          localStorage.setItem("ms_user", JSON.stringify(self.ruleForm));
          console.log(JSON.stringify(self.ruleForm));
          self.$http
            .post("/api/user/login", JSON.stringify(self.ruleForm))
            .then(response => {
              console.log(response);
              if (response.data == -1) {
                self.errorInfo = true;
                self.errInfo = "该用户不存在";
                console.log("该用户不存在");
              } else if (response.data == 0) {
                console.log("密码错误");
                self.errorInfo = true;
                self.errInfo = "密码错误";
              } else if (response.status == 200) {
                self.$router.push("/readme");
              }
            })
            .then(error => {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleCommand() {
      this.$router.push("/register");
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  }
};
</script>

<style>
img {
  width: 80%;
  height: auto;
}
.top {
  margin-bottom: 80px;
}
.grid-content {
  border: 1px solid #dddddd;
  border-radius: 3px;
  background-color: #ffffff;
}
.in-content {
  margin-left: 60px;
  margin-right: 40px;
}
.title {
  margin-top: 60px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.head {
  display: flex;
  justify-content: flex-start;
}
.info {
  margin-bottom: 30px;
}
.h2 {
  font-size: 24px;
  font-weight: bold;
  color: #a1a1a1;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 28px;
}
.bottom {
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
