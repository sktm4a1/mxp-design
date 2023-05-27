import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Example/Button", // 左侧目录配置
  component: Button, // 指定具体组件
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    /** 按钮类型 */
    btnType: "primary",
    children: "Primary",
    onClick() {
      console.log("click primary button");
    },
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    btnType: "danger",
  },
};

export const Link: Story = {
  args: {
    btnType: "link",
    href: "https://www.baidu.com",
    children: "Link",
  },
};

export const Disabled: Story = {
  args: {
    children: "Default",
    disabled: true,
    size: "lg",
  },
};
