import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

const AboutPage = memo(() => {
  const { t } = useTranslation('about');

  return <Text title={t('aboutTitle')} />;
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;
