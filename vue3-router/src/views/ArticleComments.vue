<template>
    <ul>
        <li v-for="comment in article.comments" :key="comment.id">
            {{ comment.content }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const articleId = route.params.id;

const articles = [
    {
        id: 1,
        title: "如何学习 Vue3",
        content: "如何学习 Vue3 如何学习 Vue3 如何学习 Vue3 如何学习 Vue3",
        comments: [
            {
                id: 1,
                content: "Vue3 语法很简洁",
            },
            {
                id: 2,
                content: "Vue3 功能很强大",
            },
            {
                id: 3,
                content: "Vue3的组合式函数",
            },
            {
                id: 4,
                content: "Vue 3的生态很好",
            },
        ],
    },
    {
        id: 2,
        title: "理解Vue Router",
        content: "理解Vue Router 理解Vue Router 理解Vue Router 理解Vue Router 理解Vue Router",
        comments: [
            {
                id: 1,
                content: "Vue Router 基础与静态路由",
            },
            {
                id: 2,
                content: "动态路由与嵌套路由",
            },
            {
                id: 3,
                content: "路由守卫与编程式导航",
            },
            {
                id: 4,
                content: "路由懒加载、滚动行为与过度动画",
            },
        ],
    },
];

const article = articles.find((a) => a.id === Number(articleId));
</script>