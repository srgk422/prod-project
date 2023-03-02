import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { t } = useTranslation();

  const { className } = props;

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input autoFocus className={cls.input} placeholder={t('login')} type="text" />
      <Input className={cls.input} placeholder={t('password')} type="password" />
      <Button className={cls.loginButton}>{t('logIn')}</Button>
    </div>
  );
};
