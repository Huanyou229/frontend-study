<template>
    <nav class="navbar">
        <div class="navbar-brand">问答系统</div>
        <div class="navbar-links">
            <router-link to="/">
                <el-icon>
                    <HomeFilled />
                </el-icon>首页
            </router-link>
            <router-link to="/addQuestion">
                <el-icon>
                    <QuestionFilled />
                </el-icon>提个问题
            </router-link>
            <router-link to="/user">
                <el-icon>
                    <Avatar />
                </el-icon>个人中心
            </router-link>

        </div>
    </nav>
    <router-view />
</template>

<script setup lang="ts">
import { HomeFilled, Avatar, QuestionFilled } from '@element-plus/icons-vue';
</script>

<style scoped>
/* 导航栏容器 */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f9fa;
    padding: 10px 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

/* 应用名称或 Logo */
.navbar-brand {
    font-size: 36px;
    font-weight: bold;
    color: #3baee0;
    letter-spacing: 1px;
}

/* 导航链接部分 */
.navbar-links {
    display: flex;
    gap: 20px;
}

/* 每个链接的样式 */
a {
    text-decoration: none;
    color: #3baee0;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
    display: flex;
    align-items: center;
}

/* 链接内图标样式 */
.el-icon {
    margin-right: 8px;
}

/* 鼠标悬停时的效果 */
a:hover {
    background-color: #3baee0;
    color: white;
}

/* 活动链接样式 */
.router-link-active {
    background-color: #3baee0;
    color: white;
    font-weight: bold;
    border-radius: 8px;
}

/* 小屏幕时的响应式布局 */
@media (max-width: 600px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .navbar-links {
        width: 100%;
        justify-content: space-around;
        padding-top: 10px;
    }

    .navbar-brand {
        padding-bottom: 10px;
    }
}
</style>
