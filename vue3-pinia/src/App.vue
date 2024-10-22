<template>
  <nav>
    <router-link to="/counter">计数器 </router-link>
    <router-link to="/todo">待办清单 </router-link>
    <router-link to="/finance">记账应用 </router-link>
  </nav>

  <router-view />
</template>

<script setup lang="ts">

</script>

<style scoped>
a {
  margin: 10px;
  text-decoration: none;
  color: #3baee0;
  padding: 5px 10px;
}

.router-link-active {
  background-color: #3baee0;
  color: white;
  font-weight: bold;
  border-radius: 8px;
}
</style>