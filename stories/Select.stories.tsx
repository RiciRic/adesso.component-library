import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select, Props } from '../src/components/inputs/Select';

import { MenuItem } from '@mui/material';

const meta: Meta = {
  title: 'Inputs/Select',
  component: Select,
};

export default meta;

const Template: Story<Props> = args => (
  <Select {...args}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
);

export const DefaultSelect = Template.bind({});

DefaultSelect.args = {};
