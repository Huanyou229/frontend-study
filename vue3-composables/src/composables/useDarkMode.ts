import { watch } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

// 定义白天/夜间模式的组合式函数
export function useDarkMode() {
    // 使用 VueUse 的 useDark，检查是否处于暗模式
    const isDark = useDark();

    // 创建一个切换暗模式的函数
    const toggleDark = useToggle(isDark);

    // 也可以使用 `watch` 来监听模式变化
    watch(isDark, (newValue) => {
        console.log('当前模式:', newValue ? '夜间模式' : '白天模式');
    });

    return {
        isDark,
        toggleDark
    };
}
