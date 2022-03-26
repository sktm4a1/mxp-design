import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
} from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: "test",
};
const testVerticalProps: MenuProps = {
  defaultIndex: 0,
  mode: "vertical",
};
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>active</MenuItem>
      <MenuItem index={1} disabled>
        disabled
      </MenuItem>
      <MenuItem index={2}>xyz</MenuItem>
    </Menu>
  );
};
let wrapper: RenderResult,
  menuEl: HTMLElement,
  activeEl: HTMLElement,
  disableEl: HTMLElement;
describe("test Menu and MenuItem Component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuEl = wrapper.getByTestId("test-menu");
    activeEl = wrapper.getByText("active");
    disableEl = wrapper.getByText("disabled");
  });

  it("should render correct menu and menuItem with default props", () => {
    expect(menuEl).toBeInTheDocument();
    expect(menuEl).toHaveClass("mxp-menu test");
    expect(menuEl.getElementsByTagName("li").length).toEqual(3);
    expect(activeEl).toHaveClass("mxp-menuItem is-active");
    expect(disableEl).toHaveClass("mxp-menuItem is-disabled");
  });
  it("click item should change active and call the right callback function", () => {
    const thirdItem = wrapper.getByText("xyz");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("is-active");
    expect(activeEl).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith(2);
    fireEvent.click(disableEl);
    expect(disableEl).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith();
  });
  it("should render vertical mode when mode is set to vertical", () => {
    cleanup();
    const wrapper = render(generateMenu(testVerticalProps));
    const menuEl = wrapper.getByTestId("test-menu");
    expect(menuEl).toHaveClass("menu-vertical");
  });
});
