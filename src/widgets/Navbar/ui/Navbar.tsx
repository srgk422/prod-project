import { useCallback, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUserName';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const [isAuthOpened, setIsAuthOpened] = useState(false);

  const onCloseAuth = useCallback(() => {
    setIsAuthOpened(false);
  }, []);
  const onShowAuth = useCallback(() => {
    setIsAuthOpened(true);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          onClick={onShowAuth}
          variant={ButtonVariant.CLEAR_INVERTED}
        >
          {t('logIn')}
        </Button>
        <LoginModal isOpened={isAuthOpened} onClose={onCloseAuth} />
      </div>
    </div>
  );
};
