<template>
  <el-result icon="success" title="重置密码成功" subTitle="请前往登录页">
    <template slot="extra">
      <el-button type="primary" size="medium" @click="handleLogin">
        去登录
      </el-button>
    </template>
  </el-result>
</template>

<script>
export default {
  name: "Step3",

  props: {
    active: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleLogin() {
      this.$router.push("/user/login");
    },
  },
};
</script>

<style lang="less" scoped>
.codeImg {
  width: 100%;
  height: 40px;
  border-radius: 4px;
}
</style>
