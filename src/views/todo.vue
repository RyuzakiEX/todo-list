<script setup lang="ts">
import TodoCategory from '@/components/todo-category.vue'
import TodoNavbar from '@/components/navbar.vue'
import { useTodoStore } from '@/stores/todo-store'

const store = useTodoStore()
</script>

<template>
  <div class="container">
    <TodoNavbar />
    <h1 class="title">Todo-List📝</h1>
    <!-- Smooth Transition -->
    <transition name="fade" mode="out-in">
      <div class="category-container" :key="store.currentPage">
        <TodoCategory />
      </div>
    </transition>

    <!-- Modern Pagination Controls -->
    <div class="pagination">
      <button @click="store.prevPage" :disabled="store.currentPage === 1" class="btn prev">
        ⬅ Previous
      </button>

      <div class="page-numbers">
        <button
          v-for="page in store.totalPages"
          :key="page"
          @click="store.goToPage(page)"
          :class="{ active: page === store.currentPage }"
        >
          {{ page }}
        </button>
      </div>

      <button
        @click="store.nextPage"
        :disabled="store.currentPage === store.totalPages"
        class="btn next"
      >
        Next ➡
      </button>
    </div>
  </div>
</template>

<style scoped>
/* ======= Container Style ======= */
.container {
  box-sizing: border-box;
  padding-bottom: 60px;
}

.title {
  text-align: center;
  font-size: 32px;
}

/* ======= Smooth Page Transition ======= */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ======= Category Grid ======= */
.category-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  margin: 0 10px 0 10px;
}

.pagination {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.1); /* Very light transparency */
  backdrop-filter: blur(20px); /* Enhanced glass effect */
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  z-index: 100;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
}

/* ======= Previous & Next Buttons ======= */
button.btn {
  padding: 10px 30px;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 12px;
  color: #000;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
}

button.btn:hover {
  background-color: rgba(0, 12, 122, 0.5);
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

button.btn:disabled {
  background-color: rgba(255, 255, 255, 0.1);
  color: #777;
  cursor: not-allowed;
}

/* ======= Page Numbers ======= */
.page-numbers {
  display: flex;
  gap: 10px;
  margin: 0 20px;
}

.page-numbers button {
  padding: 10px 15px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  color: #000;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.page-numbers button:hover {
  background-color: rgba(255, 255, 255, 0.6);
  transform: scale(1.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.page-numbers button.active {
  background-color: rgba(18, 196, 202, 0.8);
  color: #240088;
  transform: scale(1.15);
  font-weight: bold;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* ======= Mobile Responsive ======= */
@media (max-width: 768px) {
  .page-numbers button {
    padding: 8px 10px;
  }

  button.btn {
    padding: 8px 20px;
  }
}
</style>
