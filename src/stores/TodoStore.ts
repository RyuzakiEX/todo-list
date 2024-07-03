import { defineStore } from 'pinia'
import { type Todo } from '../types'

//state = ref/data
//getter = computed
//action = methods

let id = 0

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [
      { id: 0, text: 'Clean the House', category: 'Chores' },
      { id: 1, text: 'Laundry', category: 'Chores' },
      { id: 2, text: 'Dishes', category: 'Chores' },
      { id: 3, text: 'Valorant', category: 'Gaming' },
      { id: 4, text: 'Table Tennis', category: 'Gaming' },
      { id: 5, text: 'Basketball', category: 'Gaming' }
    ],
    categories: [{ name: 'Chores' }, { name: 'Gaming' }]
  }),
  actions: {
    addTodo(newTodo: string, category: string) {
      this.todos.push({ id: id++, text: newTodo, category: category })
    },

    removeTodo(todo: Todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    },

    editTodo(todo: Todo, text: string) {
      this.todos.map((t, index) => {
        if (t.id === todo.id) {
          this.todos[index].text = text
        }
      })
    },

    addCategory(newCategory: string) {
      this.categories.push({ name: newCategory })
    },

    removeCategory(category: string) {
      this.categories = this.categories.filter((c) => c.name !== category)
    }
  }
})
