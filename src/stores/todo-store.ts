import { defineStore } from 'pinia'
import { type Todo } from '../types'
import { computed, ref } from 'vue'

let id = 0

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [
      { id: 0, text: 'Clean the House', category: 'Chores' },
      { id: 1, text: 'Laundry', category: 'Chores' },
      { id: 2, text: 'Dishes', category: 'Chores' },
      { id: 3, text: 'Valorant', category: 'Gaming' },
      { id: 4, text: 'Table Tennis', category: 'Gaming' },
      { id: 5, text: 'Basketball', category: 'Gaming' },
      { id: 6, text: 'Watch Movie', category: 'Entertainment' },
      { id: 7, text: 'Read Book', category: 'Entertainment' }
    ],
    categories: [{ name: 'Chores' }, { name: 'Gaming' }, { name: 'Entertainment' }],
    currentPage: 1,
    itemsPerPage: 3
  }),

  getters: {
    // Get the categories based on the page
    paginatedCategories(state) {
      const start = (state.currentPage - 1) * state.itemsPerPage
      return state.categories.slice(start, start + state.itemsPerPage)
    },

    // Calculate total pages
    totalPages(state) {
      return Math.ceil(state.categories.length / state.itemsPerPage)
    }
  },

  actions: {
    addTodo(newTodo: string, category: string) {
      const categoryExists = this.categories.some((c) => c.name === category)
      if (!categoryExists) {
        alert(`Category "${category}" does not exist.`)
        return
      }

      const todosInCategory = this.todos.filter((todo) => todo.category === category)
      if (todosInCategory.length >= 10) {
        alert(`You cannot add more than 10 todos in the "${category}" category.`)
        return
      }

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
    },

    // Pagination handlers
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++
    },

    prevPage() {
      if (this.currentPage > 1) this.currentPage--
    },

    goToPage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
    }
  }
})
