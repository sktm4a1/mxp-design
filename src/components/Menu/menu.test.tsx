import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "test",
};
const testVerticalProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
};
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyz</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>dropdown 1</MenuItem>
      </SubMenu>
    </Menu>
  );
};
const createStyleFile = () => {
  const cssStr: string = `
        .mxp-submenu {
            display:none;
        }
        .mxp-submenu.menu-opened{
            display: block;
        }
    `;
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = cssStr;
  return style;
};
let wrapper: RenderResult,
  menuEl: HTMLElement,
  activeEl: HTMLElement,
  disableEl: HTMLElement;
describe("test Menu and MenuItem Component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    wrapper.container.append(createStyleFile());
    menuEl = wrapper.getByTestId("test-menu");
    activeEl = wrapper.getByText("active");
    disableEl = wrapper.getByText("disabled");
  });

  it("should render correct menu and menu-item with default props", () => {
    expect(menuEl).toBeInTheDocument();
    expect(menuEl).toHaveClass("mxp-menu test");
    // expect(menuEl.getElementsByTagName("li").length).toEqual(3);
    expect(menuEl.querySelectorAll(":scope > li").length).toEqual(4);
    expect(activeEl).toHaveClass("mxp-menu-item is-active");
    expect(disableEl).toHaveClass("mxp-menu-item is-disabled");
  });
  it("click item should change active and call the right callback function", () => {
    const thirdItem = wrapper.getByText("xyz");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("is-active");
    expect(activeEl).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("2");
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
  it("should dropdown items when hover on subMenu", async () => {
    expect(wrapper.queryByText("dropdown 1")).not.toBeVisible();
    const dropdownEl = wrapper.getByText("dropdown");
    fireEvent.mouseEnter(dropdownEl);
    await waitFor(() => {
      expect(wrapper.queryByText("dropdown 1")).toBeVisible();
    });
    fireEvent.click(wrapper.getByText("dropdown 1"));
    expect(testProps.onSelect).toHaveBeenCalledWith("3-0");
    fireEvent.mouseLeave(dropdownEl);
    await waitFor(() => {
      expect(wrapper.queryByText("dropdown 1")).not.toBeVisible();
    });
  });
  it("should drop items when click title in vertical mode", () => {
    cleanup();
    const wrapper = render(generateMenu(testVerticalProps));
    const dropdownEl = wrapper.getByText("dropdown");
    fireEvent.click(dropdownEl);
    expect(wrapper.queryByText("dropdown 1")).toBeVisible();
  });
});
