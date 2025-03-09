<script setup lang="ts">
import TodoCategory from '@/components/todo-category.vue'
import TodoNavbar from '@/components/navbar.vue'
</script>

<template>
  <div class="container">
    <TodoNavbar />
    <h1 class="title">Todo-List📝</h1>
    <div class="category-container">
      <TodoCategory />
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: url('@/assets/background-image.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.title {
  text-align: center;
  font-size: 32px;
  margin-top: 40px;
}

.category-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}
</style>
