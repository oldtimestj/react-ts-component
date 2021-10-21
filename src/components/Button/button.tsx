/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2021-10-14 08:46:10
 * @LastEditors: tjwang
 * @LastEditTime: 2021-10-20 09:14:41
 */
import React, {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from "react";
import classNames from "classnames";

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
  } = props;
  const classes = classNames('btn', className,{
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled,
  })
  if(btnType === 'link' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button;