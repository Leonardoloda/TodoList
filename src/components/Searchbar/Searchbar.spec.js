const { mount } = require("@vue/test-utils");
import Searchbar from "./Searchbar.vue";

describe("Searchbar", () => {
  const addTodo = jest.fn();
  const getWrapper = () => {
    return mount(Searchbar, {
      props: ["add"],
      propsData: {
        add: addTodo,
      },
    });
  };

  it("Should render the component", () => {
    expect(getWrapper().find("input#todo-text").exists()).toBe(true);
    expect(getWrapper().find("button.searchbar__button").exists()).toBe(true);
  });

  it("Should add the right text", async () => {
    const input = getWrapper().find("input#todo-text");
    await input.setValue("Todo");

    expect(input.element.value).toBe("Todo");
  });

  it("Should trigger the add todo", async () => {
    const form = getWrapper().find("form");
    const input = form.find("input#todo-text");

    await input.setValue("Todo");
    form.trigger("submit");

    expect(addTodo).toHaveBeenCalledWith("Todo");
  });
});
