import { createStore } from "vuex";

// 创建store数据源，提供唯一公共数据
export default createStore({
  // State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储。
  state: {
    count: 0,
  },
  // Getter 用于对 Store 中的数据进行加工处理形成新的数据
  // Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性。
  getters: {
    showNum(state) {
      return "当前最新数据是【" + state.count + "】";
    },
  },
  // 只有在 mutations 中定义的函数，才有权利修改 state 中的数据
  mutations: {
    add(state) {
      // 不能在 mutations 中执行异步操作
      // setTimeout(() => {
      //   state.count++;
      // }, 1000);
      state.count++;
    },
    addN(state, step) {
      state.count += step;
    },
    sub(state) {
      state.count--;
    },
    subN(state, step) {
      state.count -= step;
    },
  },
  // Action 用于处理异步任务
  // 如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发 Mutation 的方式间接变更数据。
  actions: {
    addAsync(context) {
      setTimeout(() => {
        // 在 actions 中，不能直接修改 state 中的数据
        // 必须通过 context.commit() 触发 mutations 中的函数才行
        context.commit("add");
      }, 1000);
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit("addN", step);
      }, 1000);
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit("sub");
      }, 1000);
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit("subN", step);
      }, 1000);
    },
  },
  modules: {},
});
