<template>
  <el-icon @click="setCollapse" style="cursor: pointer" color="#FFF" size="30">
    <component :is="status ? Fold : Expand"></component>
  </el-icon>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Fold, Expand } from "@element-plus/icons-vue";
import { useMenuStore } from "@/store/menu";
//获取store
const store = useMenuStore();
//获取状态
const status = computed(() => {
  return !store.getCollapse;
});
//切换图标点击事件
const setCollapse = () => {
  store.setCollapse(!store.getCollapse);
};
</script>