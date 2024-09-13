<!-- 计算属性类型声明 -->
<template>
    <div>
        <p>年薪：{{ yearlySalary }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
// 定义⽉薪状态
const monthlySalary = ref<number>(5000)
// 计算年薪，并使⽤ TypeScript 显式声明返回值类型
const yearlySalary = computed<number>(() => {
    return monthlySalary.value * 12
})
</script>
<!-- yearlySalary 计算年薪，使⽤ computed<number> 明确其返回值类型为 number ，增 强了代码的可读性和安全性。 
 计算属性依赖于响应式数据，并根据这些依赖进⾏计算。当依赖的数据没有变化时，计算属性不会 重复计算。 -->