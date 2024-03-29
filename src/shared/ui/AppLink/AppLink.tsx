import { ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkDesign {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  design?: AppLinkDesign;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    children,
    className,
    to,
    design = AppLinkDesign.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link className={classNames(cls.AppLink, {}, [className, cls[design]])} to={to} {...otherProps}>
      {children}
    </Link>
  );
});

AppLink.displayName = 'AppLink';
