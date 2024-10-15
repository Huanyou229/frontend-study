<template>
    <div class="book-detail" v-if="book">
        <div class="book-header">
            <h1>{{ book.title }}</h1>
            <img :src="book.cover" alt="book cover" class="book-cover" />
        </div>
        <div class="book-info">
            <p><span>作者:</span> {{ book.author }}</p>
            <p><span>简介：</span>{{ book.content }}</p>
            <p><span>价格：</span>￥{{ book.price.toFixed(2) }}</p>
            <button @click="addBookToCart(book)" :disabled="isInCart">
                {{ isInCart ? '已加入购物车' : '加入购物车' }}
            </button>
        </div>
        <router-link class="back-link" to="/books">返回书籍列表</router-link>
    </div>
    <div v-else>
        <p>书籍未找到</p>
        <router-link class="back-link" to="/books">返回书籍列表</router-link>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { inject, computed } from "vue";


const route = useRoute();
const bookId = route.params.id;

// 模拟的书籍数据
const books = [
    {
        id: 1,
        title: '《战争与和平》',
        author: '列夫·托尔斯泰',
        content: '一部描写拿破仑战争时期俄国社会的鸿篇巨制。',
        cover: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410151904294.jpg',
        price: 99.99
    },
    {
        id: 2,
        title: '《简·爱》',
        author: '夏洛蒂·勃朗特',
        content: '一部充满女性独立意识的自传体小说。',
        cover: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410151905037.jpg',
        price: 49.99,
    },
    {
        id: 3,
        title: '《1984》',
        author: '乔治·奥威尔',
        content: '一部预示极权主义社会的反乌托邦小说。',
        cover: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410151905190.jpg',
        price: 69.99,
    },
    {
        id: 4,
        title: '《呼啸山庄》',
        author: '艾米莉·勃朗特',
        content: '一个关于爱、复仇与疯狂的悲剧故事。',
        cover: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410151905276.jpg',
        price: 49.99,
    },
    {
        id: 5,
        title: '《百年孤独》',
        author: '加西亚·马尔克斯',
        content: '魔幻现实主义的巅峰之作，讲述了布恩迪亚家族的命运。',
        cover: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410151905110.jpg',
        price: 59.99,
    },
    {
        id: 6,
        title: '《悲惨世界》',
        author: '维克多·雨果',
        content: '维克多·雨果的代表作，描绘了法国革命期间的社会不公与人性的光辉。',
        cover: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410151905512.jpg',
        price: 39.99,
    }
];

// 查找当前书籍
const book = books.find((b) => b.id === Number(bookId));

// 注入 cartStore
const cartStore = inject('cartStore') as ReturnType<typeof import('../store/store').useCartStore>;

const addBookToCart = (book: any) => {
    if (cartStore) {
        cartStore.addToCart(book);
    }
};

// 判断书籍是否在购物车中
const isInCart = computed(() => {
    if (!cartStore || !book) return false;
    return cartStore.cartItems.value.some((item: any) => item.id === book.id);
});
</script>

<style scoped>
.book-detail {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 20px auto;
    font-family: 'Arial', sans-serif;
}

.book-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.book-cover {
    width: 100%;
    height: auto;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
}

.book-header h1 {
    font-size: 2rem;
    color: #333;
    text-align: center;
}

.book-info {
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
}

.book-info p {
    margin: 10px 0;
    font-size: 1.1rem;
    color: #555;
}

.book-info span {
    font-weight: bold;
    color: #333;
}

.back-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #519ce3;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.back-link:hover {
    background-color: #4179b4;
}
</style>
