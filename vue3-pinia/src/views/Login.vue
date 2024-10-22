<template>
    <div class="login-container">
        <h2>登录</h2>
        <input v-model="phone" placeholder="请输入手机号" class="input-field" />
        <button @click="sendCode" class="code-button" :disabled="isCounting">
            {{ isCounting ? `重新发送(${countdown})` : '发送验证码' }}
        </button>
        <input v-model="code" placeholder="请输入验证码" class="input-field" />
        <button @click="login" class="login-button">登录</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/useAuth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const phone = ref<string>("15896153901");
const code = ref<string>("");
const countdown = ref<number>(60);
const isCounting = ref<boolean>(false);
let timer: NodeJS.Timer | null = null;

const sendCode = async () => {
    if (isCounting.value) return; // 如果倒计时还在进行，阻止重复发送

    await authStore.sendCode(phone.value);

    // 开始倒计时
    isCounting.value = true;
    countdown.value = 60;

    timer = setInterval(() => {
        if (countdown.value > 0) {
            countdown.value--;
        } else {
            clearInterval(timer!);
            isCounting.value = false;
        }
    }, 1000);
};

const login = async () => {
    await authStore.login(phone.value, code.value).then(() => {
        router.push("/profile");
    });
};
</script>

<style scoped>
.login-container {
    width: 320px;
    margin: 100px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    text-align: center;
}

h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

.input-field {
    width: 90%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    transition: border-color 0.3s;
}

.input-field:focus {
    border-color: #007bff;
    outline: none;
}

.code-button,
.login-button {
    width: 70%;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4093ec;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.code-button[disabled] {
    background-color: #b0c4de;
    cursor: not-allowed;
}

.code-button:hover:not([disabled]),
.login-button:hover {
    background-color: #0056b3;
}
</style>
