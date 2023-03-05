import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkDesign } from './AppLink';
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
  design: AppLinkDesign.PRIMARY,
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  design: AppLinkDesign.PRIMARY,
};
PrimaryDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  design: AppLinkDesign.INVERTED,
};
export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  design: AppLinkDesign.INVERTED,
};
SecondaryDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const Red = Template.bind({});
Red.args = {
  children: 'Text',
  design: AppLinkDesign.RED,
};
export const RedDark = Template.bind({});
RedDark.args = {
  children: 'Text',
  design: AppLinkDesign.RED,
};
RedDark.decorators = [
  ThemeDecorator(Theme.DARK),
];
