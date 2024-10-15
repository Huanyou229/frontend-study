<template>
    <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/books">书籍列表</router-link>
        <router-link to="/cart">购物车</router-link>
        <router-link to="/exit">退出登录</router-link>
    </nav>
    <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.fullPath" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/store';
import { provide } from 'vue';

// 提供购物车store
const cartStore = useCartStore();
provide('cartStore', cartStore);

</script>
<style>
a {
    margin: 10px;
    color: #519ce3;
    font-size: large;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 8px;
}

.router-link-active {
    background-color: #519ce3;
    color: white;
    font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
