import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponents: Story) => (
  <ThemeProvider>
    <div className={`app ${theme}`}>
      <StoryComponents />
    </div>
  </ThemeProvider>
);
