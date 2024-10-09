import { reactive, computed } from 'vue';

// 定义表单字段的验证规则类型
type ValidationRule = (value: any) => string | true;

// 定义表单验证配置的类型
interface FormValidationConfig {
    [key: string]: ValidationRule[];
}

// 定义表单验证状态的类型
interface FormValidationState {
    [key: string]: {
        value: any;
        errorMessage: string | null;
    };
}

// 封装表单验证的组合式函数
export function useFormValidation(config: FormValidationConfig) {
    // 保存表单字段的验证状态
    const formState = reactive<FormValidationState>({});

    // 初始化表单字段的状态
    Object.keys(config).forEach((field) => {
        formState[field] = {
            value: '',
            errorMessage: null,
        };
    });

    // 验证单个字段
    const validateField = (field: string) => {
        const rules = config[field];
        const fieldValue = formState[field].value;

        for (const rule of rules) {
            const result = rule(fieldValue);
            if (result !== true) {
                formState[field].errorMessage = result; // 如果验证失败，设置错误信息
                return false;
            }
        }
        formState[field].errorMessage = null; // 验证通过
        return true;
    };

    // 验证整个表单
    const validateForm = () => {
        let isValid = true;
        for (const field in config) {
            if (!validateField(field)) {
                isValid = false;
            }
        }
        return isValid;
    };

    // 获取是否表单无效状态
    const isFormValid = computed(() => {
        return Object.values(formState).every((field) => field.errorMessage === null);
    });

    return {
        formState,
        validateField,
        validateForm,
        isFormValid
    };
}
