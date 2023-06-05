import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextDesign {
  PRIMARY = 'primary',
ERROR = 'error',
}

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  design?: TextDesign;
}

export const Text: FC<TextProps> = (props) => {
  const {
    className,
    title,
    text,
    design = TextDesign.PRIMARY,
  } = props;

  return (
    <div className={classNames(cls.Text, { [cls[design]]: true }, [className])}>
      <p className={classNames(cls.title)}>{title}</p>
      <p className={classNames(cls.text)}>{text}</p>
    </div>
  );
};