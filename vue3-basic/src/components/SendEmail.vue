<template>
    <div class="send-email-container">
        <EmailForm @submit-form="handleSubmitForm" />
        <p v-if="submitData" class="submit-data">
            邮件已发送：
            {{ submitData }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EmailForm from './EmailForm.vue';
import axios from "axios";

const submitData = ref(null);

const handleSubmitForm = (data: any) => {
    submitData.value = data;
    axios.post("http://localhost:8080/mail", submitData.value).then((res) => {
        console.log("邮件已发送");
    });
};
</script>

<style scoped>
.send-email-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
}

.submit-data {
    margin-top: 20px;
    padding: 15px;
    background-color: #e7f3ff;
    border: 1px solid #b3daff;
    border-radius: 8px;
    color: #333;
    line-height: 1.6;
}
</style>