import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkVariant } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  variant: AppLinkVariant.PRIMARY,
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  variant: AppLinkVariant.PRIMARY,
};
PrimaryDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  variant: AppLinkVariant.INVERTED,
};
export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  variant: AppLinkVariant.INVERTED,
};
SecondaryDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const Red = Template.bind({});
Red.args = {
  children: 'Text',
  variant: AppLinkVariant.RED,
};
export const RedDark = Template.bind({});
RedDark.args = {
  children: 'Text',
  variant: AppLinkVariant.RED,
};
RedDark.decorators = [
  ThemeDecorator(Theme.DARK),
];
