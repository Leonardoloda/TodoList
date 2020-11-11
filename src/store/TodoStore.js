const TodoStore = {
  state: {
    todos: [],
  },
  mutations: {
    addTodo: function (state, todo) {
      state.todos.push({
        id: state.todos.length + 1,
        label: todo,
      });
    },
    deleteTodo: function (state, id) {
      state.todos = state.todos.filter((item) => item.id != id);
    },
  }
};

export { TodoStore };
