import React from "react";
import classNames from "classnames";

export type ButtonSize = "lg" | "sm";

export type ButtonType = "default" | "primary" | "danger" | "link";

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { btnType, size, disabled, children, href } = props;
  // btn btn-lg btn-primary
  const classes = classNames("btn", {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link") {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

export default Button;
