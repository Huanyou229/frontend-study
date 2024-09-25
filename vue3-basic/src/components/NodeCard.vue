<template>
    <el-row justify="center">
        <el-col :span="4" :offset="1">
            <el-card :body-style="{ padding: '0px' }" class="custom-card">
                <img src="https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/images/11.jpg" class="image" />
                <div style="padding: 14px">
                    <span>前端笔记</span>
                    <div class="bottom">
                        <time class="time">{{ currentDate }}</time>
                        <el-button text class="button">更多</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>

        <el-col :span="4" :offset="1">
            <el-card :body-style="{ padding: '0px' }" class="custom-card">
                <img src="https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/images/12.jpg" class="image" />
                <div style="padding: 14px">
                    <span>数据库笔记</span>
                    <div class="bottom">
                        <time class="time">{{ currentDate }}</time>
                        <el-button text class="button">更多</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>

        <el-col :span="4" :offset="1">
            <el-card :body-style="{ padding: '0px' }" class="custom-card">
                <img src="https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/images/13.jpg" class="image" />
                <div style="padding: 14px">
                    <span>后端笔记</span>
                    <div class="bottom">
                        <time class="time">{{ currentDate }}</time>
                        <el-button text class="button">更多</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style>
.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 5px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;

}

.image {
    width: 360px;
    /* 设置宽度大于高度 */
    height: 220px;

    display: block;
}

.custom-card {
    width: 360px;
    height: 320px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

}
</style>
