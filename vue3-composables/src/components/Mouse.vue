<!--
 * @Author: ctynt
 * @Date: 2024-10-08 10:48:22
 * @LastEditors: ctynt
 * @LastEditTime: 2024-10-08 10:48:29
-->
<template>
    <div>
        <p>鼠标位置：x：{{ x }}，y：{{ y }}</p>

    </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()
</script>

<style scoped>

</style>