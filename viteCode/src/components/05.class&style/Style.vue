<template>
    <!-- <h3 class="thin" :class="isItalic ? 'italic' : ''">MyStyle 组件</h3> -->
    <!-- 元素需要动态绑定多个 class 的类名，此时可以使用数组的语法格式 -->
    <!-- <h3 class="thin" :class="[isItalic ? 'italic' : '', isDelete ? 'delete' : '']">MyStyle 组件</h3>
    <button @click="isItalic = !isItalic">Toggle Italic</button>
    <button @click="isDelete = !isDelete">Toggle Delete</button> -->

    <!-- 使用对象语法进行简化 -->
    <h3 class="thin" :class="classObj">MyStyle 组件</h3>
    <button @click="classObj.italic = !classObj.italic">Toggle Italic</button>
    <button @click="classObj.delete = !classObj.delete">Toggle Delete</button>
    <hr>
    <!-- style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS property 名可以用驼 峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名 -->
    <div :style="{ color: active, fontSize: fsize+'px', 'background-color': bgcolor }">Vue 练习</div>
    <button @click="fsize+=1">字号 +1</button>
    <button @click="fsize-=1">字号 -1</button>
</template>

<script>
export default {
    name: 'MyStyle',
    data(){
        return{
            // 字体是否倾斜
            isItalic: false,
            // 是否应用删除效果
            isDelete: false,
            classObj:{  // 属性是 class 类名，值是 boolean
                italic: false,
                delete: false,
            },
            // 高亮时的文本颜色
            active: 'red',
            // 字号大小
            fsize: 20,
            // 背景色
            bgcolor: 'greenyellow'
        }
    }
}
</script>
<style>
/* 字体变细 */
.thin{
    font-weight: 200;
}
/* 倾斜字体 */
.italic{
    font-style: italic;
}
/* 删除线 */
.delete{
    text-decoration: line-through;
}
</style>