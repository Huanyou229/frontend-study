<template>
    <div>
        <!-- 绑定 disabled 属性 -->
        <button :disabled="isDisabled">点击我</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义响应式的布尔变量
const isDisabled = ref<boolean>(false)
</script>

<!-- :disabled 是 v-bind:disabled 的简写，它绑定了 isDisabled 变量； 
 在 TypeScript 中，使⽤ ref<boolean> 来确保 isDisabled 是布尔类型； 
 如果 isDisabled 为 true ，按钮将被禁⽤，反之则可点击。 -->