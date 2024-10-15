<template>
    <div>
        <button @click="handleLogout" style="margin-top: 10px;">退出登录</button>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
}
</script>
<style scoped>
button {
    border: 1px solid #ccc;
    padding: 5px;
    margin-top: 10px;
    border-radius: 6px;
    margin-left: 10px;
}
</style>