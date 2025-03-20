<script setup lang="ts">
import { useTodoStore } from '../stores/todo-store'
import { ref, computed } from 'vue'

const store = useTodoStore()
const props = defineProps(['todo'])

const isEditable = ref<boolean>(false)
const newEdit = ref('')
const checked = ref<boolean>(false)

function toggleEdit() {
  isEditable.value = !isEditable.value
}

function toEdit() {
  store.editTodo(props.todo, newEdit.value)
  toggleEdit()
}

const textClass = computed(() => {
  return checked.value ? 'strikethrough' : ''
})
</script>

<template>
  <div class="todo-block">
    <div class="block-left">
      <div class="checkbox">
        <input type="checkbox" v-model="checked" />
      </div>
      <div>
        <input v-model="newEdit" type="text" v-if="isEditable" @keyup.enter="toEdit" />
        <div>
          <span :class="textClass">{{ props.todo.text }}</span>
        </div>
      </div>
    </div>
    <div>
      <button class="remove" @click="store.removeTodo(todo)">x</button>
      <button v-if="isEditable" class="edit" @click="toEdit">Submit</button>
      <button v-else class="edit" @click="toggleEdit">✎</button>
    </div>
  </div>
</template>

<style scoped>
.todo-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  height: 60px;
  margin: 10px 0;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: background-color 0.3s;
}

.todo-block:hover {
  background-color: #f0f0f0;
}

.block-left {
  display: flex;
  align-items: center;
  flex: 1;
}

.checkbox input {
  margin-right: 12px;
  width: 20px;
  height: 20px;
  accent-color: #007bff;
}

.edit-input {
  padding: 8px 12px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  transition: border-color 0.3s;
}

.edit-input:focus {
  border-color: #007bff;
}

.todo-text {
  font-size: 1.2rem;
  color: #333;
  margin-left: 12px;
  word-wrap: break-word;
  max-width: 200px;
  transition: text-decoration 0.3s;
}

.strikethrough {
  text-decoration: line-through;
  color: #888;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.remove,
.edit {
  font-size: 1.2rem;
  padding: 6px 12px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;
}

.remove:hover,
.edit:hover {
  background-color: #c0392b;
  transform: scale(1.1);
}

.edit {
  background-color: #3498db;
}

.edit:hover {
  background-color: #2980b9;
}

button:focus {
  outline: none;
}

button:active {
  transform: scale(0.98);
}
</style>
