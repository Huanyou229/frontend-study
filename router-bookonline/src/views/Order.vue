<template>
    <div class="order">
        <h2>您的订单</h2>
        <ol>
            <li v-for="item in cartItems" :key="item.id">
                {{ item.title }} - {{ item.author }} - ￥{{ item.price }}
                <button @click="removeItem(item.id)">删除</button>
            </li>
        </ol>
    </div>
</template>

<script setup lang="ts">
import { inject, onMounted, computed } from 'vue';
import { useCartStore } from '../store/store';

// 使用 inject 获取购物车状态
const cartStore = inject('cartStore') as ReturnType<typeof useCartStore>;

// 使用 computed 包装 cartItems 确保数据变化时视图能自动更新
const cartItems = computed(() => cartStore?.cartItems.value || []);

// 定义删除购物车中书籍的函数
const removeItem = (id: number) => {
    if (cartStore) {
        cartStore.removeFromCart(id);
    }
};
// 每次组件挂载时，确保获取最新的购物车数据
onMounted(() => {
    // 如果有必要可以在这里执行一些加载逻辑
    console.log("Cart component is mounted");
});
</script>

<style scoped>
.order {
    padding: 20px;
}

button {
    margin-left: 10px;
    color: red;
    background-color: #fff;
    border: none;
    
}

li {
    padding: 10px;
}
</style>
