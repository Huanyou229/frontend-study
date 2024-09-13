<!-- 文本输入框的双向绑定 -->
<template>
    <div>
        <input v-model="name" placeholder="请输⼊姓名" />
        <p>您输⼊的姓名是：{{ name }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义双向绑定的状态
const name = ref<string>('') // 初始值为空字符串
</script>