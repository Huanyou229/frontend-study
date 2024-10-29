<template>
    <div class="box">
        <el-row :gutter="20" class="question-list">
            <!-- 使用 v-for 循环渲染每个问题 -->
            <el-col :span="8" v-for="question in questions" :key="question.id">
                <el-card shadow="hover" class="question-card" @click="navigateToDetails(String((question.id)))">
                    <!-- 问题标题和内容 -->
                    <div class="question-content">
                        <el-divider content-position="left">
                            <h2 class="question-title">{{ question.title }}</h2>
                        </el-divider>
                        <p class="question-body">{{ question.content }}</p>
                    </div>

                    <!-- 提问者信息和创建时间 -->
                    <el-divider></el-divider>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="user-info">
                            <el-avatar :src="question.user.avatar" size="small"></el-avatar>
                            <div class="user-details">
                                <p class="username">{{ question.user.username }}</p>
                                <p class="create-time">发表于 {{ new Date(question.createTime).toLocaleDateString() }}</p>
                            </div>
                        </div>
                        <div style="color: #3baee0;" @click.stop="navigateToAddAnswer(String(question.id))">
                            <el-icon style="padding-right: 10px; font-size: large;">
                                <EditPen />
                            </el-icon>
                            写个回答
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'; // 导入 vue-router
import { EditPen } from '@element-plus/icons-vue';

// 定义 User 和 Question 接口
interface User {
    id: string;
    username: string;
    avatar: string;
    phone: string;
    email: string;
}

interface Question {
    id: string;
    title: string;
    content: string;
    userId: string | null; // 可能为空
    createTime: string;
    updateTime: string;
    user: User; // 嵌套的用户信息
}

const questions = ref<Question[]>([]); // 设置类型为 Question[]
const router = useRouter(); // 使用 vue-router

onMounted(async () => {
    try {
        const response = await axios.get(`http://localhost:8080/questions?timestamp=${new Date().getTime()}`);
        questions.value = response.data;
        console.log("加载的问题列表:", questions.value); // 确保问题列表加载成功
        console.log("加载的问题列表:", questions.value.map(q => ({ id: q.id, title: q.title })));
    } catch (error) {
        console.error("加载问题失败:", error);
    }
});

// 跳转到问题详情页面
const navigateToDetails = (id: string) => {
    const targetUrl = `/questions/${id}`;
    console.log("目标URL:", targetUrl); // 输出目标URL
    router.push(targetUrl);
};

// 跳转到添加回答页面
const navigateToAddAnswer = (questionId: string) => {

    const targetUrl = `/addAnswers/${questionId}`; // 设定目标URL
    console.log("跳转到添加回答页面的目标URL:", targetUrl); // 输出目标URL
    router.push(targetUrl);
};
</script>

<style scoped>
.box {
    background: linear-gradient(to bottom right, #3baee0, #89d4cf);
    margin: 0;
    padding: 20px;
    height: 100vh;
}

.question-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.question-card {
    width: 100%;
    margin-bottom: 20px;
}

.question-content {
    margin-bottom: 10px;
}

.question-title {
    font-size: 20px;
    font-weight: bold;
}

.question-body {
    padding: 10px;
    font-size: 16px;
    color: #333;
}

.user-info {
    display: flex;
    align-items: center;
}

.user-details {
    margin-left: 10px;
}

.username {
    font-size: 14px;
    color: #666;
}

.create-time {
    font-size: 12px;
    color: #999;
}
</style>
