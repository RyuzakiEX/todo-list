<script setup lang="ts">
import TodoList from './todo-list.vue'
import { useTodoStore } from '@/stores/todo-store'

const store = useTodoStore()
</script>

<template>
  <div v-for="category in store.paginatedCategories" :key="category.name">
    <TodoList :category="category.name"></TodoList>
  </div>
</template>

<style scoped></style>
