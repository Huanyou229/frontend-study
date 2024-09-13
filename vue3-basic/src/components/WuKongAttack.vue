<template>
    <div class="container">
        <div class="group">
            <label for="base-attack">基础攻击力：</label>
            <input id="base-attack" v-model="baseAttack" type="number" class="box">
        </div>
        <div class="group">
            <label for="gear-bonus">装备加成：</label>
            <input id="gear-bonus" v-model="gearBonus" type="number" class="box">
        </div>
        <div>
            <p>总攻击力：<span class="total-attack">{{ totalAttack }}</span></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
const baseAttack = ref<number>(50)
const gearBonus = ref<number>(20)
const totalAttack = computed(() => baseAttack.value + gearBonus.value)
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f88a;
}

.group {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
    margin-bottom: 8px;
    display: inline-block;
}

.box {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.total-attack {
    font-weight: bold;
    font-size: 1.2em;
    color: #d9534f;
}
</style>
