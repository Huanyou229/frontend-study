<!-- 使用:class 绑定一个对象，其中的键是类名，值是布尔值，决定是否应用该类;
toggleClass 函数切换类名，每次点击按钮都会切换段落的样式;
在TypeScript 中，paragraphClass 的类型定义为{[key:string]: boolean
确保键是字符串，值是布尔值 -->
<template>
    <div>
        <p :class="paragraphClass">这是⼀段⽂字</p>
        <button @click="toggleClass">切换样式</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义响应式类名
const isHighlight = ref<boolean>(false)
// 动态切换类名
const paragraphClass = ref<{ [key: string]: boolean }>({
    isHighlight: isHighlight.value,
    normal: !isHighlight.value,
})
// 切换类的函数
const toggleClass = () => {
    isHighlight.value = !isHighlight.value
    paragraphClass.value = {
        isHighlight: isHighlight.value,
        normal: !isHighlight.value,
    }
}
</script>
<style scoped>
 .isHighlight {
     color: red;
 }

 .normal {
     color: black;
 }
</style>