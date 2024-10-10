<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'

const { files, open, reset, onCancel, onChange } = useFileDialog()
onChange((files: FileList | null) => {
    if (files && files.length > 0) {
        // 将 FileList 转换为数组
        Array.from(files).forEach((file: File) => {
            console.log(`File selected: ${file.name}, size: ${file.size}, type: ${file.type}`)

            // 如果是文本文件，读取文件内容
            if (file.type === 'text/plain') {
                const reader = new FileReader()
                reader.onload = (event) => {
                    console.log('File content:', event.target?.result)
                }
                reader.readAsText(file)
            }

            // 如果是图片文件，读取并显示图片
            if (file.type.startsWith('image/')) {
                const reader = new FileReader()
                reader.onload = (event) => {
                    const img = new Image()
                    img.src = event.target?.result as string
                    // 设置图片的大小
                    img.width = 300;  // 设置宽度为 300 像素
                    img.height = 400; // 设置高度为 300 像素
                    document.body.appendChild(img) // 在页面上显示图片
                }
                reader.readAsDataURL(file)
            }
        })
    }
})



onCancel(() => {
    /** do something on cancel */
})
</script>

<template>
    <button type="button" @click="open()">
        选择文件
    </button>
    <button type="button" :disabled="!files" @click="reset()">
        重置
    </button>
    <template v-if="files">
        <p>你已经选择: <b>{{ `${files.length} ${files.length === 1 ? 'file' : 'files'}` }}</b></p>
        <li v-for="file of files" :key="file.name">
            {{ file.name }}
        </li>
    </template>
</template>