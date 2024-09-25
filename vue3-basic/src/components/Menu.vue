<template>
    <el-row class="tac">
        <el-col :span="12">
            <h5 class="mb-2">Menu 菜单</h5>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>全部文章</span>
                    </template>
                    <el-menu-item-group title="前端笔记">
                        <el-menu-item index="1-1">HTML+CSS+JS</el-menu-item>
                        <el-menu-item index="1-2">Vue3</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="后端笔记">
                        <el-menu-item index="1-3">JAVA笔记</el-menu-item>
                        <el-menu-item index="1-4">SpringBoot笔记</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-5">
                        <template #title>数据库笔记</template>
                        <el-menu-item index="1-5-1">MySQL</el-menu-item>
                        <el-menu-item index="1-5-2">Oracle</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>

                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>文章分类</span>
                </el-menu-item>

                <el-menu-item index="3">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>文章标签</span>
                </el-menu-item>

                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>外部链接</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>