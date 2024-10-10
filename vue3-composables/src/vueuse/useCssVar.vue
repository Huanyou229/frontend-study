<script setup lang="ts">
import { useCssVar } from '@vueuse/core' // 引入 useCssVar 函数，用于处理 CSS 变量
import { ref } from 'vue' // 引入 Vue 的 ref 函数，用于创建响应式引用

// 定义一个响应式引用 el，用于引用第一个 <div> 元素
// 初始值为 null，在模板中引用一个 <div> 元素。类型为 HTMLDivElement | null，表示它可以是一个 HTMLDivElement 或 null
const el = ref<HTMLDivElement | null>(null)
// 使用 useCssVar 函数获取与 el 相关联的 CSS 变量 '--color'
const color = useCssVar('--color', el)

// 定义一个切换颜色的函数
function switchColor() {
    // 检查当前颜色值，切换到另一种颜色
    if (color.value === '#df8543') { // 如果当前颜色是橙色
        color.value = '#7fa998' // 切换为绿色
    } else {
        color.value = '#df8543' // 否则切换为橙色
    }
}

// 定义另一个响应式引用 elv，用于引用第二个 <div> 元素
const elv = ref<HTMLDivElement | null>(null)
// 定义一个响应式变量 key，用于跟踪当前使用的 CSS 变量
const key = ref('--color')
// 使用 useCssVar 函数获取与 elv 相关联的 CSS 变量值
const colorVal = useCssVar(key, elv)

// 定义一个函数用于改变 CSS 变量的名称
function changeVar() {
    // 切换 key 的值，以决定使用哪个 CSS 变量
    if (key.value === '--color') {
        key.value = '--color-one' // 切换到 '--color-one'
    } else {
        key.value = '--color' // 否则切换回 '--color'
    }
}
</script>

<template>
    <!-- 第一个 div，显示示例文本并根据 CSS 变量设置颜色 -->
    <div ref="el" style="--color: #7fa998; color: var(--color)">
        示例文本, {{ color }} <!-- 显示当前的 CSS 变量值 -->
    </div>
    <!-- 切换颜色的按钮 -->
    <button @click="switchColor">
        更改颜色
    </button>
    <!-- 第二个 div，显示示例文本，颜色根据 colorVal 设置 -->
    <div ref="elv" style="--color: #7fa998; --color-one: #df8543;" :style="{ color: colorVal || '#000' }">
        <!-- 使用 colorVal 作为颜色，如果为 null 则使用黑色 -->
        示例文本, {{ key }}: {{ colorVal }} <!-- 显示当前使用的 CSS 变量和对应的值 -->
    </div>
    <!-- 改变 CSS 变量的按钮 -->
    <button style="margin-left: 0;" @click="changeVar">
        更改颜色变量
    </button>
</template>
