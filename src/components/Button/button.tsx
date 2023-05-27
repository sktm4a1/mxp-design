import React from "react";
import classNames from "classnames";

const buttonSizes = ["lg", "sm"] as const;
const buttonTypes = ["default", "primary", "danger", "link"] as const;

export type ButtonSize = (typeof buttonSizes)[number];

export type ButtonType = (typeof buttonTypes)[number];

interface BaseButtonProps {
  className?: string;
  /** 设置是否禁用 */
  disabled?: boolean;
  /** 设置按钮尺寸 */
  size?: ButtonSize;
  /** 设置按钮类型 */
  btnType?: ButtonType;
  href?: string;
  children: React.ReactNode;
}
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, className, size, disabled, children, href, ...restProps } =
    props;
  // btn btn-lg btn-primary
  const classes = classNames("btn", className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    disabled: disabled,
  });
  if (btnType === buttonTypes[3]) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: buttonTypes[0],
};

export default Button;
