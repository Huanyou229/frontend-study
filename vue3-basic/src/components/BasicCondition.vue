<!-- 基本的条件渲染 -->
<template>
    <div>
        <p v-if="isVisible">这个⽂本是可⻅的。</p>
        <p v-else>这个⽂本是隐藏的。</p>
        <button @click="toggleVisibility">切换显示状态</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义⼀个布尔状态来控制显示
const isVisible = ref<boolean>(true)
// 定义切换显示状态的⽅法
const toggleVisibility = (): void => {
    isVisible.value = !isVisible.value
}
</script>
<!-- 使⽤ isVisible 状态来控制⽂本的显示与隐藏； 
 当点击按钮时，调⽤ toggleVisibility ⽅法，切换 isVisible 的值，并且根据其 值显示不同的⽂本。 -->