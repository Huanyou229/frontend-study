<template>
    <div>
        <p>当前计数：{{ count }}</p>
        <button @click="increment">增加计数</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 使⽤ ref 定义基础类型的响应式状态
const count = ref<number>(0)
// 定义增加计数的⽅法
const increment = (): void => {
    count.value++
}
</script>
<!-- count 是⼀个 ref ，它包裹了⼀个数字类型的状态。初始值为 0，类型为 number ；
通过 count.value++ 修改状态，Vue 会⾃动更新视图。 -->