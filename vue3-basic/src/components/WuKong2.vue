<template>
    <div class="form-toggle">
    <h2>当前时间:{{ currentForm }}</h2>
   
    <div>
        <img :src="currentImage" alt="悟空图片">
    </div>
    <button @click="toggleForm">切换时间</button>
    </div>
    </template>

<script setup lang="ts">
import { ref } from 'vue'
import bashiXueYiImage from '../assets/images/bsxy.jpg'
import qujingLushangImage from '../assets/images/rc.jpg'

const currentForm = ref('拜师学艺')

const toggleForm = () => {
    currentForm.value = currentForm.value === '拜师学艺' ? '取经路上' : '拜师学艺'
    currentImage.value = currentForm.value === '拜师学艺' ? bashiXueYiImage : qujingLushangImage
}

// 根据当前形态切换图片
const currentImage = ref(bashiXueYiImage)

</script>
<style scoped>
div{
    margin: 0;
    text-align: center;
    background-color:aqua;
    padding: 20px;
}
button{
background-color: #e191f1;
padding: 10px;
border: 0;
border-radius: 10px;
}
img {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    transition: transform 0.3s ease;
}

</style>