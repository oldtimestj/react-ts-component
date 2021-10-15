/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2021-10-14 08:46:10
 * @LastEditors: tjwang
 * @LastEditTime: 2021-10-14 09:18:02
 */
import React from "react";
import classNames from "classnames";

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'Danger',
  Link = 'Link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    size,
    children,
    href,
  } = props;
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled,
  })
  if(btnType === ButtonType.Link && href) {
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