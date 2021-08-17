<template>
  <el-form
    ref="verifyForm"
    :model="verifyForm"
    :rules="rules"
    status-icon
    style="width: 320px; margin: 0 auto"
  >
    <el-form-item prop="password">
      <el-input
        v-model="verifyForm.password"
        placeholder="请输入密码"
        type="password"
      ></el-input>
    </el-form-item>

    <el-form-item prop="checkPassword">
      <el-input
        v-model="verifyForm.checkPassword"
        placeholder="请输入确认密码"
        type="password"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        style="width: 100%"
        @click="handleNext('verifyForm')"
      >
        下一步
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Step2",
  props: {
    active: {
      type: Number,
    },
  },
  data() {
    // 校验密码是否一致
    const checkPass = (rule, value, callback) => {
      if (value && value !== this.verifyForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      verifyForm: {
        password: "", // 手机号
        checkPassword: "", // 手机号
      },
      rules: {
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkPassword: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          { validator: checkPass, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 提交表单
    handleNext(formName) {
      console.log(this.verifyForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message.success("提交成功");
          this.$router.push("/user/forget/step3");
          this.$emit("viewIn", 2);
        }
      });
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
