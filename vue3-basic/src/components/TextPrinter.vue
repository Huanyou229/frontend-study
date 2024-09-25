<template>
    <div class="text-printer">
        <el-transition name="fade">
            <span v-if="visible" class="animated-text">{{ displayText }}</span>
        </el-transition>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const fullText = "欢迎来到Huanyou的博客！"; // 要打印的完整文字
const displayText = ref(""); // 当前显示的文字
const visible = ref(false);

const startPrinting = () => {
    displayText.value = ""; // 重置显示的文字
    visible.value = true; // 显示文本

    let index = 0;
    const interval = setInterval(() => {
        if (index < fullText.length) {
            displayText.value += fullText[index];
            index++;
        } else {
            clearInterval(interval);
            // 等待一段时间后，清空文本并重新开始打印
            setTimeout(() => {
                visible.value = false; // 隐藏文本
                setTimeout(() => {
                    startPrinting(); // 重新开始打印
                }, 500); // 等待500ms后重新开始
            }, 1000); // 等待1秒后清空文本并重新打印
        }
    }, 100); // 每100ms打印一个字符
};

// 在组件挂载后开始打印
onMounted(() => {
    startPrinting();
});
</script>

<style scoped>
.text-printer {
    font-size: 24px;
    margin: 20px;
}

.animated-text {
    display: inline-block;
    font-weight: bold;
    /* 设置为粗体 */
    background: linear-gradient(90deg, #2575fc, #6a11cb);
    /* 蓝紫渐变 */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* 文字填充透明 */
    opacity: 0;
    animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
</style>