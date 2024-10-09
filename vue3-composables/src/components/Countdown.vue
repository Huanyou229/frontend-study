<template>
    <div>
        <p>倒计时: {{ timeLeft }} 秒</p>
        <button @click="start">开始</button>
        <button @click="stop">停止</button>
        <!-- 如果需要动态传递新的时间 -->
        <button @click="() => reset(45)">重置为 45 秒</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCountdown } from '../composables/useCountdown';

export default defineComponent({
    setup() {
        const { timeLeft, start, stop, reset } = useCountdown(30);
        return {
            timeLeft,
            start,
            stop,
            reset
        };
    }
});
</script>
<style scoped>
button {
    margin-right: 10px;
}
</style>
