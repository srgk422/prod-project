import { useCallback, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const [isAuthOpened, setIsAuthOpened] = useState(false);

  const onAuthToggle = useCallback(() => {
    setIsAuthOpened((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          onClick={onAuthToggle}
          variant={ButtonVariant.CLEAR_INVERTED}
        >
          {t('LogIn')}
        </Button>
        <Modal isOpened={isAuthOpened} onClose={onAuthToggle}>123</Modal>
      </div>
    </div>
  );
};
