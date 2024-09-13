<!-- 使⽤ .number 修饰符 -->
<template>
    <div>
        <input v-model.number="age" type="number" placeholder="请输⼊年龄" />
        <p>您的年龄是：{{ age }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义年龄的状态
const age = ref<number | null>(null)
</script>