<!-- 监听多个状态 -->
<template>
    <div>
        <input v-model="firstName" placeholder="输⼊名" />
        <input v-model="lastName" placeholder="输⼊姓" />
        <p>全名：{{ fullName }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref, watch, computed } from 'vue'
// 名字和姓⽒状态
const firstName = ref<string>('张')
const lastName = ref<string>('三')
// 计算全名
const fullName = computed(() => `${firstName.value} ${lastName.value}`)
// 监听名和姓的变化
watch([firstName, lastName], ([newFirstName, newLastName]) => {
    console.log(`全名变为：${newFirstName} ${newLastName}`)
})
</script>
<!-- 通过 watch([firstName, lastName]) 监听 firstName 和 lastName 的变化，并 打印全名变化。 
 当需要监听对象或数组中的嵌套属性时，必须使⽤深度监听。通过在 watch 的第三个参数中设 置 deep: true 来启⽤深度监听 -->