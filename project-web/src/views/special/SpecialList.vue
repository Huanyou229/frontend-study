﻿<template>
  <el-main>
    <!-- 搜索栏 -->

    <el-form :model="searchParm" :inline="true" size="default">
      <el-form-item>
        <el-input placeholder="请输入关键字" v-model="searchParm.title"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button icon="Search" @click="searchBtn">搜索</el-button>

        <el-button icon="Close" type="danger" plain @click="resetBtn">重置</el-button>

        <el-button icon="Plus" type="primary" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>

    <!-- <el-row :gutter="10">

      <el-col :span="6" v-for="(item, index) in tableList" :key="index">

        <el-card>

          <template #header>{{ item.title }}</template>

<el-text line-clamp="2">{{ item.introduction }}</el-text>

<img :src="item.banner" style="width: 100%; height: 140px" />

<el-space wrap>

  <el-text type="primary">关注数: {{ item.followersCount }}</el-text>

  <el-text type="success">浏览量: {{ item.viewCount }}</el-text>

</el-space>

<template #footer>

            <el-button type="primary" icon="Edit" size="default" @click="editBtn(item)">编辑</el-button>

            <el-button type="danger" icon="Delete" size="default" @click="deleteBtn(item.id)">删除</el-button>

          </template>

</el-card>

</el-col>

</el-row> -->
    <el-table :height="tableHeight" :data="tableList" border stripe>
      <el-table-column prop="title" label="专题名称"></el-table-column>

      <el-table-column label="图片">
        <template #default="scope">
          <el-image :src="scope.row.banner" fit="cover" />
        </template>
      </el-table-column>

      <el-table-column label="描述">
        <template #default="scope">
          <el-text line-clamp="2">{{ scope.row.introduction }}</el-text>
        </template>
      </el-table-column>

      <el-table-column label="是否关注" align="center">
        <template #default="{ row }">
          <el-switch v-model="row.isFollowing" active-color="#13ce66" inactive-color="#ff4949"
            @change="handleFollowChange(row)" />
        </template>
      </el-table-column>

      <el-table-column prop="followerCount" label="关注数"></el-table-column>

      <el-table-column prop="viewCount" label="浏览数"></el-table-column>

      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button type="primary" icon="Edit" size="small" @click="editBtn(scope.row)">编辑</el-button>

          <el-button type="danger" icon="Delete" size="small" @click="deleteBtn(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->

    <el-pagination @size-change="sizeChange" @current-change="currentChange" :current-page.sync="searchParm.currentPage"
      :page-sizes="[10, 20, 40, 80, 100]" :page-size="searchParm.pageSize"
      layout="total, sizes, prev, pager, next, jumper" :total="searchParm.total" background></el-pagination>

    <!-- 新增、编辑弹框 -->

    <SysDialog :title="dialog.title" :width="dialog.width" :height="dialog.height" :visible="dialog.visible"
      @on-close="onClose" @on-confirm="commit">
      <template v-slot:content>
        <el-form :model="addModel" ref="addRef" :rules="rules" label-width="80px" inline="false" size="default">
          <el-form-item prop="title" label="专题名称">
            <el-input v-model="addModel.title"></el-input>
          </el-form-item>

          <el-form-item prop="banner" label="专题图片">
            <el-input v-model="addModel.banner"></el-input>
          </el-form-item>

          <el-form-item prop="introduction" label="专题描述">
            <el-input v-model="addModel.introduction"></el-input>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { ElMessage, FormInstance } from "element-plus";
import { addApi, getListApi, editApi, deleteApi } from "@/api/special/index";
import { Special } from "@/api/special/SpecialModel";
import useInstance from "@/hooks/useInstance";

// 获取全局 golbal
const { global } = useInstance();
// 表单 ref 属性
const addRef = ref<FormInstance>();

// 弹框属性
const { dialog, onClose, onShow } = useDialog();

// 表单绑定的对象
const searchParm = reactive({
  currentPage: 1,
  pageSize: 10,
  title: "",
  total: 0,
});

// 判断新增还是编辑的标识 0:新增 1:编辑
const tags = ref("");
// 处理关注状态变化的逻辑
const handleFollowChange = (row: any) => {
  console.log(`关注状态已更新: ${row.title} - ${row.isFollowing}`);
  // 可在此处调用 API，更新关注状态
};

// 新增按钮
const addBtn = () => {
  tags.value = "0";
  dialog.title = "新增";
  dialog.height = 180;
  onShow();
  // 清空表单
  addRef.value?.resetFields();
};

// 新增表单对象
const addModel = reactive({
  id: "",
  title: "",
  banner: "",
  introduction: "",
  isFollowing: false,
  followerCount: 0,
  viewCount: 0,
});

// 表单验证规则
const rules = reactive({
  title: [{ required: true, message: "请输入专题名称", trigger: "change" }],
});

// 编辑按钮
const editBtn = (row: Special) => {
  tags.value = "1";
  console.log(row);
  // 显示弹框
  dialog.visible = true;
  dialog.title = "编辑";
  dialog.height = 180;

  nextTick(() => {
    // 回显数据
    Object.assign(addModel, row);
  });
  addRef.value?.resetFields();
};

// 删除按钮
const deleteBtn = async (id: string) => {
  console.log(id);
  console.log(global);
  const confirm = await global.$myconfirm("确定删除该数据吗?");
  console.log(confirm);
  if (confirm) {
    let res = await deleteApi(id);
    if (res && res.code == 200) {
      ElMessage.success(res.msg);
      // 刷新列表
      getList();
    }
  }
};

// 页容量改变时触发
const sizeChange = (size: number) => {
  searchParm.pageSize = size;
  getList();
};

// 页数改变时触发

const currentChange = (page: number) => {
  searchParm.currentPage = page;
  getList();
};

// 表单提交

const commit = () => {
  addRef.value?.validate(async (valid) => {
    if (valid) {
      console.log("表单验证通过");
      // 提交请求
      let res = null;
      if (tags.value === "0") {
        // 新增
        res = await addApi(addModel);
      } else {
        // 编辑
        res = await editApi(addModel);
      }
      if (res && res.code == 200) {
        ElMessage.success(res.msg);
        // 刷新列表
        getList();
        // 关闭弹框
        onClose();
      }
    }
  });
};

// 表格高度
const tableHeight = ref(0);

// 表格数据
const tableList = ref<Special[]>([]);

// 查询列表
const getList = async () => {
  let res = await getListApi(searchParm);

  if (res && res.code == 200) {
    // 设置表格数据
    console.log(res);
    tableList.value = res.data.records;
    // 设置分页总条数
    searchParm.total = res.data.total;
  }
};

// 搜索
const searchBtn = () => {
  getList();
};

// 重置
const resetBtn = () => {
  searchParm.title = "";
  searchParm.currentPage = 1;
  getList();
};
onMounted(() => {
  nextTick(() => {
    tableHeight.value = window.innerHeight - 230;
  });
  getList();
});
</script>
