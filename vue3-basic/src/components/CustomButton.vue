<template>
    <button>{{ customAttr }}</button>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
// 在CustomButton 组件中，使用defineProps声明接受的属性，并指定其类型为string
// 使⽤ defineProps 声明⾃定义属性
defineProps<{
    customAttr: string
}>()
</script>