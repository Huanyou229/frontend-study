<template>
    <div class="article-detail">
        <h1>{{ article.title }}</h1>
        <p>{{ article.content }}</p>
        <div style="height: 100px">
            <!-- 占位，模拟⻓⻚⾯ -->
            <p>更多的文章内容，让页面足够长。</p>
            <router-link :to="`/articles/${article.id}/comments`">查看评论</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const articleId = route.params.id;
const articles = [
    { id: 1, title: "如何学习 Vue 3", content: "如何学习 Vue 3 的文章内容" },
    {
        id: 2,
        title: "理解 Vue Router",
        content: "理解 Vue Router 的文章内容",
    },
];
const article = articles.find((a) => a.id === Number(articleId));
</script>