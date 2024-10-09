import { ref, onUnmounted } from 'vue';

export function useCountdown(initialTime: number = 60) {
    // 定义倒计时剩余时间的 ref 类型
    const timeLeft = ref<number>(initialTime);
    let intervalId: number | null = null;

    // 开始倒计时
    const start = () => {
        if (intervalId) return;  // 防止重复启动
        intervalId = window.setInterval(() => {
            if (timeLeft.value > 0) {
                timeLeft.value--;
            } else {
                stop(); // 时间到，停止倒计时
            }
        }, 1000);
    };

    // 停止倒计时
    const stop = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    };

    // 重置倒计时
    const reset = (newTime: number = initialTime) => {
        stop();
        timeLeft.value = newTime;
    };

    // 组件销毁时清理定时器
    onUnmounted(() => {
        stop();
    });

    return {
        timeLeft,
        start,
        stop,
        reset
    };
}
