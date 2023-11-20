// import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Text title={t('mainTitle')} />
  );
});

MainPage.displayName = 'MainPage';

export default MainPage;
