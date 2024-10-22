import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import axios from "axios";

// 定义类型
interface AuthStore {
    sendCode: (phone: string) => Promise<void>;
    login: (phone: string, code: string) => Promise<void>;
    isCodeSent: Ref<boolean>; // 使用 Ref 包装类型
    countdown: Ref<number>; // 使用 Ref 包装类型
}

// 定义返回类型为 `AuthStore` 的 Pinia store
export const useAuthStore = defineStore("auth", (): AuthStore => {
    const isCodeSent = ref(false); // 是否已发送验证码
    const countdown = ref(60); // 倒计时

    // 发送验证码函数
    const sendCode = async (phone: string): Promise<void> => {
        try {
            // 请求后端 API接口，传递 phone 参数
            await axios.post(`http://localhost:8080/sms/send?phone=${phone}`);
            isCodeSent.value = true;
            startCountdown(); // 启动倒计时
        } catch (error) {
            console.error("发送验证码失败:", error);
        }
    };

    // 倒计时函数
    const startCountdown = (): void => {
        countdown.value = 60; // 倒计时初始值
        const timer = setInterval(() => {
            if (countdown.value > 0) {
                countdown.value--;
            } else {
                clearInterval(timer);
                isCodeSent.value = false; // 倒计时结束后重置按钮状态
            }
        }, 1000); // 每秒减少一次倒计时
    };

    // 登录函数
    const login = async (phone: string, code: string): Promise<void> => {
        try {
            const res = await axios.post(
                `http://localhost:8080/user/login?phone=${phone}&code=${code}`
            );
            // 登录成功的逻辑
            console.log("登录成功");
            localStorage.setItem("token", res.data.data.accessToken);
        } catch (error) {
            console.error("登录失败:", error);
        }
    };

    return {
        sendCode,
        login,
        isCodeSent, // 直接返回 isCodeSent，而不是 isCodeSent.value
        countdown, // 直接返回 countdown，而不是 countdown.value
    };
});