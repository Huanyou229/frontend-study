<!-- 使⽤索引渲染列表 -->
<template>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            {{ index + 1 }}. {{ item }}
        </li>
    </ul>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义⼀个字符串数组状态
const items = ref<string[]>(['HTML', 'CSS', 'JavaScript'])
</script>
<!-- 使⽤ v-for 遍历数组，同时获取每⼀项的索引 index ；
通过 index + 1 来显示每项的序号。 -->