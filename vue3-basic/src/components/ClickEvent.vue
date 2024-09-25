<!-- 点击按钮触发事件 -->
<template>
    <button @click="handleClick">点击我</button>
    <p>{{ message }}</p>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义⼀个消息状态
const message = ref<string>('还没有点击按钮')
// 事件处理函数
const handleClick = (): void => {
    message.value = '按钮已被点击'
}
</script>
<!-- @click ⽤于监听按钮的点击事件； 
 当点击按钮时，触发 handleClick ⽅法，将 message 更新为 "按钮已被点击" -->