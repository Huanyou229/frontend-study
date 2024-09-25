<template>
    <div>
            <UserProfile :user="user"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserProfile from'./UserProfile.vue';


const user = ref ({
    name:"张三",
    age:20,
    email:"2499669698@qq.com"
})
</script>

<style scoped>

</style>