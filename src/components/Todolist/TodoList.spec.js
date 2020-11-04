import { shallowMount } from "@vue/test-utils";
import TodoList from "./TodoList.vue";
import Todo from "../Todo/Todo.vue";

describe("TodoList", () => {
  const deleteTodo = jest.fn();
  const getWrapper = () =>
    shallowMount(TodoList, {
      props: ["todos", "deleteTodo"],
      propsData: {
        todos: [
          {
            id: 1,
            label: "Label",
          },
        ],
        deleteTodo: deleteTodo,
      },
    });

  it("Should render the TODO component", () => {
    expect(getWrapper().findComponent(Todo).exists()).toBe(true);
    expect(getWrapper().findComponent(Todo).props("item")).toMatchObject({
      id: 1,
      label: "Label",
    });
  });

  it("Should delete a TODO on click", () => {
    getWrapper().find(".todo-list").trigger("click");
    expect(deleteTodo).toHaveBeenCalled();
  });
});
