<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue'

const el = ref(null)
const { toggle } = useFullscreen(el)
</script>

<template>
    <div class="text-center">
        <div class="flex" p="y-4">
            <video ref="el" class="m-auto rounded" src="https://vjs.zencdn.net/v/oceans.mp4" width="600" controls />
        </div>
        <button @click="toggle">
            全屏
        </button>
    </div>
</template>