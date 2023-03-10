import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
  isShort?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className, isShort } = props;

  const { t, i18n } = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggle}
      variant={ButtonVariant.CLEAR}
    >
      {isShort ? t('currentLangShort') : t('currentLang')}
    </Button>
  );
};
