import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    size = ButtonSize.L,
    square,
    design = ButtonDesign.OUTLINE,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[design]]: true,
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
