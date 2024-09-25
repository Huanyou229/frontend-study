<template>
    <div class="email-form">
        <h2>邮件发送</h2>
        <form @submit.prevent="submitForm" class="form-container">
            <div class="form-group">
                <input type="text" placeholder="请输入收件人邮箱" v-model="form.to" class="form-input" />
            </div>
            <div class="form-group">
                <input type="text" placeholder="请输入邮件主题" v-model="form.subject" class="form-input" />
            </div>
            <div class="form-group">
                <input type="text" placeholder="请输入邮件内容" v-model="form.body" class="form-input" />
            </div>
            <button type="submit" class="submit-btn">发送</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
    to: '',
    subject: '',
    body: ''
});

// 定义 emits 事件
const emit = defineEmits<{
    'submit-form': [any];
}>();

// 阻止表单默认提交并触发事件
const submitForm = () => {
    emit('submit-form', form);
};
</script>

<style scoped>
h2 {
    text-align: center;
}

.email-form {
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-container {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

.form-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
}

.form-input:focus {
    border-color: #007bff;
    outline: none;
}

.submit-btn {
    padding: 12px 20px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-btn:hover {
    background-color: #0056b3;
}
</style>