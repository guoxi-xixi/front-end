<template>
  <addition></addition>
  <hr>
  <subtraction></subtraction>
</template>

<script>
import Addition from "./components/Addition.vue";
import Subtraction from "./components/Subtraction.vue";

export default {
  name: "MyApp",
  components: {
    Addition,
    Subtraction,
  },
};
</script>

<style>
</style>
