<template>
  <h3>watch 监听器的用法</h3>
  <!-- <input type="text" name="" id="" class="form-control" v-model="username" /> -->
  <input
    type="text"
    name=""
    id=""
    class="form-control"
    v-model.trim="info.username"
  />
</template>

<script>
import axios from "axios";

export default {
  name: "MyWatch",
  data() {
    return {
      username: "admin",
      info: {
        username: "zs",
        age: 20,
      },
    };
  },
  watch: {
    /* 
    //   监听 username 值的变化
    // 形参中 第一个值为 变化后的新值，第二个为 变化前的旧值
      username(newVal, oldVal){
          console.log("new:"+newVal,",old:"+oldVal)
      },
     */
    /* 
    // 不能刷新立即请求
    async username(newVal, oldVal){
        console.log("new:"+newVal+',',"old:"+oldVal)
        const {data:res} = await axios.get('https://www.escook.cn/api/finduser/'+newVal)
        console.log(res)
    },
     */
    /* 
    // 只能 监听 值，无法监听对象
    username:{
        async handler(newVal,oldVal){
            console.log("new:"+newVal+',',"old:"+oldVal)
            const {data:res} = await axios.get('https://www.escook.cn/api/finduser/'+newVal)
            console.log(res)
        },
        // 立即触发 watch 监听器
        immediate: true,
    },
     */
/* 
    // 会监听整个数组中值的变化,直接监听info 对象的变化
    info: {
      // 旧值不需要监听可以省略
      async handler(newVal) {
        // console.log("new:"+newVal+',',"old:"+oldVal)
        const { data: res } = await axios.get(
          "https://www.escook.cn/api/finduser/" + newVal.username
        );
        console.log(res);
      },
      // 立即触发 watch 监听器
      // immediate: true,
      // 监听对象 需要使用deep，否则无法监听到 username
      deep: true,
    },
     */
    // 只监听对象中单个属性的变化
    'info.username': {
      // 旧值不需要监听可以省略
      async handler(newVal) {
        // console.log("new:"+newVal+',',"old:"+oldVal)
        const { data: res } = await axios.get(
          "https://www.escook.cn/api/finduser/" + newVal
        );
        console.log(res);
      },
      // 立即触发 watch 监听器
      // immediate: true,
      // 监听对象 需要使用deep，否则无法监听到 username
      deep: true,
    },
  },
};
</script>

<style>
</style>