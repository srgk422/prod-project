import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkVariant {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    children,
    className,
    to,
    variant = AppLinkVariant.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link className={classNames(cls.AppLink, {}, [className, cls[variant]])} to={to} {...otherProps}>
      {children}
    </Link>
  );
};
