<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'

const { textarea, input } = useTextareaAutosize()
</script>

<template>
    <div>
        <p>根据内容自动更新 textarea 的高度:</p>
        <textarea ref="textarea" v-model="input" class="resize-none" placeholder="写下你的想法~" />
    </div>
</template>
<style scoped>
textarea {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

textarea::-webkit-scrollbar {
    display: none;
}
</style>