import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../views/Layout.vue";
// import BookList from "../views/BookList.vue";
// import BookDetail from "../views/BookDetail.vue";
// import Login from "../views/Login.vue";
// import CartDashboard from "../views/CartDashboard.vue";
// import Exit from "../views/Exit.vue";
// import Order from "../views/Order.vue";

const routes = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: "/",
                name: "Home",
                component: () => import("../views/Home.vue"), // 异步导入 Home 组件
            },
            {
                path: "/books",
                name: "Books",
                component: () => import("../views/BookList.vue"), // 异步导入 BookList 组件
            },
            {
                path: '/books/:id',
                name: "BookDetail",
                component: () => import("../views/BookDetail.vue"), // 异步导入 BookDetail 组件
            },
            {
                path: "/cart",
                component: () => import("../views/CartDashboard.vue"), // 异步导入 CartDashboard 组件
                redirect: "/cart/order",
                children: [
                    { path: "order", component: () => import("../views/Order.vue") }, // 异步导入 Order 组件
                ],
            },
            {
                path: "/exit",
                name: "Exit",
                component: () => import("../views/Exit.vue"), // 异步导入 Exit 组件
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"), // 异步导入 Login 组件
    },
];


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
    },
});


// 配置全局路由导航守卫
router.beforeEach((to, from, next) => {
    // 一起去的路由是/user开头的
    if (to.path.startsWith("/cart") && !localStorage.getItem("token")) {
        alert("请先登录")
        // 跳到登录页面
        next("/login");
    } else {
        // 直接放行
        next();
    }
});
export default router;