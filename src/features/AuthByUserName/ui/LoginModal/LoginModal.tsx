import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LofinForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    className,
    isOpened,
    onClose,
  } = props;

  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className])}
      isOpened={isOpened}
      lazy
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
};
