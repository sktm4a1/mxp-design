import { InputHTMLAttributes, ReactElement } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import Icon from "../Icon/icon";

type InputSize = "lg" | "sm";
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  disabled?: boolean;
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
}
export default function Input(props: InputProps) {
  const { size, disabled, icon, prepend, append, style, ...restProps } = props;
  const cnames = classNames("mxp-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-prepend": !!prepend,
    "input-group-append": !!append,
  });
  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = props.value || "";
  }
  return (
    <div className={cnames} style={style}>
      {prepend && <div className="mxp-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`}></Icon>
        </div>
      )}
      <input className="mxp-input-inner" disabled={disabled} {...restProps} />
      {append && <div className="mxp-input-group-append">{append}</div>}
    </div>
  );
}
