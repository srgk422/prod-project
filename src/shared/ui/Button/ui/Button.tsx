import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariant {
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
  CLEAR = 'clear',
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
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    size = ButtonSize.L,
    square,
    variant,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[variant]]: true,
    [cls[size]]: true,
    [cls.square]: square,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className])}
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
};
