<template>
    <div>
        <p>当前计数：{{ count }}</p>
        <button @click="incrementBy(5)">增加 5</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义计数状态
const count = ref<number>(0)
// 定义带参数的⽅法
const incrementBy = (value: number): void => {
    count.value += value
}
</script>
<!-- incrementBy ⽅法接受⼀个 number 类型的参数，并返回 void ； 
 ⽅法通过参数控制 count 增加的值，使其更加灵活。 -->