import React from "react";
declare const buttonSizes: readonly ["lg", "sm"];
declare const buttonTypes: readonly ["default", "primary", "danger", "link"];
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
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
