import { ref } from 'vue';

interface SmsOptions {
    phoneNumber: string;
    message: string;
}

// interface SmsStatus {
//     isSending: boolean;
//     canResend: boolean;
//     countdown: number;
//     errorMessage: string | null;
// }

export function useSmsSender() {
    const isSending = ref<boolean>(false); // 是否正在发送
    const canResend = ref<boolean>(true);  // 是否可以重新发送
    const countdown = ref<number>(0);      // 倒计时
    const errorMessage = ref<string | null>(null); // 错误信息

    let countdownTimer: number | null = null;

    // 模拟短信发送，返回一个 Promise 模拟异步发送过程
    const sendSms = async (options: SmsOptions): Promise<void> => {
        if (isSending.value || !canResend.value) return;

        isSending.value = true;
        errorMessage.value = null;

        try {
            // 模拟发送短信延迟
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // 模拟成功或失败的情况
            const isSuccess = Math.random() > 0.2; // 80% 成功率
            if (!isSuccess) {
                throw new Error('短信发送失败，请稍后重试。');
            }

            // 发送成功后开始倒计时
            startCountdown(60); // 假设60秒后才能重发
        } catch (error: any) {
            errorMessage.value = error.message || '短信发送失败。';
        } finally {
            isSending.value = false;
        }
    };

    // 开始倒计时
    const startCountdown = (duration: number) => {
        canResend.value = false;
        countdown.value = duration;

        if (countdownTimer) clearInterval(countdownTimer);

        countdownTimer = window.setInterval(() => {
            if (countdown.value > 0) {
                countdown.value--;
            } else {
                clearInterval(countdownTimer!);
                canResend.value = true;
            }
        }, 1000);
    };

    return {
        isSending,
        canResend,
        countdown,
        errorMessage,
        sendSms
    };
}
