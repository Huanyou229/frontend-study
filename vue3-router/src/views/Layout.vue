<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/articles">Articles</router-link>
        <router-link to="/user">user</router-link>
    </nav>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<style>
a {
    margin: 10px;
    color: #519ce3;
    text-decoration: none;
    padding: 5px 10px;
}

.router-link-active {
    background-color: #519ce3;
    color: white;
    font-weight: bold;
    border-radius: 8px;
}

/* .fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
} */
</style>