<template>
    <h1>欢迎来到线上书店！</h1>
    <div class="background-container"></div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.background-container {
    position: fixed;
    /* 固定在页面底部 */
    bottom: 0;
    left: 0;
    right: 0;
    height: 60vh;
    /* 占据视窗高度的60% */
    background-image: url("https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/md/202410152218426.webp");
    background-size: cover;
    /* 背景图片拉伸到充满整个容器 */
    background-position: bottom center;
    /* 图片靠近底部并居中 */
    width: 100%;
    /* 充满页面宽度 */
    z-index: -1;
    /* 确保背景在内容后面 */
}

h1 {
    position: relative;
    /* 使标题层级高于背景 */
    color: black;
    font-size: 2rem;
    z-index: 1;
    text-align: center;
    margin: 20px 0;
}
</style>
