import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
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
      data-testid="Sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button
        data-testid="Sidebar-toggle"
        type="button"
        onClick={toggle}
      >
        {t('toggle')}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
