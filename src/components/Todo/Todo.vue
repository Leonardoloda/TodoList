<template id="Todo">
  <li class="todo" :id="'Todo-' + item.id" tabindex="0">
    {{ item.label }}
  </li>
</template>

<script>
import "./Todo.scss";

export default {
  name: "Todo",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
