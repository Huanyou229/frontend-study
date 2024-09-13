<template>
    <div>
        <h2>{{ name }}</h2>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const name = ref<string>('孙悟空')
const title = ref<string>('齐天大圣')
const description = ref<string>('在《西游记》中，孙悟空是一个勇敢无畏，机智聪明的角色,以其强大的能力和不屈的精神著称。')
</script>
<style scoped>
div {
    margin: 0;
    background-color: aqua;
    text-align: center;
    padding: 20px;
}
</style>