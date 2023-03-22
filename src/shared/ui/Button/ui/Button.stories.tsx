import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonSize, ButtonDesign } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  design: ButtonDesign.CLEAR,
};
export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  design: ButtonDesign.CLEAR,
};
ClearDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  design: ButtonDesign.CLEAR_INVERTED,
};
export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
  children: 'Text',
  design: ButtonDesign.CLEAR_INVERTED,
};
ClearInvertedDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Text',
  size: ButtonSize.M,
  design: ButtonDesign.OUTLINE,
};
export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  size: ButtonSize.L,
  design: ButtonDesign.OUTLINE,
};
export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  size: ButtonSize.XL,
  design: ButtonDesign.OUTLINE,
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  design: ButtonDesign.OUTLINE,
};
OutlineDark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const Filled = Template.bind({});
Filled.args = {
  children: 'Text',
  design: ButtonDesign.FILLED,
};

export const FilledInverted = Template.bind({});
FilledInverted.args = {
  children: 'Text',
  design: ButtonDesign.FILLED_INVERTED,
};

// square
export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  size: ButtonSize.M,
  square: true,
  design: ButtonDesign.FILLED_INVERTED,
};
export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  size: ButtonSize.L,
  square: true,
  design: ButtonDesign.FILLED_INVERTED,
};
export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  size: ButtonSize.XL,
  square: true,
  design: ButtonDesign.FILLED_INVERTED,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  disabled: true,
  design: ButtonDesign.OUTLINE,
};
