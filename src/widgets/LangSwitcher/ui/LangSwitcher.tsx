import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonDesign } from 'shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
  isShort?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className, isShort } = props;

  const { t, i18n } = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames('', {}, [className])}
      design={ButtonDesign.CLEAR}
      onClick={toggle}
    >
      {isShort ? t('currentLangShort') : t('currentLang')}
    </Button>
  );
});
