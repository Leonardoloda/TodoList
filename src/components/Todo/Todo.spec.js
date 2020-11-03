import { mount } from "@vue/test-utils";
import Todo from "./Todo.vue";

describe("Todo", () => {
  it("Should render the component", () => {
    const wrapper = mount(Todo, {
      propsData: {
        item: {
          id: "Todo-1",
          label: "Todo 1",
        },
      },
    });
    expect(wrapper.find("li").exists()).toBe(true);
  });

  it("Should have the right label", () => {
    const wrapper = mount(Todo, {
      propsData: {
        item: {
          id: "Todo-1",
          label: "Todo 1",
        },
      },
    });

    expect(wrapper.find("li").element.innerHTML.trim()).toBe("Todo 1");
  });

  it("Should have the right id", () => {
    const wrapper = mount(Todo, {
      props: ["item"],
      propsData: {
        item: {
          id: "1",
          label: "Todo 1",
        },
      },
    });
    expect(wrapper.attributes("id")).toBe("Todo-1");
  });
});
