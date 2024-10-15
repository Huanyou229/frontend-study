import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Layout from "../views/Layout.vue";
// import ArticleList from "../views/ArticleList.vue";
// import ArticleDetail from "../views/ArticleDetail.vue";
// import UserDashboard from "../views/UserDashboard.vue";
// import UserProfile from "../views/UserProfile.vue";
// import UserSettings from "../views/UserSettings.vue";
// import Login from "../views/Login.vue";

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
                component: Home
            },
            // 文章列表页
            {
                path: "/articles",
                name: "ArticleList",
                component: () => import("../views/ArticleList.vue"),
            },
            // 动态路由配置，文章详情页
            {
                path: "/articles/:id",
                name: "ArticleDetail",
                component: () => import("../views/ArticleDetail.vue"),
                children: [
                    {
                        // 子路由的comments不需要写全
                        path: "comments",
                        name: "ArticleComments",
                        component: () => import("../views/ArticleComments.vue"),
                    },
                ],
            },
            // 嵌套路由
            {
                path: "/user",
                component: () => import("../views/UserDashboard.vue"),
                redirect: "/user/profile",
                children: [
                    {
                        path: "profile",
                        name: "UserProfile",
                        component: () => import("../views/UserProfile.vue"),
                    }, {
                        path: "settings",
                        name: "UserSettings",
                        component: () => import("../views/UserSettings.vue")

                    }
                ]
            },

        ],
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
];

// 定义路由对象
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 返回到浏览器保存的滚动位置（当使⽤浏览器后退时），否则滚动到顶部
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 }; // 每次路由切换时滚动到顶部
        }
    }
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