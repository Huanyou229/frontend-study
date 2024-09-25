<!-- 使⽤计算属性计算折扣价格 -->
<template>
    <div>
        <p>原价：{{ price }}</p>
        <p>折扣：{{ discount }}</p>
        <p>折后价：{{ discountedPrice }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
// 定义商品原价
const price = ref<number>(100)
// 定义折扣
const discount = ref<number>(0.8)
// 定义⼀个计算属性来计算折后价格
const discountedPrice = computed(() => {
    return price.value * discount.value
})
</script>
<!-- price 和 discount 是两个响应式状态； 
 计算属性 discountedPrice 根据 price 和 discount 计算折后价格，当
price 或 discount 变化时， discountedPrice ⾃动更新； 
在 TypeScript 中，可以为计算属性的返回值显式声明类型，以确保代码的类型安全。 -->