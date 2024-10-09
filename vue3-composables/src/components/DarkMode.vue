<template>
    <div>
        <!-- 显示当前模式 -->
        <p>当前模式: {{ isDark ? '夜间模式' : '白天模式' }}</p>

        <!-- 绑定点击事件来切换模式 -->
        <button @click="handleToggleDark">
            切换到 {{ isDark ? '白天模式' : '夜间模式' }}
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDarkMode } from '../composables/useDarkMode'; // 引入封装好的 useDarkMode 组合式函数

export default defineComponent({
    setup() {
        // 调用 useDarkMode 组合式函数，获取 isDark 和 toggleDark
        const { isDark, toggleDark } = useDarkMode();

        // 创建一个包装函数，来处理 @click 事件
        const handleToggleDark = () => {
            toggleDark(); // 直接调用 toggleDark 来切换模式
        };

        return {
            isDark,
            handleToggleDark // 暴露给模板使用
        };
    }
});
</script>

<style>
/* 自定义一些样式，区分白天和夜间模式 */
html.dark {
    background-color: #121212;
    color: white;
}

html {
    background-color: white;
    color: black;
}
</style>