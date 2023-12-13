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
  }
}).mount('#app')