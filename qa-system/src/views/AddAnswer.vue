<template>
    <div class="box">
        <el-card class="question-card" v-if="question">
            <h2 class="question-title">题目:{{ question.title }}</h2>
            <p class="question-content">问题内容：{{ question.content }}</p>
        </el-card>

        <el-card class="answer-card">
            <h2 class="title">写个回答</h2>
            <!-- 富文本编辑器容器 -->
            <div ref="editorRef" class="editor"></div>
            <el-button type="primary" @click="submitAnswer" class="submit-btn"
                style="background-color: #67C23A;">提交回答</el-button>
            <div v-if="message" class="message">{{ message }}</div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { AxiosError } from 'axios';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const content = ref(''); // 用户输入的回答内容
const message = ref(''); // 提交后返回的消息
const route = useRoute();
const editorRef = ref(null); // 富文本编辑器 DOM 元素
let editorInstance: typeof Editor | null = null;
const question = ref<{ title: string; content: string } | null>(null); // 存储问题数据

// 从 localStorage 获取 token
const token = localStorage.getItem('token');

// 获取问题数据
const fetchQuestion = async () => {
    const questionId = route.params.id as string;
    if (!questionId) return;

    try {
        const response = await axios.get(`http://localhost:8080/questions/${questionId}`);
        question.value = response.data; // 存储问题数据
    } catch (error) {
        console.error("获取问题失败:", error);
    }
};

onMounted(() => {
    fetchQuestion(); // 获取问题数据
    editorInstance = new Editor({
        el: editorRef.value!,
        height: '400px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        plugins: [codeSyntaxHighlight],
    });
});

const submitAnswer = async () => {
    // 获取富文本内容
    content.value = editorInstance?.getMarkdown() || '';

    if (!content.value) {
        message.value = "回答内容不能为空!";
        return;
    }

    const questionId = route.params.id as string;
    if (!questionId) {
        message.value = "未找到问题ID";
        return;
    }

    try {
        const response = await axios.post(
            `http://localhost:8080/user/addAnswers/${questionId}`,
            { content: content.value },
            { headers: { Authorization: `${token}` } }
        );
        message.value = response.data.message;
        editorInstance?.setMarkdown(''); // 清空编辑器
    } catch (error) {
        const axiosError = error as AxiosError;
        console.error("提交回答失败:", axiosError.response?.data || axiosError.message);
        message.value = "提交回答失败，请重试";
    }
};
</script>

<style scoped>
.box {
    background: linear-gradient(to bottom right, #3baee0, #89d4cf);
    margin: 0;
    padding: 20px;
    height: 100vh;
}

.question-card {
    background: white;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 20px;
    /* 添加底部间距 */
}

.answer-card {
    background: white;
    padding: 10px;
    border-radius: 8px;
}

.title {
    font-size: 24px;
    margin-bottom: 20px;
}

.message {
    margin-top: 10px;
    color: #f56c6c;
}

.editor {
    margin-bottom: 20px;
}
</style>
