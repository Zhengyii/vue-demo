<template>
  <el-button :style="outStyle" :disabled="disabled" @click="handleStart">
    {{ title }}
  </el-button>
</template>
<script>
export default {
  name: "CountDown",
  props: {
    // 点击触发的函数
    action: {
      type: Function,
      default: () => {},
    },
    outStyle: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      title: "获取验证码",
      disabled: false, // 按钮是否可用
      timer: null, // 定时器名称
      timerNum: 60, // 定时器时间
    };
  },
  methods: {
    handleStart() {
      // 调用接口
      this.action();
      this.disabled = true;

      this.loading();
      this.timer = setInterval(() => {
        if (this.timerNum === 0) {
          // 定时器结束
          this.timer && this.clearTimer();
        } else {
          this.loading();
        }
      }, 1000);
    },
    // 启动定时器
    loading() {
      console.log("this.timerNum", this.timerNum);
      this.timerNum -= 1;
      this.title = `${this.timerNum}秒`;
    },
    // clearTimer
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
      this.disabled = false;
      this.title = "获取验证码";
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="less" scoped>
</style>