<template>
  <div class="registerWrap">
    <form-steps :stepsList="stepsList" :active="active"></form-steps>
    <div class="register">
      <div class="title">{{ stepsList[active] }}</div>
      <router-view v-on:viewIn="handleActive"></router-view>
    </div>
  </div>
</template>

<script>
import FormSteps from "@/components/Steps";
export default {
  name: "registerPage",
  components: { FormSteps },
  data() {
    return {
      stepsList: ["安全验证", "重置密码", "完成"],
      active: 0,
    };
  },
  methods: {
    // 修改当前
    handleActive(v) {
      this.active = v;
    },
  },
};
</script>
<style lang="less" scoped>
.registerWrap {
  width: 1200px;
  margin: 0 auto;
  margin-top: 32px;
}

.register {
  width: 800px;
  height: 400px;
  margin: 32px auto;
  background: #fff;
  padding: 32px;
  .title {
    height: 28px;
    font-size: 20px;
    font-weight: 500;
    color: #409eff;
    line-height: 28px;
    margin-bottom: 32px;
  }
}
</style>