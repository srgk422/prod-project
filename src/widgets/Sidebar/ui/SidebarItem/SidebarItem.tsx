import { memo } from 'react';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkDesign } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemProps {
  item: SidebarItemType;
  isCollapsed: boolean;
}

export const SidebarItem = memo(({ item, isCollapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: isCollapsed })}
      design={AppLinkDesign.INVERTED}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
