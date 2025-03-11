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
  box-sizing: border-box;
}

.title {
  text-align: center;
  font-size: 32px;
  margin-top: 40px;
}

.category-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
  justify-items: center;
  margin: 0 10px 0 10px;
}
</style>
