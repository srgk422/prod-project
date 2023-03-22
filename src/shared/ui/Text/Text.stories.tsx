import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Text, TextDesign, TextProps } from './Text';

export default {
  component: Text,
  title: 'shared/Text',
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary: Story<TextProps> = Template.bind({});
Primary.args = {
  title: 'Заголовок текста',
  text: 'Текстовый текст текста',
};
export const Error: Story<TextProps> = Template.bind({});
Error.args = {
  title: 'Заголовок текста',
  text: 'Текстовый текст текста',
  design: TextDesign.ERROR,
};
export const OnlyTitle: Story<TextProps> = Template.bind({});
OnlyTitle.args = {
  title: 'Заголовок текста',
};
export const OnlyText: Story<TextProps> = Template.bind({});
OnlyText.args = {
  text: 'Текстовый текст текста',
};
