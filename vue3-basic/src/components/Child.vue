<template>
    <button @click="notifyParent">通知⽗组件</button>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue'
// 定义 emit 事件
const emit = defineEmits(['notify'])
// 通知⽗组件的函数
const notifyParent = (): void => {
    emit('notify', '⼦组件已点击按钮')
}
</script>