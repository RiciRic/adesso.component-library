import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/components/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Template: Story<Props> = args => <Button {...args}></Button>;

export const ContainedButton = Template.bind({});

ContainedButton.args = {
  variant: 'contained',
  children: 'Contained Button',
};

export const OutlinedButton = Template.bind({});

OutlinedButton.args = {
  variant: 'outlined',
  children: 'Outlined Button',
};

export const TextButton = Template.bind({});

TextButton.args = {
  variant: 'text',
  children: 'Text Button',
};
