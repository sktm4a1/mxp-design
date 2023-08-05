import { InputHTMLAttributes, ReactElement } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
type InputSize = "lg" | "sm";
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: InputSize;
    disabled?: boolean;
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
}
export default function Input(props: InputProps): JSX.Element;
export {};
