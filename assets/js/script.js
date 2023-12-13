const { createApp } = Vue

createApp({
  data() {
    return {
      todos: [
        { text: 'Asda', done: false },
        { text: 'Asdaasd', done: true },
        { text: 'Asdadsadas', done: false },
      ],
      newTodoText: '',
    }
  },
  methods: {
    createTodo() {
      if (this.newTodoText.trim() !== '') {
        this.todos.push({ text: this.newTodoText, done: false })
        this.newTodoText = ''
      }
    },
    updateTodo(index) {
      this.todos[index].done = !this.todos[index].done
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    }
  }
}).mount('#app')