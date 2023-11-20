import { FC } from 'react';
import cls from './ProfileCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileError, getProfileIsLoading } from '../../model/selectors';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonDesign } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('profileTitle')} />
        <Button className={cls.editBtn} design={ButtonDesign.OUTLINE}>
          {t('profileEdit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          placeholder={t('firstNamePlaceholder')}
          value={data?.firstName}
        />
        <Input
          placeholder={t('lastNamePlaceholder')}
          value={data?.firstName}
        />
      </div>
    </div>
  );
};
