<template>
    <div class="box">
        <h1>提个问题</h1>
        <el-form :model="form" ref="formRef" label-width="120px" @submit.prevent="submitQuestion">
            <el-form-item label="问题标题" :rules="[{ required: true, message: '请输入问题标题', trigger: 'blur' }]">
                <el-input v-model="form.title" placeholder="请输入问题标题"></el-input>
            </el-form-item>

            <el-form-item label="问题内容" :rules="[{ required: true, message: '请输入问题内容', trigger: 'blur' }]">
                <div ref="editorRef" class="editor"></div> <!-- 富文本编辑器容器 -->
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitQuestion" class="submit-btn">提交问题</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const form = ref({
    title: '',
    content: ''
});
const router = useRouter();
const token = localStorage.getItem('token'); // 假设 token 存储在 localStorage

// 创建 editor 实例
const editorRef = ref(null);
let editorInstance: typeof Editor | null = null;

onMounted(() => {
    if (!token) {
        alert("请先登录！");
        router.push('/login');
    }
    editorInstance = new Editor({
        el: editorRef.value,
        height: '400px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        plugins: [codeSyntaxHighlight]
    });
});

const submitQuestion = async () => {
    // 获取富文本内容
    form.value.content = editorInstance?.getMarkdown() || ''; // 获取编辑器内容

    if (!form.value.title || !form.value.content) {
        return; // 确保标题和内容不为空
    }

    try {
        const response = await axios.post('http://localhost:8080/user/addQuestions', form.value, {
            headers: {
                'Authorization': token
            }
        });
        console.log(response.data.message); // 提交成功后的提示信息
        alert("提交问题成功！");
        router.push('/'); // 提交成功后跳转到问题列表页面
    } catch (error) {
        console.error("提交问题失败:", error);
    }
};

</script>

<style scoped>
h1 {
    color: white;
}

.box {
    background: linear-gradient(to bottom right, #3baee0, #89d4cf);
    margin: 0;
    padding: 20px;
    height: 100vh;
}

.editor {
    border: 1px solid #dcdfe6;
}

.submit-btn {
    background-color: #67C23A;
}
</style>
