<template>
    <div class="books">
        <h1>书籍列表</h1>
        <ul class="book-list">
            <li v-for="book in books" :key="book.id" class="book-card">
                <img :src="book.cover" alt="book cover" class="book-cover" />
                <h2>{{ book.title }}</h2>
                <router-link :to="`/books/${book.id}`">查看详情</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>

const books = [
    {
        id: 1,
        title: '《战争与和平》',
        cover: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410151904294.jpg',
    },
    {
        id: 2,
        title: '《简·爱》',
        cover: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410151905037.jpg',
    },
    {
        id: 3,
        title: '《1984》',
        cover: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410151905190.jpg',
    },
    {
        id: 4,
        title: '《呼啸山庄》',
        cover: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410151905276.jpg',
    },
    {
        id: 5,
        title: '《百年孤独》',
        cover: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410151905110.jpg',
    },
    {
        id: 6,
        title: '《悲惨世界>',
        cover: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410151905512.jpg',
    }
];

</script>

<style scoped>
.books {
    padding: 20px;
}

.book-list {
    /* display: flex;
    flex-wrap: wrap; */
    list-style: none;
}

.book-card {
    width: 200px;
    margin: 10px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
}

.book-cover {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
}
</style>