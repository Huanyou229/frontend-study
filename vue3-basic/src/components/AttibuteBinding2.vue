<!-- 绑定多个属性 -->
<template>
    <div>
        <button v-bind="buttonAttrs">点击我</button>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
// 定义⼀个包含多个属性的对象
const buttonAttrs = reactive({
    disabled: false,
    title: '按钮已禁⽤',
    id: 'unique-button',
})
</script>
<!--使用 reactive 创建一个包含多个属性的响应式对象;
v-bind 绑定整个 buttonAttrs 对象到按钮上，其中的 disabled、title 和
id 属性会自动绑定到按钮的相应 HTML 属性中  -->
