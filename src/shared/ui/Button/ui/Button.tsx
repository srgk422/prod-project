import { memo, type ButtonHTMLAttributes, ReactNode } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonDesign {
  FILLED = 'filled',
  FILLED_INVERTED = 'filled_inverted',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINE = 'outline',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonSize;
  square?: boolean;
  design?: ButtonDesign;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    children,
    className,
    size = ButtonSize.M,
    square,
    design = ButtonDesign.OUTLINE,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls[design]]: true,
    [cls[size]]: true,
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
