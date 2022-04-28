<template>
  <div>
    <p>数量：{{ count }}</p>
    <p>状态：{{ state }}</p>
  </div>
</template>
<script>
export default {
  name: "MyCount",
  //   props: ["count", "state"],
  props: {
    /* //   指定数据类型
    count: Number,
    state: Boolean, */
    count: {
      type: Number, // 指定数据类型
      required: true, // 是否必填字段
      default: 100, // 默认值
    },
    state: Boolean,
    info: [String, Number], // 指定多个数据类型
    type: { //指定自定义的验证函数，从而对 prop 属性的值进行更加精确的控制
      // 通过validator函数，对type属性的值进行校验，‘属性的值’通过形参value接收
      validator(value) {
        return ["success", "wraning", "danger"].indexOf(value) !== -1;
      },
    },
  },
};
</script>