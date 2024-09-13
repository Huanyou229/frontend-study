<!-- 遍历数组渲染列表 -->
<template>
    <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义⼀个数组状态
const items = ref<string[]>(['苹果', '⾹蕉', '橘⼦'])
</script>
<!-- 使⽤ v-for 遍历 items 数组，并为每个项⽬⽣成⼀个 li 标签；
:key 是唯⼀标识符，⽤于优化 Vue 的虚拟 DOM 渲染。 -->