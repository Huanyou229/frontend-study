<template>
    <button @click="increment(5)">增加 5</button>
    <p>当前计数：{{ count }}</p>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 计数状态
const count = ref<number>(0)
// 事件处理函数，增加指定数值
const increment = (value: number): void => {
    count.value += value
}
</script>