<!-- 定义⽆参数的⽅法 -->
<template>
    <div>
        <p>当前温度：{{ temperature }}°C</p>
        <button @click="increaseTemp">增加温度</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义温度状态
const temperature = ref<number>(20)
// 定义增加温度的⽅法
const increaseTemp = (): void => {
    temperature.value++
}
</script>
<!-- increaseTemp ⽅法⽆参数，返回类型为 void ； 该⽅法通过操作 temperature.value 来增加温度，Vue ⾃动处理视图更新。 -->