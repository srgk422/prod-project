import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageNotFound.module.scss';

interface PageNotFoundProps {
  className?: string;
}

export const PageNotFound = memo((props: PageNotFoundProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.PageNotFound, {}, [className])}>
      {t('notFoundPage')}
    </div>
  );
});

PageNotFound.displayName = 'PageNotFound';
