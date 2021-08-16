<template>
  <div style="width: 300px; margin: 0 auto">
    <el-form ref="loginForm" :model="loginForm">
      <el-form-item prop="name">
        <el-input
          v-model="loginForm.name"
          prefix-icon="iconfont icon-user"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          prefix-icon="iconfont icon-lock"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>

      <div class="forgetWrap">
        <el-link :underline="false" type="primary" href="/user/register">
          立即注册
        </el-link>
        <el-link :underline="false" type="primary" href="/user/forget">
          忘记密码
        </el-link>
      </div>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit('loginForm')"
          style="width: 100%"
        >
          登录
        </el-button>
        <!-- <el-button @click="resetForm('loginForm')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "LoginForm",
  data() {
    return {
      loginForm: {
        name: "",
        password: "",
      },
    };
  },
  computed: {},
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // const par
          store.dispatch("GenerateLogin", this.loginForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
  },
};
</script>

<style lang="less" scoped>
.forgetWrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}
</style>