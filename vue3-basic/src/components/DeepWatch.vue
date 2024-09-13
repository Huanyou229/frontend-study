<!-- 深度监听对象 -->
<template>
    <div>
        <input v-model="user.name" placeholder="输⼊姓名" />
        <input v-model="user.age" type="number" placeholder="输⼊年龄" />
        <p>{{ user.name }}，{{ user.age }}岁</p>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
// 定义⽤户对象
const user = ref<{ name: string; age: number }>({
    name: '张三',
    age: 25,
})
// 深度监听⽤户对象
watch(user, (newUser) => {
    console.log(`⽤户信息更新为：${newUser.name}, ${newUser.age}`)
}, { deep: true })
</script>
<!-- 通过设置 { deep: true } ，启⽤了对 user 对象的深度监听； 当 user 对象中的任意属性变化时，监听器都会触发并执⾏相应的逻辑。 
 监听器默认情况下是在被监听的数据发⽣变化时才会触发。如果希望监听器在绑定时⽴即执⾏，可 以通过 immediate: true 选项。 -->