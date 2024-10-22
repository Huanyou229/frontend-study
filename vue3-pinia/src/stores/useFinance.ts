import { defineStore } from 'pinia' // 从 Pinia 导入 defineStore 方法，用于定义状态管理的 store
import { ref, computed } from 'vue' // 从 Vue 导入 ref 和 computed，ref 用于创建响应式变量，computed 用于计算属性

// 定义 Transaction 接口，用于表示交易的结构
interface Transaction {
    id: number // 每笔交易的唯一标识符
    type: 'income' | 'expense' // 交易类型，收入 ('income') 或支出 ('expense')
    amount: number // 交易金额
    reason: string // 交易的原因或描述
}

// 定义并导出 finance store
export const useFinanceStore = defineStore('finance', () => {
    // 创建一个响应式的 transactions 数组，用于存储所有交易
    const transactions = ref<Transaction[]>([])

    /**
     * 添加一笔新的交易
     * @param type - 交易类型（收入或支出）
     * @param amount - 交易金额
     * @param reason - 交易描述
     */
    const addTransaction = (type: 'income' | 'expense', amount: number, reason: string) => {
        const newTransaction: Transaction = {
            id: Date.now(), // 使用当前时间戳作为交易的唯一 ID
            type,
            amount,
            reason
        };
        // 将新交易添加到 transactions 数组中
        transactions.value.push(newTransaction);
    };

    /**
     * 删除一笔交易
     * @param index - 要删除的交易在 transactions 数组中的索引
     */
    const removeTransaction = (index: number) => {
        transactions.value.splice(index, 1); // 根据索引删除数组中的一项交易
    };

    /**
     * 计算总收入
     * @returns 所有收入交易的总金额
     */
    const totalIncome = computed(() => {
        return transactions.value
            .filter(transaction => transaction.type === 'income') // 过滤出收入类型的交易
            .reduce((sum, transaction) => sum + transaction.amount, 0); // 计算收入总和
    });

    /**
     * 计算总支出
     * @returns 所有支出交易的总金额
     */
    const totalExpenses = computed(() => {
        return transactions.value
            .filter(transaction => transaction.type === 'expense') // 过滤出支出类型的交易
            .reduce((sum, transaction) => sum + transaction.amount, 0); // 计算支出总和
    });

    /**
     * 计算当前余额
     * @returns 当前余额（总收入 - 总支出）
     */
    const balance = computed(() => {
        return totalIncome.value - totalExpenses.value; // 当前余额为总收入减去总支出
    });

    // 返回 store 的状态和方法
    return {
        transactions, // 所有交易记录
        addTransaction, // 添加交易方法
        removeTransaction, // 删除交易方法
        totalIncome, // 总收入
        totalExpenses, // 总支出
        balance // 当前余额
    };
},
    {
        // 启用持久化配置，将 store 的数据保存在 localStorage 中
        persist: {
            key: 'my-finance-store', // 自定义存储的键名
            storage: localStorage // 使用 localStorage 进行持久化存储
        }
    });
