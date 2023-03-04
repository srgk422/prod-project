import { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LofinForm/LoginForm';

interface LoginModalProps {
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    isOpened,
    onClose,
  } = props;

  return (
    <Modal
      isOpened={isOpened}
      lazy
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
};
