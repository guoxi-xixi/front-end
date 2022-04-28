import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // 所有任务列表
    list: [],
    inputValue: '',
    // 下一个id
    nextId: 5,
    // button 状态
    viewKey: 'all',
  },
  getters: {
    // 统计未完成的任务条数
    unDoneLength(state) {
      return state.list.filter((x) => x.done === false).length
    },
    // 任务列表
    infoList(state) {
      switch (state.viewKey) {
        case 'all':
          return state.list
          break
        case 'undone':
          return state.list.filter((x) => x.done === false)
          break
        case 'done':
          return state.list.filter((x) => x.done === true)
          break
      }
    },
  },
  mutations: {
    initList(state, list) {
      state.list = list
    },
    // 为store 中的 inputValue 赋值
    setInputValue(state, val) {
      state.inputValue = val
    },
    // 添加列表项
    addItem(state) {
      const obj = {
        id: state.nextId,
        info: state.inputValue.trim(),
        done: false,
      }
      state.list.push(obj)
      state.nextId++
      state.inputValue = ''
    },
    // 删除列表项
    removeItem(state, id) {
      // 根据id删除列表项
      state.list = state.list.filter((x) => x.id !== id)
    },
    // 修改列表项的选中状态
    changeStatus(state, param) {
      const i = state.list.findIndex((x) => x.id === param.id)
      if (i !== -1) {
        state.list[i].done = param.done
      }
    },
    // 清除已完成任务
    cleanDone(state) {
      state.list = state.list.filter((x) => x.done !== true)
    },
    // 修改视图的关键字
    changeViewKey(state, key) {
      state.viewKey = key
    },
  },
  actions: {
    getList(context) {
      axios.get('/list.json').then(({ data }) => {
        console.log(data)
        context.commit('initList', data)
      })
    },
  },
  modules: {},
})
