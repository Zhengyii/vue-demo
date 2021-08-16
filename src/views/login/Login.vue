<template>
  <div class="contentWrap">
    <div class="homeImg"></div>
    <div class="loginWrap">
      <div class="loginTitle">登录</div>
      <login-form></login-form>
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
export default {
  name: "LoginPage",
  components: { LoginForm },
};
</script>

<style lang="less" scoped>
.contentWrap {
  display: flex;
  flex-direction: row;
  width: 1050px;
  height: 500px;
  margin: 85px auto auto auto;
  background-color: rgba(255, 255, 255, 1);

  .homeImg {
    width: 50%;
    height: 100%;
    background: url("../../assets/homeImg.png") no-repeat;
    background-size: cover;
  }

  .loginWrap {
    flex: 1;
    padding: 53px 70px 109px 80px;

    .loginTitle {
      height: 50px;
      margin-bottom: 70px;
      color: #1960d1;
      font-weight: 600;
      font-size: 36px;
      line-height: 50px;
    }
  }
}
</style>