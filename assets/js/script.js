const { createApp } = Vue

createApp({
  data() {
    return {
      todos: [
        { text: 'Asda', done: false },
        { text: 'Asdaasd', done: true },
        { text: 'Asdadsadas', done: false },
      ]
    }
  },
  methods: {
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
}).mount('#app')