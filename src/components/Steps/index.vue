<template>
  <div class="stepsWrap">
    <div
      :class="fetchClass(index)"
      :style="fetchWidth"
      v-for="(item, index) in stepsList"
      :key="index"
    >
      {{ index + 1 }}.{{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FormSteps",
  props: {
    stepsList: {
      type: Array,
      required: true,
      default: () => {
        return ["安全验证", "重置密码", "完成"];
      },
    },
    active: {
      type: Number,
      required: true,
      default: 2,
    },
  },
  data() {
    return {};
  },
  computed: {
    fetchWidth() {
      return `width: ${100 / this.stepsList.length}%`;
    },
  },
  methods: {
    fetchClass(index) {
      return index === this.active
        ? "stepItem active"
        : index > this.active
        ? "stepItem after"
        : "stepItem";
    },
  },
};
</script>

<style lang="less" scoped>
.stepsWrap {
  width: 100%;
  height: 40px;
  margin: 0 auto;
  // 完结步骤
  .stepItem {
    height: 40px;
    display: inline-block;
    text-align: center;

    background: rgba(255, 255, 255, 1);
    color: #409eff;
    line-height: 40px;
    position: relative;

    &::after {
      position: absolute;
      width: 0;
      height: 0;
      border-top: 20px solid transparent;
      border-left: 20px solid rgba(255, 255, 255, 1);
      border-bottom: 20px solid transparent;
      right: -20px;
      z-index: 1;
      content: "";
    }
    // 取消最后一个三角形
    &:last-child::after {
      z-index: 1;
      width: 0;
      height: 0;
      border: none;
      content: "";
    }
  }
  // 当前步骤
  .active {
    background: #409eff;
    color: rgba(255, 255, 255, 1);
    &::after {
      border-left: 20px solid #409eff;
    }
  }
  // 后续步骤
  .after {
    background: rgb(202, 200, 200);
    color: rgba(255, 255, 255, 1);
    &::after {
      border-left: 20px solid rgb(202, 200, 200);
    }
  }
}
</style>