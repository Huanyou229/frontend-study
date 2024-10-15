<template>
    <h3>用户登录</h3>
    <button @click="login">
        登录
    </button>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const login = () => {
    localStorage.setItem("token", "hello123")
    // 模拟登录成功
    router.push("/cart/order");
};
</script>