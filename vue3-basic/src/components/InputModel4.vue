<template>
    <div>
        <select v-model="selectedItem">
            <option disabled value="">请选择一个选项</option>
            <option value="苹果">苹果</option>
            <option value="香蕉">香蕉</option>
            <option value="橘子">橘子</option>
        </select>
        <p>您选择的水果是：{{ selectedItem }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定义下拉菜单的选项状态，初始值为空字符串
const selectedItem = ref<string>('')
</script>

<style scoped></style>