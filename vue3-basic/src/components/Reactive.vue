<template>
    <div>
        <p>⽤户名：{{ user.name }}</p>
        <p>年龄：{{ user.age }}</p>
        <button @click="increaseAge">增加年龄</button>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
// 使⽤ reactive 定义复杂对象的响应式状态
const user = reactive<{ name: string; age: number }>({
    name: '张三',
    age: 25,
})
// 定义增加年龄的⽅法
const increaseAge = (): void => {
    user.age++
}
</script>
<!--user 是⼀个响应式对象，使⽤ reactive 定义并指定了类型 { name: string; ag
e: number } ； 当修改 user.age 时，Vue 会追踪变化并⾃动更新相关视图。  -->