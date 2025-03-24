<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../stores/todo-store'
import TodoBlock from './todo-block.vue'

const store = useTodoStore()

const props = defineProps(['category'])
const newTodo = ref('')

function inputTodo() {
  store.addTodo(newTodo.value, props.category)
  newTodo.value = ''
}
</script>

<template>
  <div class="container">
    <div>
      <h1>{{ category }}</h1>
      <form @submit.prevent="inputTodo">
        <div class="add-input-container">
          <div>
            <input v-model="newTodo" required placeholder="Enter To Do" />
          </div>
          <div>
            <button class="add-button"><span class="add-button-text">Enter</span></button>
          </div>
        </div>
      </form>
      <ul>
        <div class="todo-block-container" v-for="todo in store.todos" :key="todo.id">
          <li v-if="todo.category === props.category">
            <TodoBlock :todo="todo"></TodoBlock>
          </li>
        </div>
      </ul>
      <div class="remove-btn-container">
        <button class="remove-button" @click="store.removeCategory(props.category)">
          Remove Category
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  font-size: 1.2rem;
  min-width: 25vw;
  min-height: 40px;
  border-radius: 12px;
}

ul {
  list-style-type: none;
  padding-left: 0px;
  padding-right: 10px;
  margin-top: 10px;
}

li {
  text-align: left;
  margin: 5px 0 5px 0;
  border-radius: 10px;
  padding: 0px 0px 0px 2px;
}

.add-input-container {
  display: flex;
}

.add-button {
  font-size: 3rem;
  float: right;
  height: 40px;
  min-width: 100px;
  background: black;
  font-size: x-small;
  margin-right: 3px;
  margin-top: 2px;
  border-radius: 12px;
}

.remove-btn-container {
  display: flex;
  justify-content: center;
}

.remove-button {
  color: white;
  font-size: 3rem;
  float: right;
  height: 40px;
  min-width: 100px;
  font-size: medium;
  background-color: rgb(48, 45, 45);
  margin-right: 3px;
  margin-top: 2px;
  border-radius: 12px;
}

.add-button-text {
  font-size: 1.1rem;
  color: white;
}

.container {
  height: 500x;
  display: flex;
  justify-content: center;
  text-align: center;

  right: 0;
  left: 0;
  top: 100px;
  bottom: 0;
  margin: auto;
}

.todo-block-container {
  max-height: max-content;
}
</style>
