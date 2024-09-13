<template>
  <div>
    <!-- 使用 Element Plus 布局容器，占据整个屏幕高度 -->
    <el-container style="height: 100vh">
      <!-- Header 部分，显示标题 "待办事项" -->
      <el-header>
        <h1>待办事项</h1>
      </el-header>
      <!-- Main 主体部分 -->
      <el-main>
        <!-- 输入框用于输入新的待办事项，绑定 v-model 到 newTodo，监听回车键触发 addTodo -->
        <el-input v-model="newTodo" @keyup.enter="addTodo" placeholder="输⼊待办事项" style="margin-bottom: 20px" />
        <div>
          <!-- 遍历 todos 数组，使用 v-for 渲染每个待办事项的卡片 -->
          <el-card v-for="todo in todos" :key="todo.id" class="todo-item" style="margin-bottom: 10px">
            <!-- 卡片内容，使用 flex 布局使复选框和文本水平对齐 -->
            <div style="display: flex; align-items: center">
              <!-- 复选框绑定到 todo.completed，用于标记待办事项是否完成 -->
              <el-checkbox v-model="todo.completed" />
              <!-- 显示待办事项的文本内容 -->
              <span style="margin-left: 10px">{{ todo.text }}</span>
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
// 引入 Vue 的 ref 函数用于声明响应式变量
import { ref } from 'vue'

// 从 Element Plus 中引入所需的组件
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElInput,
  ElCard,
  ElCheckbox,
} from 'element-plus'

// 定义待办事项的类型接口
interface Todo {
  id: number  // 待办事项的唯一 ID
  text: string  // 待办事项的文本内容
  completed: boolean  // 是否完成的状态
}

// 定义一个用于保存输入的新待办事项文本的响应式变量
const newTodo = ref<string>('')

// 定义一个用于存储所有待办事项的响应式数组
const todos = ref<Todo[]>([])

// 定义添加新待办事项的函数
const addTodo = () => {
  // 判断输入的内容是否为空，去除空格后执行
  if (newTodo.value.trim()) {
    // 向 todos 数组中添加新待办事项对象，使用当前时间戳作为 ID
    todos.value.push({
      id: Date.now(),  // 生成唯一的 ID
      text: newTodo.value,  // 存储输入的待办事项文本
      completed: false  // 默认新事项为未完成状态
    })
    // 清空输入框内容
    newTodo.value = ''
  }
}
</script>

<style>
/* 为待办事项的卡片添加样式 */
.todo-item {
  padding: 10px;
  /* 设置内边距 */
  border: 1px solid #dcdfe6;
  /* 添加边框颜色 */
  border-radius: 4px;
  /* 设置圆角 */
}
</style>
