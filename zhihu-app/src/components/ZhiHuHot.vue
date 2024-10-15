<template>
    <h1>知乎热榜</h1>
    <div class="container" v-if="list.length > 0">
        <div v-for="special in list" :key="special.id" class="card">
            <div class="left">
                <img :src="special.banner" alt="">
            </div>
            <div class="right">
                <h3>{{ special.title }}</h3>
                <p>
                    <span class="updated">{{ special.updated }}</span>
                    <span>{{ special.viewCount }}次浏览</span>
                </p>
            </div>
            <span v-if="special.isFollowing === 'TRUE'" class="follow followed">
                已关注
            </span>
            <span v-else class="follow unfollow">关注</span>
        </div>

        <div style="text-align: center;">
            <button @click="prevPage" :disabled="isFirstPage" :class="{ disabled: isFirstPage }">
                上一页
            </button>

            <button @click="nextPage" :disabled="isLastPage" :class="{ disabled: isLastPage }">
                下一页
            </button>

        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

interface Special {
    id: string;
    title: string;
    banner: string;
    introduction: string;
    isFollowing: string;
    followersCount: number;
    viewCount: number;
    updated: string;
}

const list = ref<Special[]>([]);

// axios({
//     url: "http://localhost:8080/api/v1/special/all",
// })
//     .then((res) => {
//         list.value = res.data.data as Special[];
//         console.log(list.value);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

const limit = ref<number>(4);   //每页条数
const offset = ref<number>(0);  //偏移量
const total = ref<number>(0);   //总条数

// 请求分页接口
const fetchByPage = (): void => {
    axios
        .get(`http://localhost:8080/api/v1/special/page?limit=${limit.value}&offset=${offset.value}`)
        .then((res) => {
            console.log('API 返回的完整数据:', res.data); // 打印完整的数据结构
            // 修改解析逻辑，确保正确提取 special 数组
            if (res.data && res.data.data && Array.isArray(res.data.data.special)) {
                list.value = res.data.data.special; // 修改为正确的字段名 special
                total.value = res.data.data.total;  // 正确提取 total
            } else {
                list.value = []; // 兜底处理，避免错误
                console.error('API 数据格式不正确:', res.data);
            }
        })
        .catch((err) => {
            console.error(err);
        });
}


// 点击下一页，注意都是计算offset偏移量，计算完毕后要重新调用fetchByPage方法请求数据
const nextPage = (): void => {
    if (offset.value + limit.value >= list.value.length) {
        offset.value += limit.value;
        fetchByPage();
    }
};

// 点击上一页
const prevPage = (): void => {
    if (offset.value > 0) {
        offset.value -= limit.value;
    }
    fetchByPage();
};

// 两个计算属性，是否第一页，是否最后一页
const isFirstPage = computed(() => offset.value === 0);
const isLastPage = computed(() => offset.value + limit.value >= total.value);

// 页面加载生命周期，调用分页查询函数
onMounted(() => {
    fetchByPage();
});

</script>

<style scoped>
button {
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

button:disabled,
button.disabled {
    background-color: #d6d6d6;
    color: #888;
    cursor: not-allowed;
}

.container {
    width: 60%;
    margin: 0 auto;
}

h1 {
    text-align: center;
    color: rgb(249, 83, 0);
}

.card {
    display: flex;
    height: 150px;
    margin-bottom: 15px;
    border: 1px soild #ccc;
    box-shadow: 5px 5px 5px #ddd;
    border-radius: 8px;
    position: relative;
}

.left {
    flex: 2;
}

.right {
    flex: 3;
    padding: 0 20px;
}

.left img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

p span {
    font-size: 14px;
    color: #333;
}

.updated {
    margin-right: 20px;
}

.follow {
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 5px 10px;
    font-size: 14px;
}

.followed {
    background-color: #f7f7f7;
    color: #a1a5af;
}

.unfollow {
    background-color: #edf3ff;
    color: #1772f6;
}
</style>