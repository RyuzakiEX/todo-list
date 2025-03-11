<script setup lang="ts">
import CreateCategory from '@/components/create-category.vue'
</script>

<template>
  <nav class="navbar">
    <button class="back-button">
      <RouterLink to="/">⬅ Back to Home Page</RouterLink>
    </button>
    <CreateCategory />
  </nav>
</template>

<style scoped>
.navbar {
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1); /* Glassmorphism Effect */
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Back Button Style */
.back-button {
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  transform: scale(1.05);
}

.back-button:hover a {
  text-decoration: underline;
  color: #0e7a00;
}

/* Create Category Button */
.create-category {
  background-color: #2f00ff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 255, 0, 0.2);
}

.create-category:hover {
  background-color: #3e9c42;
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 255, 0, 0.4);
}
</style>
