<template>
    <div>
        <p>当前用户：{{ userName }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义⼀个响应式状态
const userName = ref<string>('张三')
</script>
<!-- {{ userName }} ⽤于动态显示 userName 状态的值。 
  当 userName 改变时，模板会⾃动更新显示。 
  插值语法不仅可以插⼊变量，还可以插⼊简单的 JavaScript 表达式。 -->