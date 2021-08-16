<template>
  <div class="container">
    <div class="headerWrap">
      <div class="header">
        <img :src="logo" alt="" class="logo" />
        <div class="line"></div>
        <div class="title">管理系统</div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
  name: "UserLayout",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
  min-width: 1440px;
  height: 100vh;
  background-color: rgba(242, 246, 252, 1);

  .headerWrap {
    width: 100%;
    height: 70px;
    background-color: rgba(255, 255, 255, 1);

    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 1440px;
      height: 100%;
      margin: 0 auto;
      padding: 0 196px;
      box-sizing: border-box;

      .logo {
        width: 50px;
        height: 50px;
      }

      .line {
        width: 1px;
        height: 23px;
        margin-right: 15px;
        margin-left: 15px;
        background-color: rgba(153, 153, 153, 1);
      }

      .title {
        height: 28px;
        color: #0b1d31;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
}
</style>