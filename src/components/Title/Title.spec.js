const { mount } = require("@vue/test-utils");
import Title from "./Title.vue";

describe("Title", () => {
  it("Should render the component", () => {
    const wrapper = mount(Title);
    expect(wrapper.find("header").exists()).toBe(true);
  });

  it("Should render the tittle", () => {
    const wrapper = mount(Title);
    expect(wrapper.find("h1").element.innerHTML).toBe("TODO List");
  });
});
