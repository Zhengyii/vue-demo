<template>
  <el-form
    ref="verifyForm"
    :model="verifyForm"
    :rules="rules"
    status-icon
    style="width: 320px; margin: 0 auto"
  >
    <el-form-item prop="phone">
      <el-input
        v-model="verifyForm.phone"
        placeholder="请输入手机号"
      ></el-input>
    </el-form-item>

    <el-form-item style="height: 40px">
      <el-col :span="11">
        <el-input
          v-model="verifyForm.verifyCode"
          placeholder="请输入图片验证码"
          style="width: 100%"
        ></el-input>
      </el-col>

      <el-col :span="11" :offset="2">
        <img :src="codeImg" alt="" class="codeImg" />
      </el-col>
    </el-form-item>

    <el-form-item>
      <el-col :span="11">
        <el-input
          v-model="verifyForm.phoneCode"
          placeholder="请输入手机验证码"
        ></el-input>
      </el-col>
      <el-col :span="11" :offset="2">
        <count-down
          :outStyle="countDownStyle"
          :action="handleClick"
        ></count-down>
      </el-col>
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
import codeImg from "@/assets/code.jpeg";
import CountDown from "@/components/CountDown";
import { checkPhoneNum } from "@/utils/checkRules";
export default {
  name: "Step1",
  components: { CountDown },
  props: {
    active: {
      type: Number,
    },
  },
  data() {
    return {
      codeImg,
      verifyForm: {
        phone: "", // 手机号
        verifyCode: "", // 图片验证码
        phoneCode: "", // 手机验证码
      },
      countDownStyle: { width: "100%" },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkPhoneNum, trigger: "blur" },
        ],
        verifyCode: [
          { required: true, message: "请输入图片验证码", trigger: "blur" },
        ],
        phoneCode: [
          { required: true, message: "请输入手机验证码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 触发验证码发送
    handleClick() {},
    // 提交表单
    handleNext(formName) {
      console.log(this.verifyForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message.success("提交成功");
          this.$router.push("/user/forget/step2");
          this.$emit("viewIn", 1);
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
