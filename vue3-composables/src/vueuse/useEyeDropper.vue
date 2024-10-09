<script lang="ts" setup>
import { useEyeDropper } from '@vueuse/core'

const { isSupported, open, sRGBHex } = useEyeDropper()
</script>

<template>
    <template v-if="isSupported">
        <div>isSupported: {{ isSupported }}</div>
        <div>sRGBHex: <span :style="{ color: sRGBHex }">{{ sRGBHex }}</span></div>
        <button :disabled="!isSupported" @click="() => open()">
            Open Eye Dropper
        </button>
    </template>
    <div v-else>
        <span>Not Supported by Your Browser</span>
    </div>

    <div style="display: flex; justify-content: start;">
        <div class="box box1"></div>
        <div class="box box2"></div>
        <div class="box box3"></div>
        <div class="box box4"></div>
        <div class="box box5"></div>
    </div>

</template>
<style scoped>
.box {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 10px;
}

.box1 {
    background-color: #d65858;
}

.box2 {
    background-color: #35de35;
}

.box3 {
    background-color: #3b91ed;
}

.box4 {
    background-color: #c961eb;
}

.box4 {
    background-color: #e4db78;
}
</style>
