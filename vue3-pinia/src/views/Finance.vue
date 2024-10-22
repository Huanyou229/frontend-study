<template>
    <div class="finance-app">
        <h1>记账应用</h1>

        <!-- 添加交易的表单部分 -->
        <div class="form-section">
            <!-- 输入交易描述 -->
            <input v-model="newTransaction.reason" placeholder="描述" />
            <!-- 输入交易金额 -->
            <input v-model.number="newTransaction.amount" type="number" placeholder="金额" />
            <!-- 选择交易类型（收入或支出） -->
            <select v-model="newTransaction.type">
                <option value="income">收入</option>
                <option value="expense">支出</option>
            </select>
            <!-- 点击按钮添加交易记录 -->
            <button @click="addTransaction">添加记录</button>
        </div>

        <!-- 交易记录列表部分 -->
        <div class="transactions-section">
            <h2>交易记录</h2>
            <ul>
                <!-- 使用 v-for 遍历交易列表，并显示每条交易的描述、金额和类型 -->
                <li v-for="(transaction, index) in financeStore.transactions" :key="transaction.id">
                    <!-- 显示交易信息 -->
                    <span>{{ transaction.reason }} - {{ transaction.amount }} ({{ transaction.type }})</span>
                    <!-- 删除按钮 -->
                    <button @click="removeTransaction(index)">删除</button>
                </li>
            </ul>
        </div>

        <!-- 统计信息部分 -->
        <div class="summary-section">
            <h2>统计信息</h2>
            <!-- 显示总收入 -->
            <p>总收入: {{ financeStore.totalIncome }}</p>
            <!-- 显示总支出 -->
            <p>总支出: {{ financeStore.totalExpenses }}</p>
            <!-- 显示当前余额 -->
            <p>当前余额: {{ financeStore.balance }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue' // 引入 Vue 的 ref 函数，用于创建响应式变量
import { useFinanceStore } from '../stores/useFinance' // 引入自定义的 financeStore，用于管理财务记录

// 获取 financeStore 实例，操作交易数据
const financeStore = useFinanceStore()

// 创建响应式对象 newTransaction，用于存储新交易的输入数据
const newTransaction = ref({
    type: 'income', // 默认交易类型为收入
    amount: 0, // 交易金额初始为 0
    reason: '' // 交易原因（描述）为空
})

// 添加交易记录的函数
const addTransaction = () => {
    // 检查描述和金额是否填写
    if (newTransaction.value.reason && newTransaction.value.amount) {
        // 调用 financeStore 的 addTransaction 方法添加交易
        financeStore.addTransaction(newTransaction.value.type, newTransaction.value.amount, newTransaction.value.reason)
        // 重置表单，清空输入框
        newTransaction.value.reason = ''
        newTransaction.value.amount = 0
        newTransaction.value.type = 'income' // 重置类型为收入
    } else {
        // 如果信息不完整，弹出提示
        alert('请填写完整的交易信息')
    }
}

// 删除交易记录的函数
const removeTransaction = (index) => {
    // 调用 financeStore 的 removeTransaction 方法删除指定索引的交易记录
    financeStore.removeTransaction(index)
}
</script>

<style scoped>
/* 主容器样式 */
.finance-app {
    font-family: Arial, sans-serif;
    /* 字体设置 */
    max-width: 600px;
    /* 最大宽度 */
    margin: auto;
    /* 居中对齐 */
    text-align: center;
    /* 文本居中 */
}

/* 表单部分样式 */
.form-section {
    margin-bottom: 20px;
    /* 下方留白 */
}

/* 表单中输入框样式 */
.form-section input {
    margin: 0 10px;
    /* 左右留白 */
    padding: 5px;
    /* 内边距 */
    width: 150px;
    /* 宽度 */
}

/* 表单中选择框样式 */
.form-section select {
    margin: 0 10px;
    /* 左右留白 */
    padding: 5px;
    /* 内边距 */
    width: 70px;
    /* 宽度 */
}

/* 交易记录部分样式 */
.transactions-section ul {
    /* 移除默认列表样式 */
    /* list-style: none; */
    padding: 0;
}

/* 每条交易记录的样式 */
.transactions-section li {
    margin: 10px 0;
    /* 上下留白 */
}

/* 删除按钮的样式 */
.transactions-section li button {
    font-size: small;
    /* 字体大小 */
    margin-left: 10px;
    /* 左侧留白 */
    background-color: #abdef4;
    /* 背景颜色 */
    border-radius: 6px;
    /* 边框圆角 */
}

/* 统计信息部分样式 */
.summary-section {
    margin-top: 20px;
    /* 上方留白 */
}
</style>
