<template>
  <div class="counter-container">
    <!-- 数量 -1 按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="onSubClick">-</button>
    <!-- 输入框 -->
    <input type="number" class="form-control form-control-sm ipt-num" v-model.number.lazy="number"/>
    <!-- 数量 +1 按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="onAddClick">+</button>
  </div>
</template>

<script>
export default {
    name: 'EsCounter',
    // props只读，无法传值
    props:{
        num:{
            type: Number,
            default: 0,
        },
        min:{
            type: Number,
            default: NaN,
        }
    },
    data(){
        return{
            number: this.num,
        }
    },
    emits:['numChange'],
    watch:{
        number(newVal){
            // 将输入的值转成整数
            const parseResult = parseInt(newVal)
            // 如果转换的结果是非数字或者小于1，则强制 number 的值为1
            if(isNaN(parseResult) || parseResult < 1){
                this.number = 1
                return
            }
            // 如果新值为小数，则把转换的结果赋值给 number
            if(String(newVal).indexOf('.') !== -1 ){
                this.number = parseResult
                return
            }
            // console.log(parseResult)
            // 触发自定义事件，把最新的 number 数值传递给组件的使用者
            this.$emit('numChange',this.number)
        },
    },
    methods:{
        onSubClick(){
            if(!isNaN(this.min) && this.number - 1 < this.min) return
            this.number--
        },
        onAddClick(){
            this.number++
        },
    },
}
</script>

<style lang="less" scoped>
.counter-container {
  display: flex;
  // 按钮的样式
  .btn {
    width: 25px;
  }
  // 输入框的样式
  .ipt-num {
    width: 34px;
    text-align: center;
    margin: 0 4px;
  }
}
</style>