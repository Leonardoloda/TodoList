<template id="Searchbar">
  <form
    v-on:submit.prevent="agregar"
    aria-label="Agregar todo"
    class="searchbar"
  >
    <label class="sr-only" for="todo-text">Todo</label>
    <input
      type="text"
      id="todo-text"
      label="search term"
      title="Search"
      v-model="searchElement"
      class="searchbar__input"
    />
    <button
      type="submit"
      :disabled="searchElement.trim().length === 0"
      class="searchbar__button"
    >
      Agregar
    </button>
  </form>
</template>

<script>
import "./Searchbar.scss";

export default {
  name: "Searchbar",
  data: () => ({
    searchElement: "",
  }),
  props: {
    add: {
      type: Function,
      required: true,
    },
  },
  methods: {
    agregar: function () {
      this.add(this.searchElement);
      this.searchElement = "";
    },
  },
};
</script>
