<script setup lang="ts">
import CreateCategory from '@/components/create-category.vue'
</script>

<template>
  <nav class="navbar">
    <button class="back-button">
      <RouterLink to="/">Back to Home Page</RouterLink>
    </button>
    <CreateCategory />
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 15px 30px;
}

.back-button {
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.back-button a {
  text-decoration: none;
  color: white;
}

.back-button:hover a {
  text-decoration: underline;
}
</style>
