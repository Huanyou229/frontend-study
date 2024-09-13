<template>
    <div>
        <!-- 在父组件中，通过v-bind 动态绑定自定义属性custom-attr -->
        <CustomButton :custom-attr="customValue">⾃定义按钮</CustomButton>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from './CustomButton.vue'
// ⾃定义属性值
const customValue = ref<string>('我是⾃定义属性')
</script>