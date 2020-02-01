import { mount } from "@vue/test-utils";
import Example from "@/src/Example";

describe("Test Example component", () => {
  it("render type property", () => {
    const wrapper = mount(Example, {
      propsData: {
        type: "date"
      }
    });
    expect(wrapper.props().type).toBe("date");
  });
});
