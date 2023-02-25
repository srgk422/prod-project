import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  component: Modal,
  title: 'shared/Modal',
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary: Story<ModalProps> = Template.bind({});
Primary.args = {
  isOpened: true,
  children: 'Text',
};
// TODO добавить темную тему
export const PrimaryDark: Story<ModalProps> = Template.bind({});
PrimaryDark.args = {
  isOpened: true,
  children: 'Text',
};
PrimaryDark.decorators = [
  ThemeDecorator(Theme.DARK),
];
