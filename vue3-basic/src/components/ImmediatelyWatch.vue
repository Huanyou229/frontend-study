<!-- ⽴即执⾏的监听器 -->
<template>
    <div>
        <input v-model="userName" placeholder="输⼊⽤户名" />
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
// ⽤户名状态
const userName = ref<string>('张三')
// ⽴即执⾏监听器
watch(userName, (newName) => {
    console.log(`⽤户名为：${newName}`)
}, { immediate: true })
</script>
<!-- immediate: true 选项确保在组件加载时，监听器⽴即执⾏，并打印初始的⽤户名。 -->