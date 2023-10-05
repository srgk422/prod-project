import { useState, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonDesign } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { sidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggle = () => { setIsCollapsed((prev) => !prev); };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
      data-testid="Sidebar"
    >
      <div className={cls.items}>
        {sidebarItemsList.map((item) => <SidebarItem isCollapsed={isCollapsed} item={item} key={item.path} />)}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} isShort={isCollapsed} />
      </div>
      <Button
        className={cls.collapseBtn}
        data-testid="Sidebar-toggle"
        design={ButtonDesign.FILLED_INVERTED}
        onClick={toggle}
        size={ButtonSize.XL}
        square
        type="button"
      >
        {isCollapsed ? '>' : '<'}
      </Button>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';
