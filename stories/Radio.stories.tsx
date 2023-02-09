import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, Props } from '../src/components/inputs/Radio';

const meta: Meta = {
  title: 'Inputs/Radio',
  component: Radio,
};

export default meta;

const Template: Story<Props> = args => <Radio {...args}></Radio>;

export const RadioChecked = Template.bind({});

RadioChecked.args = {
  checked: true,
};

export const RadioUnchecked = Template.bind({});

RadioUnchecked.args = {};

export const RadioCheckedDisabled = Template.bind({});

RadioCheckedDisabled.args = {
  checked: true,
  disabled: true,
};

export const RadioUncheckedDisabled = Template.bind({});

RadioUncheckedDisabled.args = {
  disabled: true,
};
