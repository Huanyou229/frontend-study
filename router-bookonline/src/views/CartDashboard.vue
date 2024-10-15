<!-- src/views/CartDashboard.vue -->
<template>
    <div class="cart-dashboard">
        <nav>
            <router-link to="/cart/order">订单信息</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cart-dashboard {
    padding: 20px;
}

nav {
    margin-bottom: 20px;
}

nav a {
    margin-right: 15px;
    color: #519ce3;
    text-decoration: none;
}

.router-link-active {
    font-weight: bold;
    color: #000;
}
</style>