<template>
    <div class="equipment">
      <h1>装备管理</h1>
      <div class="input-group">
        <input v-model="newEquipment" type="text" placeholder="输入装备名称" />
        <button @click="addEquipment">添加装备</button>
      </div>
      <ul>
        <li v-for="(equipment, index) in equipmentList" :key="index" class="equipment-item">
          <span>{{ equipment }}</span>
          <button @click="removeEquipment(index)">删除</button>
        </li>
      </ul>
      <ul v-if="newEquipment">
        <li class="bubble">
          <span>{{ newEquipment }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const newEquipment = ref<string>('');
  
  const equipmentList = ref<string[]>([]);
  
  const addEquipment = () => {
    if (newEquipment.value.trim()) {
      equipmentList.value.push(newEquipment.value.trim());
      newEquipment.value = '';
    }
  };
  
  const removeEquipment = (index: number) => {
    equipmentList.value.splice(index, 1);
  };
  </script>
  
  <style scoped>
  .equipment {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  
  .input-group {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  input {
    padding: 8px;
    font-size: 16px;
    width: 60%;
    margin-right: 10px;
    border-radius: 5px;
  }
  
  input:focus {
    border-color: blue;
    outline: none;
  }
  
  button {
    padding: 8px 12px;
    background-color: #2573fd;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  .equipment-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-bottom: 2px;
    border-radius: 5px;
  }
  
  .equipment-item button {
    margin-left: 10px;
    background-color: #2573fd;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
  }
  
  .bubble span {
    font-size: small;
    margin-top: 5px;
    display: inline-block;
    padding: 8px;
    background-color: #656464;
    color: white;
    border: 1px solid #656464;
    border-radius: 15px;
  }
  </style>
  