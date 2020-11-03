// TODO: Add a footer to the app
<template>
  <div id="app" class="app">
    <Title />
    <main class="app__content">
      <Searchbar :add="addTodo" />
      <TodoList
        :todos="todos"
        :deleteTodo="deleteTodo"
        v-if="todos.length > 0"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import Title from "./components/Title/Title";
import Searchbar from "./components/Searchbar/Searchbar";
import TodoList from "./components/Todolist/TodoList";
import Footer from "./components/Footer/Footer";

import "./App.scss";

export default {
  name: "App",
  components: {
    Title,
    Searchbar,
    TodoList,
    Footer,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    // TODO: Find a better way to handle the ids
    addTodo: function (todo) {
      this.todos.push({
        id: this.todos.length + 1,
        label: todo,
      });
    },
    deleteTodo: function (id) {
      this.todos = this.todos.filter((item) => item.id != id);
    },
  },
};
</script>
