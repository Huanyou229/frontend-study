import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as any,
        isLoggedIn: false,
        token: null as string | null, // token 允许为 null
    }),
    actions: {
        async login(username: string, password: string) {
            try {
                const response = await axios.post(
                    `http://localhost:8080/user/login?username=${username}&password=${password}`
                );
                this.user = response.data;
                this.token = response.data.token;
                this.isLoggedIn = true;

                // 登录成功后，将 token 存储到 localStorage
                if (this.token) {
                    localStorage.setItem('token', this.token);
                }
            } catch (error) {
                console.error('Login error:', error);
            }
        },
        logout() {
            this.user = null;
            this.isLoggedIn = false;
            this.token = null;

            // 退出登录时，删除 localStorage 中的 token
            localStorage.removeItem('token');
        },
    },
});
