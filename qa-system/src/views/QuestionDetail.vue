<template>
    <div class="question-detail">
        <el-card class="question-card" v-if="question">
            <div class="question-content">
                <h2 class="question-title">{{ question.title }}</h2>
                <p class="question-body">{{ question.content }}</p>
                <el-divider></el-divider>
                <div class="user-info">
                    <el-avatar :src="question.user.avatar" size="small"></el-avatar>
                    <div class="user-details">
                        <p class="username">{{ question.user.username }}</p>
                        <p class="create-time">提问时间：{{ dayjs(question.createTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
                    </div>
                </div>
            </div>
        </el-card>

        <el-divider content-position="left" v-if="answers.length">回答</el-divider>

        <el-card v-for="answer in answers" :key="answer.id" class="answer-card">
            <div class="answer-content">
                <p class="answer-body">{{ answer.content }}</p>
                <el-divider></el-divider>
                <div class="user-info">
                    <el-avatar :src="answer.user.avatar" size="small"></el-avatar>
                    <div class="user-details">
                        <p class="username">{{ answer.user.username }}</p>
                        <p class="create-time">回答时间：{{ dayjs(answer.createTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { AxiosError } from 'axios';
import dayjs from 'dayjs'; // 引入 dayjs

// 定义 User、Question 和 Answer 接口
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

interface Answer {
    id: string;
    questionId: string;
    content: string;
    userId: string | null; // 可能为空
    createTime: Date;
    updateTime: Date;
    user: User; // 嵌套的用户信息
}

const question = ref<Question | null>(null); // 设置类型为 Question | null
const answers = ref<Answer[]>([]); // 设置类型为 Answer[]
const route = useRoute();

onMounted(async () => {
    const questionId = route.params.id;
    console.log("获取到的questionId:", questionId); // 输出获取到的questionId
    try {
        const questionResponse = await axios.get(`http://localhost:8080/questions/${questionId}`);
        question.value = questionResponse.data;

        const answersResponse = await axios.get(`http://localhost:8080/answers/${questionId}`);
        answers.value = answersResponse.data.map((answer: any) => {
            // 将 createTime 和 updateTime 数组转换为日期对象
            const createTime = new Date(answer.createTime[0], answer.createTime[1] - 1, answer.createTime[2], answer.createTime[3], answer.createTime[4], answer.createTime[5]);
            const updateTime = new Date(answer.updateTime[0], answer.updateTime[1] - 1, answer.updateTime[2], answer.updateTime[3], answer.updateTime[4], answer.updateTime[5]);

            // 格式化日期对象为字符串
            answer.createTime = dayjs(createTime).format('YYYY-MM-DD HH:mm:ss');
            answer.updateTime = dayjs(updateTime).format('YYYY-MM-DD HH:mm:ss');

            return answer;
        });
    } catch (error) {
        const axiosError = error as AxiosError; // 类型断言为 AxiosError
        if (axiosError.response && axiosError.response.status === 404) {
            console.error('Resource not found:', axiosError);
            alert('问题或回答不存在');
        } else {
            console.error('Failed to load question or answers:', axiosError);
        }
    }
});
</script>


<style scoped>
.question-detail {
    padding: 20px;
    background: linear-gradient(to bottom right, #3baee0, #89d4cf);
}

.question-card,
.answer-card {
    margin-bottom: 20px;
}

.question-title {
    font-size: 24px;
    font-weight: bold;
}

.question-body {
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
