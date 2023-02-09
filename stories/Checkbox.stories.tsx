import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, Props } from '../src/components/inputs/Checkbox';

const meta: Meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
};

export default meta;

const Template: Story<Props> = args => <Checkbox {...args}></Checkbox>;

export const CheckboxChecked = Template.bind({});

CheckboxChecked.args = {
  checked: true,
};

export const CheckboxUnchecked = Template.bind({});

CheckboxUnchecked.args = {};

export const CheckboxCheckedDisabled = Template.bind({});

CheckboxCheckedDisabled.args = {
  checked: true,
  disabled: true,
};

export const CheckboxUncheckedDisabled = Template.bind({});

CheckboxUncheckedDisabled.args = {
  disabled: true,
};
