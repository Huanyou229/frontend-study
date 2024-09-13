<!-- 阻⽌表单提交 -->
<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="inputValue" placeholder="输⼊内容" />
        <button type="submit">提交</button>
    </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义输⼊框状态
const inputValue = ref<string>('')
// 提交事件处理函数
const handleSubmit = (): void => {
    console.log(`提交的内容：${inputValue.value}`)
}
</script>
<!-- @submit.prevent 阻⽌了表单的默认提交⾏为（⻚⾯刷新）；
事件处理函数 handleSubmit 打印表单输⼊的内容⽽不提交表单。
.stop ⽤于阻⽌事件冒泡，等同于调⽤ event.stopPropagation() 。 -->