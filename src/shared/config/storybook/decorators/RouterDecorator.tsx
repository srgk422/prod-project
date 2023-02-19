import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComponents: Story) => (
  <BrowserRouter>
    <StoryComponents />
  </BrowserRouter>
);
