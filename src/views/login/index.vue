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
      <h2 class="login-title">登录</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item class="button-group">
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
        password: 123
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      //   console.log("submit!");
      let { username, password } = this.form;
      if (username == "admin" && password == 123) {
        this.$message({
          message: "登录成功",
          type: "success"
        });
        this.$router.push("/index");
      } else {
        if (username && password) {
          this.$message.error("用户名或密码错误");
        }
      }
    }
  }
};
</script>

<style scoped>
.login-form {
  width: 430px;
  height: 280px;
  margin: 150px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  background-color: #fff;
}
.login-form:hover {
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
</style>