<template>
  <div class="mylogin">
    <div class="title">
      <h3>Login Form</h3>
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item prop="zhanghao">
        <el-input placeholder="用户名" v-model="ruleForm.zhanghao"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          placeholder="密码"
          v-model="ruleForm.pass"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm"> 登录 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "MyLogin",
  data() {
    var validatePass = (rule, value, callback) => {
      let zr = /^.{6,10}$/;
      if (zr.test(value)) {
        return;
      } else {
        return callback(new Error("密码格式错误"));
      }
    };
    var validateZhanghao = (rule, value, callback) => {
      let zr = /^.{5,10}$/;
      if (zr.test(value)) {
        return;
      } else {
        return callback(new Error("账号格式错误"));
      }
    };
    return {
      ruleForm: {
        zhanghao: "amdin",
        pass: "123456",
      },
      rules: {
        zhanghao: [{ validator: validateZhanghao, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    async submitForm() {
      let zhanghao = this.ruleForm.zhanghao;
      let pass = this.ruleForm.pass;

      let { data } = await axios.post("/api/login", { zhanghao, pass });
      console.log(data);
      if (data.data.zhuangtai == "chenggong") {
        this.$message({
          message: "恭喜你，这是一条成功消息",
          type: "success",
        });
        localStorage.setItem("token","登录成功")
        this.$router.push({ name: "home" });
      }
      if (data.zhuangtai == "shibai") {
        this.$message({
          message: "恭喜你，这是一条成功消息",
          type: "success",
        });
      }
    },
  },
};
</script>
<style scoped>
.mylogin {
  height: 100vh;
  background: #2d3a4b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
form {
  width: 460px;
  height: 370px;
}
button {
  width: 100%;
}
.title{
  color: #fff;
  padding: 100px
  ;
}
</style>