<template>
    <el-container>
        <el-header class="custom-header">
            <div class="spacer"></div> <!-- 左侧空白占位符 -->
            <h1 class="title">
                <div class="printer">
                    <TextPrinter />
                </div>
            </h1>
            <div class="avatar-container">
                <el-avatar :size="40" :src="circleUrl" />
            </div>
            <el-badge is-dot class="item">
                <el-button class="share-button" :icon="Share" type="primary" />
            </el-badge>
        </el-header>

        <el-main>
            <el-tabs type="border-card" class="demo-tabs">
                <!-- 首页开始 -->
                <el-tab-pane style="display: flex;flex-direction: column; align-items: center; height: 800px;">
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon>
                                <House />
                            </el-icon>
                            <span>首页</span>
                        </span>
                    </template>

                    <div class="menu-container">
                        <Menu />
                    </div>
                    <div>
                        <Descriptions />
                    </div>
                    <div style="width: 700px; padding-top: 30px;">
                        <Timeline />
                    </div>
                    <div style="width: 240px; position: absolute; right: 100px; top: 200px;display: flex; text-align: center;
                        padding: 10px; border-radius: 12px;">

                        <el-space direction="vertical"
                            style="width: 280px; padding: 20px; border-radius: 12px; background: linear-gradient(135deg, #6169ff, #9b59b6); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                            <el-avatar shape="square" :src="circleUrl" :size="70"></el-avatar>

                            <div style="font-size: 20px; font-weight: 600; color: white;">
                                [Huanyou博客]
                            </div>

                            <div style="padding-top: 10px; color: white;">
                                <span>文章9</span>
                                <span style="padding: 0 10px;">分类11</span>
                                <span>标签13</span>
                            </div>

                            <el-button type="primary" :icon="IceCreamRound" round color="#6169ff"
                                style="margin-top: 10px; width: 140px;">登录</el-button>

                            <div style="padding-top: 10px; color: white; font-size: 20px;">
                                <span><el-icon>
                                        <Calendar />
                                    </el-icon></span>
                                <span style="padding-left: 15px;"><el-icon>
                                        <Bicycle />
                                    </el-icon></span>
                                <span style="padding-left: 15px;"><el-icon>
                                        <CoffeeCup />
                                    </el-icon></span>
                                <span style="padding-left: 15px;"><el-icon>
                                        <EditPen />
                                    </el-icon></span>
                            </div>
                        </el-space>
                    </div>

                </el-tab-pane>
                <!-- 首页结束 -->

                <!-- 文章开始 -->
                <el-tab-pane style="display: flex;flex-direction: column; align-items: center; ">
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon>
                                <Lollipop />
                            </el-icon>
                            <span>文章</span>
                        </span>
                    </template>
                    <!-- 搜索框 -->
                    <div class="input-container">
                        <el-input v-model="input3" placeholder="请输入文章标题" class="input-with-select" size="large">
                            <template #prepend>
                                <el-select v-model="select" placeholder="History" style="width: 115px;" size="large">
                                    <el-option label="Java笔记" value="1" />
                                    <el-option label="前端笔记" value="2" />
                                    <el-option label="数据库笔记" value="3" />
                                </el-select>
                            </template>
                            <template #append>
                                <el-button :icon="Search" />
                            </template>
                        </el-input>
                    </div>
                    <!-- 卡片 -->
                    <div style="width: 100%; padding: 30px 0;">
                        <NodeCard />
                    </div>
                    <div style="width: 100%; ">
                        <NodeCard />
                    </div>

                </el-tab-pane>
                <!-- 文章结束 -->

                <!-- 留言开始 -->
                <el-tab-pane>
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon>
                                <Postcard />
                            </el-icon>
                            <span>留言</span>
                        </span>
                    </template>
                    <div style="width: 100%;text-align: center; ">
                        <div
                            style="width:800px; height: 600px; border: 3px dashed #6169ff;border-radius: 12px;padding:15px ; margin: 20px auto;display: flex;flex-direction: column; align-items: center;">
                            <h2>留言板</h2>
                            <p style="padding: 10px 0;">想说的·想问的·吐槽·交流</p>
                            <div>
                                <UploadAvatar />
                            </div>
                            <div>
                                <input type="text" placeholder="请输入头像地址" class="custom-input"
                                    style="width:600px; height: 16px; border: 2px dashed #ccc ;border-radius: 12px;padding: 10px;">
                                <input type="text" placeholder="请输入昵称" class="custom-input"
                                    style="width:600px; height: 14px; border: 2px dashed #ccc ;border-radius: 12px;padding: 10px; margin: 10px 0;">
                                <textarea placeholder="请输入留言内容" class="custom-input"
                                    style="width:600px; height: 200px; border: 2px dashed #ccc; border-radius: 12px; padding: 10px; text-align: start; resize: none;"></textarea>
                            </div>

                            <el-button type="primary" :icon="Edit" round="true" color="#6169ff"
                                style="margin-top: 10px; width: 80px;">提交</el-button>
                        </div>
                    </div>

                </el-tab-pane>
                <!-- 留言结束 -->

                <!-- 知识库开始 -->
                <el-tab-pane style="display: flex;flex-direction: column; align-items: center; ">
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon>
                                <Reading />
                            </el-icon>
                            <span> 知识库</span>
                        </span>
                    </template>
                    <div class="block" style="padding-top: 20px; text-align: center;">
                        <el-carousel height="300px" style="width: 800px; border-radius: 10px;">
                            <el-carousel-item v-for="(item, index) in carouselItems" :key="index"
                                :style="{ backgroundImage: `url(${item.bg})`, backgroundSize: 'cover', height: '300px' }">
                                <div class="carousel-content">
                                    <h2 class="small justify-center" text="2xl">{{ item.title }}</h2>
                                    <p style="color: white;text-align: justify; padding: 16px;">{{ item.description }}
                                    </p>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <el-empty image="https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/images/404.png" :image-size="300"
                        description="没有数据了哦~" />


                </el-tab-pane>
                <!-- 知识库结束 -->

            </el-tabs>
        </el-main>

        <el-footer>
            <el-image style="width: 120px; height: 120px;transform: scaleX(-1); " :src="url" fit="contain" />
            你觉得我的博客怎么样？
            <el-rate v-model="value" :texts="[' 糟糕', '失望', ' 一般', '很好', '非常棒！']" show-text />

        </el-footer>
    </el-container>
