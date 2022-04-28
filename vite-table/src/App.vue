<template>
  <h1>App.vue 根组件</h1>
  <hr />
  <my-table :data="goodsList">
    <template #head>
      <th>序号</th>
      <th>商品名称</th>
      <th>价格</th>
      <th>标签</th>
      <th>操作</th>
    </template>

    <template #body="{ row, index }">
      <td>{{ index + 1 }}</td>
      <td>{{ row.goods_name }}</td>
      <td>¥{{ row.goods_price }}</td>
      <!-- <td>{{ row.tags }}</td> -->
      <td>
        <input
          type="text"
          name=""
          id=""
          class="form-control form-control-sm form-ipt"
          v-if="row.inputVisible"
          v-focus
          v-model.trim="row.inputValue"
          @blur="onInputConfirm(row)"
          @keyup.enter="onInputConfirm(row)"
          @keyup.esc="row.inputValue = ''"
        />
        <button
          class="btn btn-primary btn-sm"
          v-else
          @click="row.inputVisible = 'true'"
        >
          +Tag
        </button>
        <!-- 循环渲染商品标签 -->
        <span
          class="badge badge-warning ml-2"
          v-for="item in row.tags"
          :key="item"
          >{{ item }}</span
        >
      </td>
      <td>
        <!-- 商品删除功能 -->
        <button class="btn btn-danger btn-sm" @click="onRemove(row.id)">
          删除
        </button>
      </td>
    </template>
  </my-table>
</template>

<script>
import MyTable from "./components/my-table/MyTable.vue";

export default {
  name: "MyApp",
  data() {
    return {
      // 商品列表的数据
      goodsList: [],
    };
  },
  methods: {
    // 请求商品列表的数据
    async getGoodsList() {
      const { data: res } = await this.$http.get("/api/goods");
      // console.log(res)
      if (res.status !== 0) return console.log("请求商品数据失败");
      this.goodsList = res.data;
      console.log(this.goodsList);
    },
    // 根据 goods.id删除 商品
    onRemove(id) {
      this.goodsList = this.goodsList.filter((x) => x.id !== id);
    },
    // 确认创建新建tags
    onInputConfirm(row) {
      const val = row.inputValue;
      row.inputValue = "";
      row.inputVisible = false;
      console.log(val);

      // 判断 val 不存在或者 row.tags中已经有 val 则直接return 返回，否则push val到tags中
      if (!val || row.tags.indexOf(val) !== -1) return;
      row.tags.push(val);
    },
  },
  created() {
    // 发起请求
    this.getGoodsList();
  },
  components: {
    MyTable,
  },
  directives: {
    focus(el) {
      el.focus();
    },
  },
};
</script>

<style lang="less" scoped>
.form-ipt {
  display: inline;
  width: 80px;
}
</style>