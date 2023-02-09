import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Switch, Props } from '../src/components/inputs/Switch';

const meta: Meta = {
  title: 'Inputs/Switch',
  component: Switch,
};

export default meta;

const Template: Story<Props> = args => <Switch {...args}></Switch>;

export const SwitchChecked = Template.bind({});

SwitchChecked.args = {
  checked: true,
};

export const SwitchUnchecked = Template.bind({});

SwitchUnchecked.args = {};

export const SwitchCheckedDisabled = Template.bind({});

SwitchCheckedDisabled.args = {
  checked: true,
  disabled: true,
};

export const SwitchUncheckedDisabled = Template.bind({});

SwitchUncheckedDisabled.args = {
  disabled: true,
};
