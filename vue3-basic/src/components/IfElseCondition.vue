<!-- 结合 v-if 和 v-else-if 的条件渲染 -->
<template>
    <div>
        <p v-if="userAge < 18">未成年⽤户</p>
        <p v-else-if="userAge >= 18 && userAge < 60">成年⽤户</p>
        <p v-else>⽼年⽤户</p>
        <button @click="increaseAge">增加年龄</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// 定义年龄状态
const userAge = ref<number>(16)
// 定义增加年龄的⽅法
const increaseAge = (): void => {
    userAge.value++
}
</script>
<!-- 使⽤ v-if 、 v-else-if 和 v-else 结合，展示不同年龄段的提示；
通过按钮点击增加 userAge 的值，并动态更新显示的内容。 -->