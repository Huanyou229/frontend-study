<template>
    <div>
        <input v-model="searchQuery" placeholder="搜索关键词" />
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
// 定义搜索关键词的状态
const searchQuery = ref<string>('')
// 监听搜索关键词的变化
watch(searchQuery, () => {
    console.log('搜索关键词', searchQuery.value)
})
</script>
<!-- searchQuery 是输⼊框绑定的响应式状态； 
 监听器 watch 监听 searchQuery 的变化，并输出新旧值的变化记录。 
 我们可以使⽤ watch 同时监听多个响应式状态，并在任⼀状态发⽣变化时执⾏相应的逻辑。 -->