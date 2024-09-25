<!-- 阻⽌事件冒泡 -->
<template>
    <div @click="handleOuterClick">
        <button @click.stop="handleButtonClick">点击按钮</button>
    </div>
</template>
<script setup lang="ts">
// import { ref } from 'vue';

// 处理外层 div 的点击事件
const handleOuterClick = (): void => {
    alert('点击了外层 div')
}
// 处理按钮的点击事件
const handleButtonClick = (): void => {
    alert('点击了按钮')
}
</script>
<!-- @click.stop 阻⽌了按钮点击事件向外层 div 冒泡； 点击按钮时，只会触发 handleButtonClick ，不会触发外层 div 的 handleOuterClick 。
.once 使得事件处理器只执⾏⼀次，事件触发后即解绑。 -->