<!-- 复选框的双向绑定 -->
<template>
    <div>
        <input type="checkbox"  v-model="isChecked"/>勾选此项
        <p>复选框状态：{{isChecked ? '已勾选' : '未勾选'}}</p>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

// 定义复选框的绑定状态
const isChecked = ref<boolean>(false) //初始状态为未勾选
</script>

<style scoped>

</style>