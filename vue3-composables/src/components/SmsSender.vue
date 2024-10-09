<template>
    <div>
        <p>手机号: <input v-model="phoneNumber" placeholder="输入手机号" /></p>
        <p>短信内容: <input v-model="message" placeholder="输入短信内容" /></p>

        <button :disabled="!canResend || isSending" @click="sendSms">
            {{ isSending ? '发送中...' : canResend ? '发送短信' : `重新发送 (${countdown})` }}
        </button>

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useSmsSender } from '../composables/useSmsSender';

export default defineComponent({
    setup() {
        const phoneNumber = ref<string>('');
        const message = ref<string>('');

        // 使用 useSmsSender 组合式函数
        const { isSending, canResend, countdown, errorMessage, sendSms } = useSmsSender();

        // 封装发送短信操作
        const sendSmsHandler = () => {
            if (!phoneNumber.value || !message.value) {
                alert('请输入手机号和短信内容');
                return;
            }

            sendSms({
                phoneNumber: phoneNumber.value,
                message: message.value
            });
        };

        return {
            phoneNumber,
            message,
            isSending,
            canResend,
            countdown,
            errorMessage,
            sendSms: sendSmsHandler
        };
    }
});
</script>

<style>
.error {
    color: red;
}
</style>