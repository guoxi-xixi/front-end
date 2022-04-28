<template>
  <div
    class="header_container"
    :style="{ backgroundColor: bgcolor, color: color }"
  >
    {{ title || "Header 组件" }}
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  props: ["title", "bgcolor", "color"],
};
</script>
<style lang="less" scoped>
.header_container {
  height: 45px;
  background-color: greenyellow;
  text-align: center;
  line-height: 45px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
</style>