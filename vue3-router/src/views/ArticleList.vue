<template>
    <div class="articles">
        <h1>文章列表</h1>
        <div style="height: 200px">
            <!-- 占位，模拟⻓⻚⾯ -->
            <p>这里是非常长的页面内容。</p>
        </div>
        <ul>
            <!-- <li v-for="article in articles" :key="article.id">
                {{ article.title }}
            </li> -->
            <li v-for="article in articles" :key="article.id">
                <!-- 使⽤ :to 绑定动态路由，传递⽂章ID -->
                <router-link :to="`/articles/${article.id}`">
                    {{ article.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
const articles = [
    { id: 1, title: "如何学习 Vue 3" },
    { id: 2, title: "理解 Vue Router" },
];
</script>

<script lang="ts">
export default {
    beforeRouteEnter(to, from, next) {
        console.log(to, from);
        console.log("进⼊该⻚⾯之前的检查");
        next();
    },
};
</script>