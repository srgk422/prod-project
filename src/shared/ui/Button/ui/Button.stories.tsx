import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonSize, ButtonVariant } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
};
PrimaryDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  variant: ButtonVariant.CLEAR,
};
export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  variant: ButtonVariant.CLEAR,
};
ClearDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  variant: ButtonVariant.CLEAR_INVERTED,
};
export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
  children: 'Text',
  variant: ButtonVariant.CLEAR_INVERTED,
};
ClearInvertedDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Text',
  size: ButtonSize.M,
  variant: ButtonVariant.OUTLINE,
};
export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  size: ButtonSize.L,
  variant: ButtonVariant.OUTLINE,
};
export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  size: ButtonSize.XL,
  variant: ButtonVariant.OUTLINE,
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINE,
};
OutlineDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  variant: ButtonVariant.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  variant: ButtonVariant.BACKGROUND_INVERTED,
};

// square
export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  size: ButtonSize.M,
  square: true,
  variant: ButtonVariant.BACKGROUND_INVERTED,
};
export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  size: ButtonSize.L,
  square: true,
  variant: ButtonVariant.BACKGROUND_INVERTED,
};
export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  size: ButtonSize.XL,
  square: true,
  variant: ButtonVariant.BACKGROUND_INVERTED,
};
