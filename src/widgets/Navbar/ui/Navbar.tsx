import {
  useCallback, useState, memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonDesign } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUserName';

import cls from './Navbar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props:NavbarProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [isAuthOpened, setIsAuthOpened] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseAuth = useCallback(() => {
    setIsAuthOpened(false);
  }, []);

  const onShowAuth = useCallback(() => {
    setIsAuthOpened(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
          <Button
            design={ButtonDesign.CLEAR_INVERTED}
            onClick={onLogout}
          >
            {t('logOut')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          design={ButtonDesign.CLEAR_INVERTED}
          onClick={onShowAuth}
        >
          {t('logIn')}
        </Button>
        {isAuthOpened && <LoginModal isOpened={isAuthOpened} onClose={onCloseAuth} />}
      </div>
    </div>
  );
});
