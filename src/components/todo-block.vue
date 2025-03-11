<script setup lang="ts">
import { useTodoStore } from '../stores/todo-store'
import { ref } from 'vue'

const store = useTodoStore()
const props = defineProps(['todo'])

const isEditable = ref<boolean>(false)
const newEdit = ref('')
function toggleEdit() {
  isEditable.value = !isEditable.value
}

function toEdit() {
  store.editTodo(props.todo, newEdit.value)
  toggleEdit()
}
</script>

<template>
  <div class="todo-block">
    <div class="block-left">
      <div class="checkbox">
        <input type="checkbox" />
      </div>
      <div>
        <input v-model="newEdit" type="text" v-if="isEditable" @keyup.enter="toEdit" />
        <div v-else>{{ props.todo.text }}</div>
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
div {
  font-size: 2rem;
  margin-left: 2px;
}
.todo-block {
  display: flex;
  justify-content: space-between;
  min-width: 30vw;
  min-height: 40px;
}

.remove,
.edit {
  font-size: 3rem;
  float: right;
  height: 30px;
  min-width: 30px;
  width: max-content;
  background: red;
  font-size: x-small;
  margin-right: 3px;
  margin-top: 2px;
  border-radius: 12px;
  font-size: 1.1rem;
}

.edit {
  background: aqua;
}

.block-left {
  display: flex;
}
</style>
