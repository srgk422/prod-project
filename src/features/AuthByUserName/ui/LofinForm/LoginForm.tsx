import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonDesign } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { Text, TextDesign } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username,
    password,
    isLoading,
    error,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('loginFormTitle')} />
      {error && <Text design={TextDesign.ERROR} text={t('authError')} />}
      <Input
        autoFocus
        className={cls.input}
        onChange={onChangeUsername}
        placeholder={t('login')}
        type="text"
        value={username}
      />
      <Input
        className={cls.input}
        onChange={onChangePassword}
        placeholder={t('password')}
        type="password"
        value={password}
      />
      <Button
        className={cls.loginButton}
        design={ButtonDesign.OUTLINE}
        disabled={isLoading}
        onClick={onLoginClick}
      >
        {t('logIn')}
      </Button>
    </div>
  );
});
