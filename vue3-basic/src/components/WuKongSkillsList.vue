<template>
    <div>
        <ul>
            <h1>技能列表</h1>
            <li v-for="skill in skills" :key="skill.id">
                <span>{{ skill.name }} - </span>
                <span v-if="skill.unlocked" :style="unlockedStyle">已解锁</span>
                <span v-else :style="lockedStyle">未解锁</span>
            </li>
        </ul>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
    id: number
    name: string
    unlocked: boolean
}
const skills = ref<Skill[]>([
    { id: 1, name: "七十二变", unlocked: true },
    { id: 2, name: "火眼金睛", unlocked: false },
    { id: 3, name: "筋斗云", unlocked: true }
])

const unlockedStyle = {
    color: 'green',
    fontWeight: 'bold'
}

const lockedStyle = {
    color: 'red',
    fontWeight: 'bold'
}

</script>

<style scoped>
h1 {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
}

/* 针对 ul 标签的样式 */
ul {
    background-color: rgb(255, 215, 0);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px;
    list-style: none;
    margin: 0 auto;
}

/* 针对 li 标签的样式 */
li {
    font-size: 18px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

/* 鼠标悬停时的背景效果 */
li:hover {
    background-color: #f0f8ff;
}

/* 针对 span 标签的样式 */
span {
    font-weight: 600;
}
</style>