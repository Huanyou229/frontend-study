import axios from "axios";

// 创建一个axios实例
const api = axios.create({
    baseURL: "https://api.zhihu.com", //基础地址
    timeout: 8000, //请求超时时间
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

// 请求拦截器
api.interceptors.request.use(
    config => {
        // 获取token,添加到请求头
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // 请求错误的处理
        return Promise.reject(error);
    }
);


// 响应拦截器
api.interceptors.response.use(response => {
    // 解析响应数据
    return response.data;
},
    (error) => {
        if (error.response) {
            const status = error.response.status;
            switch (status) {
                case 401:
                    // 未授权,请登录
                    console.log("未授权,请登录");
                    // 跳到登录页
                    break;
                case 403:
                    // 禁止访问，权限不足
                    console.log("权限不足，禁止访问");
                    break;
                case 404:
                    // 资源不存在
                    console.log("资源不存在");
                    break;
                case 500:
                    // 服务器错误
                    console.log("服务器错误");
                    break;
                default:
                    console.log("请求错误",
                        error.response.data.message || "未知错误"
                    );
            }
        } else if (error.request) {
            console.log("网络连接失败，请检查网络");

        } else {
            console.log("请求错误", error.message);
        }
        return Promise.reject(error);
    }
);


// 导出
export default api;