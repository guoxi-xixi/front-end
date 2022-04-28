<template>
  <div class="goods-container">
    <!-- 左侧图片区域 -->
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="id"
          :checked="checked"
          @change="oncheckBoxChange"
        />
        <label class="custom-control-label" :for="id">
          <img :src="thumb" alt="商品图片" class="thumb" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="right">
      <!-- 商品名称 -->
      <div class="top">{{ title }}</div>
      <div class="bottom">
        <!-- 商品价格 -->
        <div class="price">¥{{ price }}</div>
        <!-- 商品数量 -->
        <div class="count">
          <es-counter :num="count" :min="1" @numChange="getNumber"></es-counter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EsCounter from '../es-counter/EsCounter.vue'

export default {
  name: "EsGoods",
  props: {
    // 商品id
    id: {
      type: [String, Number],
      required: true,
    },
    // 商品缩略图
    thumb: {
      type: String,
      required: true,
    },
    // 商品名称
    title: {
      type: String,
      required: true,
    },
    // 商品单价
    price: {
      type: Number,
      required: true,
    },
    // 商品数量
    count: {
      type: Number,
      required: true,
    },
    // 勾选状态
    checked: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["stateChange","countChange"],
  methods: {
    oncheckBoxChange(e) {
      // console.log(e.target.checked);
      this.$emit("stateChange", {
        id: this.id,
        value: e.target.checked,
      });
    },
    getNumber(num){
      // console.log(num)
      // 触发自定义事件，向外传递数据对象 {id , value}
      this.$emit('countChange',{
        id: this.id,
        value: num
      })
    },
  },
  components:{
    EsCounter,
  },
};
</script>

<style lang="less" scoped>
.goods-container {
  // 最终生成的选择器为 .goods-container + .goods-container
  // 在css中，‘+’ 是“相邻兄弟选择器”，表示：选择紧连着元素后的另一元素，二者具有相同的父元素
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  display: flex;
  padding: 10px;
  // 左侧图片的样式
  .left {
    margin-right: 10px;
    // 商品图片
    .thumb {
      display: block;
      width: 100px;
      height: 100px;
      background-color: #efefef;
    }
  }
  // 右侧商品名称、单价、数量的样式
  .right {
    display: flex;
    // 设置flex-direction: column;则可以让子div变为一列
    flex-direction: column;
    // space-between：项目间保留一定间距地在主轴排列。第一个和最后一个项目会被挤到容器边沿。例如，在行中第一个项目会紧贴着容器左侧，最后一个项目会紧贴着容器右侧，然后其他项目均匀排布
    justify-content: space-between;
    flex: 1;
    .top {
      font-weight: bold;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}

.custom-control-label::before,
.custom-control-label::after {
  top: 3.4rem;
}
</style>