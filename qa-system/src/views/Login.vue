<template>
    <div class="login-container">
        <el-form :model="loginForm" class="login-form" label-width="80px" label-position="left">
            <div class="login-header">登 录</div>
            <el-form-item label="用户名">
                <el-input v-model="loginForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user"
                    clearable></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock"
                    clearable show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleLogin" round class="login-button">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useUserStore } from '../stores/useUserStore';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const loginForm = ref({
            username: '',
            password: '',
        });
        const userStore = useUserStore();
        const router = useRouter();

        const handleLogin = async () => {
            await userStore.login(loginForm.value.username, loginForm.value.password);

            if (userStore.isLoggedIn) {
                // 登录成功后跳转到首页
                router.push('/');
            }
        };

        return { loginForm, handleLogin };
    },
});
</script>

<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

.login-header {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
}

.login-form {
    width: 300px;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    background-color: white;
}

.login-button {
    width: 60%;
}
</style>
