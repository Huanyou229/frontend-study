<template>
    <div class="login-container">
        <h2>登录</h2>
        <div class="input-container">
            <input v-model="phone" placeholder="请输入手机号" class="input" />
        </div>
        <button @click="sendCode" :disabled="isCodeSent" class="btn send-btn">
            {{ isCodeSent ? `重新发送(${countdown})秒` : "发送验证码" }}
        </button>
        <div class="input-container">
            <input v-model="code" placeholder="请输入验证码" class="input" />
        </div>
        <button @click="login" :disabled="!isCodeSent" class="btn login-btn">登录</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/useAuth";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const router = useRouter();

const phone = ref<string>("15896153901");
const code = ref<string>("");

const sendCode = async () => {
    await authStore.sendCode(phone.value);
};

const login = async () => {
    await authStore.login(phone.value, code.value);
    // 登录成功后跳转到个人中心
    router.push("/profile");
};

// 批量解构响应式状态
const { isCodeSent, countdown } = storeToRefs(authStore);
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    text-align: center;
}

h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

.input-container {
    margin-bottom: 15px;
}

.input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
    margin-top: 10px;
}

.input:focus {
    outline: none;
    border-color: #42b983;
}

.btn {
    width: 80%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    margin-top: 10px;
}

.send-btn {
    background-color: #42b983;
}

.send-btn:disabled {
    background-color: #bbb;
    cursor: not-allowed;
}

.login-btn {
    background-color: #409eff;
}

.login-btn:disabled {
    background-color: #bbb;
    cursor: not-allowed;
}
</style>