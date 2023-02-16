import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';

interface BugButtonProps {
  className?: string;
}

// Компонент для тестирования errorBoundary
export const BugButton: FC<BugButtonProps> = () => {
  const [error, setError] = useState(false);
  const toggleError = () => {
    setError(true);
  };
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={toggleError}>
      throw error
    </Button>
  );
};
