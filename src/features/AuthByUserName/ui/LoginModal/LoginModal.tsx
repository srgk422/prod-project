import { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import { loginActions } from '../../model/slice/loginSlice';
import { useDispatch } from 'react-redux';

interface LoginModalProps {
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    isOpened,
    onClose,
  } = props;

  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(loginActions.resetError());
    onClose();
  };

  return (
    <Modal
      isOpened={isOpened}
      lazy
      onClose={onCloseModal}
    >
      <LoginForm />
    </Modal>
  );
};
