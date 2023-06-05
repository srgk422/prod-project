import { FC, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.async';
import { loginActions } from '../../model/slice/loginSlice';
import { useDispatch } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';

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
      <Suspense fallback={<Loader />}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  );
};
