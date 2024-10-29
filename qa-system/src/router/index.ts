import { createRouter, createWebHistory } from "vue-router";

import Layout from "../views/Layout.vue";
import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
const routes = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        redirect: "/home",
        children: [
            // 首页
            {
                path: "/",
                name: "Home",
                component: () => import("../views/Home.vue"),
            },
            // 嵌套路由
            {
                path: "/user",
                name: "User",
                component: () => import("../views/User.vue"),
            },
            {
                path: '/questions/:id',
                name: "QuestionDetail",
                component: () => import("../views/QuestionDetail.vue"), // 引用你的问题详情页面组件

            },
            {
                path: "/addQuestion",
                name: "AddQuestion",
                component: () => import("../views/AddQuestion.vue"),
            },
            {
                path: "/addAnswers/:id",
                name: "AddAnswer",
                component: () => import("../views/AddAnswer.vue"),
            }
        ],
    },
    {
        path: '/login',
        name: "Login",
        component: () => import("../views/Login.vue"),
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 配置全局路由导航守卫
router.beforeEach((to, from, next) => {
    // 一起去的路由是/user开头的
    if (to.path.startsWith("/user") && !localStorage.getItem("token")) {
        alert("请先登录")
        // 跳到登录页面
        next("/login");
    } else {
        // 直接放行
        next();
    }
});

export default router;