<template>
  <div class="login-container">
    <el-form
      ref="form"
      :rules="rules"
      status-icon
      :model="form"
      label-width="80px"
      class="login-form"
      style="backgroundColor: #f7f7f7;"
    >
      <h2 class="login-title">实验室助理工作管理系统</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item class="button-group">
        <el-button type="primary" @click="onSubmit()">登录</el-button>
        <el-button>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setToken } from "@/utils/cookie";
import { login } from "@/api/article";

export default {
  data() {
    let validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.form.username !== "") {
          this.$refs.form.validateField("username");
        }
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.password !== "") {
          this.$refs.form.validateField("password");
        }
        callback();
      }
    };
    return {
      form: {
        username: "admin",
        password: "admin@123"
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      // this.$http
      //   .post("user/login", this.form)
      //   .then(res => {
      //     console.log(res);
      //     if (res.data.code == 20000) {
      //       this.$message({
      //         message: "登录成功",
      //         type: "success"
      //       });
      //       this.$router.push("/");
      //       // 存储token的值
      //       setToken(res.data.data.token);
      //     } else {
      //       this.$message.error("用户名或密码错误");
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });

      // 使用封装好的接口
      login(this.form)
        .then(res => {
          // console.log(res);
          if (res.code == 20000) {
            this.$message({
              message: "登录成功",
              type: "success"
            });
            this.$router.push("/");
            // 存储token的值
            setToken(res.data.token);
          } else {
            this.$message.error("用户名或密码错误");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
.login-form {
  width: 430px;
  height: 280px;
  margin: 150px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  &:hover {
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.5);
  }
  .login-title {
    text-align: center;
  }
  .el-input {
    width: 300px;
  }
  .button-group {
    text-align: center;
  }
}
</style>