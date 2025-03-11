import { defineStore } from 'pinia'
import { type Todo } from '../types'

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
      // Check if the category exists
      const categoryExists = this.categories.some((c) => c.name === category)
      if (!categoryExists) {
        alert(`Category "${category}" does not exist.`)
        return
      }

      // Count the number of todos in the given category
      const todosInCategory = this.todos.filter((todo) => todo.category === category)

      // If there are already 10 items in the category, prevent adding more
      if (todosInCategory.length >= 10) {
        alert(`You cannot add more than 10 todos in the "${category}" category.`)
        return
      }

      // Add the new todo
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
