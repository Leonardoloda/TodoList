import { mount } from "@vue/test-utils";
import Footer from "./Footer.vue";

describe("Footer", () => {
  it("it should render the component", () => {
    const wrapper = mount(Footer);
    expect(wrapper.find("footer").exists()).toBe(true);
  });

  it("it should render the text", () => {
    const wrapper = mount(Footer);
    expect(wrapper.find("footer").element.innerHTML).toBe(
      "Demo App created By Leo"
    );
  });
});
