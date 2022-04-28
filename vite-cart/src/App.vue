<template>
  <div class="app-container">
    <es-header title="购物车案例"></es-header>
    <es-goods
      v-for="item in goodList"
      :key="item.id"
      :id="item.id"
      :thumb="item.goods_img"
      :title="item.goods_name"
      :price="item.goods_price"
      :count="item.goods_count"
      :checked="item.goods_state"
      @stateChange="onGoodsStateChange"
      @countChange="onGoodsCountChange"
    ></es-goods>
    <es-footer
      :amount="amount"
      :total="total"
      @fullChange="onFullStateChange"
    ></es-footer>
  </div>
</template>

<script>
import EsHeader from "./components/es-header/EsHeader.vue";
import EsFooter from "./components/es-footer/EsFooter.vue";
import EsGoods from "./components/es-goods/EsGoods.vue";

export default {
  name: "MyApp",
  components: {
    EsHeader,
    EsFooter,
    EsGoods,
  },
  data() {
    return {
      // 商品列表数据
      goodList: [],
    };
  },
  created() {
    this.getGoodList();
  },
  methods: {
    // 获取商品列表数据的方法
    async getGoodList() {
      const { data: res } = await this.$http.get("/api/cart");
      // console.log(res)
      if (res.status !== 200) return alert("获取商品列表失败！");
      this.goodList = res.list;
    },
    // 监听选中状态变化的事件
    onFullStateChange(isFull) {
      // console.log(isFull);
      // 商品列表全选
      this.goodList.forEach((x) => x.goods_state = isFull);
    },
    // 监听商品选中状态变化的事件
    onGoodsStateChange(e) {
      console.log(e);
      // 在商品列表中找出 商品状态变化的 id
      const findResult = this.goodList.find((x) => x.id === e.id);
      if (findResult) {
        // 如果商品存在，修改商品的选中状态
        findResult.goods_state = e.value;
      }
    },
    // 监听商品数量变化的事件
    onGoodsCountChange(e){
      console.log(e)
      // 根据id查找商品
      const findResult = this.goodList.find(x=>x.id === e.id)
      if(findResult){
        findResult.goods_count = e.value
      }
    },
  },
  computed: {
    // 已勾选商品的价格
    amount() {
      let a = 0;
      this.goodList
        .filter((x) => x.goods_state === true)
        .forEach((x) => {
          a += x.goods_price * x.goods_count;
        });
      return a;
    },
    // 已勾选商品的总量
    total() {
      let t = 0;
      this.goodList
        .filter((x) => x.goods_state === true)
        .forEach((x) => {
          t += x.goods_count;
        });
      return t;
    },
  },
};
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>