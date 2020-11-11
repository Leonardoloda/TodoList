<template id="TodoList">
  <ol
    aria-label="your todos"
    v-on:click="deleteItem"
    v-on:keyup.enter="deleteItem"
    class="todo-list"
  >
    <Todo
      v-for="item in todos"
      v-bind:item="item"
      v-bind:key="'Todo-' + item.id"
    />
  </ol>
</template>

<script>
import Todo from "../Todo/Todo";
import "./TodoList.scss";

export default {
  name: "TodoList",
  components: {
    Todo,
  },
  computed: {
    todos()  {
      return this.$store.state.todos;
    }
  },
  props: {
    deleteTodo: {
      type: Function,
      required: true,
    },
  },
  methods: {
    deleteItem(e) {
      console.log(e);
      this.deleteTodo(e.target.id.split("-")[1]);
    },
  },
};
</script>
