<template>
    <div>
        <form @submit.prevent="submitForm">
            <div class="box">
                <label for="username">用户名:</label>
                <input id="username" v-model="formState.username.value" @input="validateField('username')" />
                <p v-if="formState.username.errorMessage" class="error">{{ formState.username.errorMessage }}</p>
            </div>

            <div class="box">
                <label for="email">邮箱:</label>
                <input id="email" v-model="formState.email.value" @input="validateField('email')" />
                <p v-if="formState.email.errorMessage" class="error">{{ formState.email.errorMessage }}</p>
            </div>

            <div class="box">
                <label for="password">密码:</label>
                <input id="password" type="password" v-model="formState.password.value"
                    @input="validateField('password')" />
                <p v-if="formState.password.errorMessage" class="error">{{ formState.password.errorMessage }}</p>
            </div>

            <button :disabled="!isFormValid" type="submit">提交</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFormValidation } from '../composables/useFormValidation';

export default defineComponent({
    setup() {
        // 定义表单字段的验证规则
        const { formState, validateField, validateForm, isFormValid } = useFormValidation({
            username: [
                (value) => value.length > 0 || '用户名不能为空',
                (value) => value.length >= 3 || '用户名至少3个字符'
            ],
            email: [
                (value) => value.length > 0 || '邮箱不能为空',
                (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || '请输入有效的邮箱地址'
            ],
            password: [
                (value) => value.length > 0 || '密码不能为空',
                (value) => value.length >= 6 || '密码至少6个字符'
            ]
        });

        // 表单提交时验证所有字段
        const submitForm = () => {
            if (validateForm()) {
                alert('表单提交成功');
            } else {
                alert('请修正表单中的错误');
            }
        };

        return {
            formState,
            validateField,
            validateForm,
            isFormValid,
            submitForm
        };
    }
});
</script>

<style>
.error {
    color: red;
}

.box {
    padding: 5px 0;
}

.box label {
    margin-right: 5px;
}
</style>