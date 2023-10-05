import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonDesign } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { Text, TextDesign } from 'shared/ui/Text/Text';
import {
  getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername,
} from 'features/AuthByUserName/model/selectors';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const password = useSelector(getLoginPassword);
  const username = useSelector(getLoginUsername);

  const onChangeUsername = useCallback((value) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') onLoginClick();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onLoginClick]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
