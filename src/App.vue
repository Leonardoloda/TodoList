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

import {randomAlphanumeric} from "./Utilities/Randomizer";

import { TodoStore } from "./store/TodoStore";

import Vue from "vue";
import Vuex from "vuex";

import "./App.scss";

Vue.use(Vuex);
const store = new Vuex.Store(TodoStore);

const App = {
  name: "App",
  components: {
    Title,
    Searchbar,
    TodoList,
    Footer,
  },
  store,
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo: function (todo) {
      this.todos.push({
        id: randomAlphanumeric(),
        label: todo,
      });
    },
    deleteTodo: function (id) {
      this.todos = this.todos.filter((item) => item.id != id);
    },
  },
};

export default App;
</script>
