import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonVariant } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => { setCollapsed((prev) => !prev); };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
      data-testid="Sidebar"
    >

      <div className={cls.items}>
        <AppLink
          className={cls.item}
          to={RoutePath.main}
          variant={AppLinkVariant.INVERTED}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('main')}</span>
        </AppLink>
        <AppLink
          className={cls.item}
          to={RoutePath.about}
          variant={AppLinkVariant.INVERTED}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('about')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} isShort={collapsed} />
      </div>
      <Button
        className={cls.collapseBtn}
        data-testid="Sidebar-toggle"
        onClick={toggle}
        size={ButtonSize.XL}
        square
        type="button"
        variant={ButtonVariant.BACKGROUND_INVERTED}
      >
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  );
};
