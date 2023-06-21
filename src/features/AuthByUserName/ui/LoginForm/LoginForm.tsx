import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonDesign } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUsername';
import { Text, TextDesign } from 'shared/ui/Text/Text';
import {
  getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername,
} from 'features/AuthByUserName/model/selectors';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();

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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

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

export default LoginForm;