</template>

<script lang="ts" setup>
import Descriptions from './Descriptions.vue'
import { Share } from '@element-plus/icons-vue'
import { Lollipop, House, Postcard, Reading } from '@element-plus/icons-vue'
import TextPrinter from './TextPrinter.vue';
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import NodeCard from './NodeCard.vue';
import UploadAvatar from './UploadAvatar.vue';
import { Edit, IceCreamRound, Calendar, Bicycle, CoffeeCup, EditPen } from '@element-plus/icons-vue';
import { reactive, toRefs } from 'vue';
import Menu from './Menu.vue';
import Timeline from './TimeLine.vue';
const state = reactive({
    circleUrl:
        'https://dayi-shang.oss-cn-nanjing.aliyuncs.com/qq-avatar.jpg',
})
const { circleUrl } = toRefs(state)

const carouselItems = ref([
    { title: '前端课程环境准备', description: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，适合构建快速和可扩展的网络应用。npm 是 Node.js 的包管理器，用于安装和管理 JavaScript 包。', bg: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/images/z1.jpg' },
    { title: '前端发展的几个时代', description: '1990 年诞生了世界上的第一款浏览器，HTML 作为超文本标记语言被用于在网页中展示文字，但此时的 HTML 仅仅是实验室产品。1994 年，网景公司成立并开发了一款名为 Navigator的浏览器，HTML 技术得到了推广。Navigator 浏览器诞生后，CSS、HTML2和 W3C 联盟相继出现。', bg: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/images/z2.jpg' },
    { title: '掌握前端的三驾马车', description: 'HTML 是伴随浏览器一起出现的超文本标记语言。HTML 由一系列的元素组成，在浏览器上可以看到的所有消息(如文字、图片和视频等)都是基于 HTML 元素搭建的。HTML 元素就像积木一样，可以任意嵌套和排列组合，由此搭建出各种各样的页面。', bg: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/images/z3.jpg' },
    { title: '新时代的JavaScript', description: 'ES6+是指从 ECMAScript 标准的第6个版本开始到目前为止所有的更新。ES6 是JavaScript 语法的一个分水岭，从 ES6 开始，几平每年都会推出一个新版本，新增更多功能以应对前端的变化。', bg: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/images/z4.jpg' },
    { title: 'Vue.js3基础', description: '当前 Vue.js 的版本是 Vue.js3(简称 Vue 3)。Vue.js 3 在兼容老版本语法的基础上，新增了更多面向未来的扩展性功能。在学习 Vue.js3时，可以完全使用现代 JavaScript 语法，需要先掌握前端基础部分的内容。', bg: 'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/images/z5.jpg' },
]);

const input3 = ref('')
const select = ref('');
const value = ref()
const url =
    'https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/images/girl.png'
</script>

<style scoped>
.menu-container {
    width: 320px;
    position: absolute;
    left: 10px;
    /* 将 Menu 放置到最左侧 */
    top: 0;
    /* 可选：将 Menu 放置在顶部 */
    /* padding-left: 50px; */
    /* 给 Menu 一些内边距 */
}

.custom-input:focus {
    /* border: 2px dashed #6169ff; */
    outline: none;
    /* outline-color: #6169ff;
    outline-style: dashed;
    outline-width: 2px; */

}

.carousel-content {
    text-align: center;

}

.el-carousel__item h2 {
    color: rgb(1, 86, 156);
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
}


.input-container {
    display: flex;
    justify-content: center;
    width: 100%;
}

.input-with-select {
    width: 80%;
    max-width: 600px;
}

* {
    margin: 0;
    padding: 0;
}

.el-container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url('https://hyzhu-oss.oss-cn-hangzhou.aliyuncs.com/images/bg.png');
}

.custom-header {
    margin-top: 10px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 10px 20px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    /* 左右对齐 */
    align-items: center;
    /* 垂直居中 */
}

.title {
    flex-grow: 1;
    text-align: center;
    /* 保持标题居中 */
    margin: 0;
    /* 去掉默认的 h1 外边距 */
}

.avatar-container {
    margin-left: auto;
    margin-right: 30px;
    /* 确保头像在右侧 */
}

.item {
    margin-right: 20px;
}

.el-main {
    /* background-color: green; */
    padding-top: 70px;
    /* 保证内容不被固定的 header 覆盖 */
    /* flex-grow: 1; */
}

.el-footer {
    left: 0;
    bottom: 65px;
    position: fixed;
    /* background-color: #d07878; */
    width: 100%;

}

.demo-tabs>.el-tabs__content {
    background-color: transparent;
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}
</style>