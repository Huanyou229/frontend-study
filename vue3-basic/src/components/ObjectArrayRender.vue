<template>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.name }} - {{ user.age }}岁
        </li>
    </ul>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义⼀个⽤户对象数组状态
interface User {
    id: number
    name: string
    age: number
}
const users = ref<User[]>([
    { id: 1, name: '张三', age: 25 },
    { id: 2, name: '李四', age: 30 },
    { id: 3, name: '王五', age: 35 },])
</script>
<!-- 使⽤ v-for 遍历 users 数组，每个⽤户是⼀个对象； 每个 li 标签展示⽤户的 name 和 age ，并且使⽤ user.id 作为唯⼀标识符 -->