<!-- 阻⽌事件冒泡 -->
<template>
    <div @click="handleOuterClick">
        <button @click.stop="handleButtonClick">点击按钮</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

// 处理外层 div 的点击事件
const handleOuterClick = (): void => {
    alert('点击了外层 div')
}
// 处理按钮的点击事件
const handleButtonClick = (): void => {
    alert('点击了按钮')
}
</script>
<!-- 使⽤ .once 修饰符保证 handleClickOnce ⽅法仅在第⼀次点击时触发， 之后再点击按钮不会再次触发该事件 -->