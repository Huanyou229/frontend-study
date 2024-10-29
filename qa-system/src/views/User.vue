<template>
    <el-container class="box">
        <el-header class="header">
            <div class="header-title">个人中心</div>
            <el-button class="logout-btn" type="primary" @click="handleLogout" round>

                退出登录</el-button>
        </el-header>

        <el-main style="margin: 0 auto;">
            <el-card class="user-info-card" shadow="hover">
                <div class="avatar-section">
                    <el-avatar :size="120" :src="userInfo.avatar" alt="用户头像"></el-avatar>
                </div>
                <div class="user-info">
                    <p><strong>用户名：</strong>{{ userInfo.username }}</p>
                    <p><strong>电话：</strong>{{ userInfo.phone }}</p>
                    <p><strong>邮箱：</strong>{{ userInfo.email }}</p>
                </div>
            </el-card>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

// 声明用户信息状态
const userInfo = ref({
    id: '',
    username: '',
    avatar: '',
    phone: '',
    email: '',
});

// 使用 Vue Router 进行页面跳转
const router = useRouter();

// 从 localStorage 中获取 token
const token = localStorage.getItem('token');

// 获取用户信息
const getUserInfo = async () => {
    try {
        const response = await axios.get('http://localhost:8080/user/info', {
            headers: {
                Authorization: `${token}`,
            },
        });
        userInfo.value = response.data;
    } catch (error) {
        ElMessage.error('获取用户信息失败，请重新登录');
        router.push('/login');
    }
};

// 页面加载时调用获取用户信息的函数
onMounted(() => {
    if (!token) {
        ElMessage.error('请先登录');
        router.push('/login');
    } else {
        getUserInfo();
    }
});

// 处理退出登录逻辑
const handleLogout = () => {
    localStorage.removeItem('token');
    ElMessage.success('退出登录成功');
    router.push('/login');
};
</script>

<style scoped>
.box {
    background: linear-gradient(to bottom right, #3baee0, #89d4cf);
    margin: 0;
    padding: 0;
    height: 100vh;
    /* 高度填满整个视口 */
}

.header {
    position: relative;
    display: flex;
    justify-content: end;
    /* 左右对齐 */
    align-items: center;
    margin: 20px 0;
    /* 调整顶部和底部的边距 */
}

.header-title {
    color: white;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.logout-btn {
    background-color: #f89898;
    /* 按钮背景颜色 */
    color: white;
    /* 按钮文字颜色 */
}

.user-info-card {
    padding: 20px;
    /* 内边距 */
    display: flex;
    flex-direction: column;
    /* 纵向布局 */
    align-items: center;
    /* 居中 */

}

.avatar-section {
    flex-shrink: 0;
    /* 不允许缩小 */
    display: flex;
    justify-content: center;
    /* 头像居中 */
    width: 100%;
}

.user-info {
    display: flex;
    flex-direction: column;
    /* 纵向布局 */
    width: 100%;
    max-width: 400px;
    /* 最大宽度 */
    text-align: left;
    /* 文字左对齐 */
}

.user-info p {
    margin: 10px 0;
    /* 段落之间的间距 */
    display: flex;
    justify-content: start;
    /* 段落内文字左对齐 */
    font-size: 16px;
    /* 字体大小 */
}
</style>
