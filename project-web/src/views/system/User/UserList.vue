<template>
  <h2>用户管理</h2>
  <div>
    <el-button type="primary" size="default" @click="addBtn">新增</el-button>
    <sys-dialog :title="dialog.title" :visible="dialog.visible" :width="dialog.width" :height="dialog.height"
      @onClose="onClose" @onConfirm="onConfirm">
      <template v-slot:content>
        <div>我是弹框</div>
      </template>
    </sys-dialog>
  </div>
</template>
<script setup lang="ts">
import SysDialog from "@/components/SysDialog.vue";
import { reactive } from "vue";
const dialog = reactive({
  title: "用户管理",
  width: 600,
  height: 300,
  visible: false,
});
const addBtn = () => {
  dialog.visible = true;
};
const onClose = () => {
  dialog.visible = false;
};
const onConfirm = () => {
  dialog.visible = false;
};
</script>