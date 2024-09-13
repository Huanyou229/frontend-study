<template>
    <div class="box">
        <p>血量: {{ currentHp }} / {{ maxHp }} ( {{ hpPercentage }}% )</p>
        <div class="hp">
            <div :style="hpBarStyle"></div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const maxHp = 100
const currentHp = ref<number>(80)


const hpPercentage = computed(() => {
    return (currentHp.value / maxHp) * 100
})

const hpBarStyle = computed(() => {
    let color
    if (hpPercentage.value > 50) {
        color = 'green'
    } else if (hpPercentage.value > 20) {
        color = 'orange'
    } else {
        color = 'red'
    }

    return {
        width: `${hpPercentage.value}%`,
        backgroundColor: color,
        height: '30px',
        borderRadius: '15px',
        transition: 'width 0.5s ease-in-out'
    }
})

</script>

<style scoped>
.box {
    width: 80%;
    margin: 0 auto;
}

p {
    text-align: center;
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 540;
}

.hp {
    width: 100%;
    background-color: #ddd;
    height: 30px;
    border-radius: 15px;

}
</style>