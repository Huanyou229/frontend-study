<!-- 根据条件渲染列表中的内容 -->
<template>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.name }} -
            <span v-if="user.age >= 18">成⼈</span>
            <span v-else>未成年</span>
        </li>
    </ul>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义⽤户对象数组状态
interface User {
    id: number;
    name: string;
    age: number;
}
const users = ref<User[]>([
    { id: 1, name: '张三', age: 16 },
    { id: 2, name: '李四', age: 20 },
    { id: 3, name: '王五', age: 17 },])
</script>
<!-- 使⽤ v-if 和 v-else 根据⽤户的年龄渲染不同的⽂本（成⼈或未成年）；
列表项中的每个⽤户根据其年龄不同展示不同的内容。 -->