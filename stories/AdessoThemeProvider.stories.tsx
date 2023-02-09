import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  AdessoThemeProvider,
  Props,
} from '../src/components/theme/AdessoThemeProvider';

import { Typography } from '@mui/material';

const meta: Meta = {
  title: 'Theme/AdessoThemeProvider',
  component: AdessoThemeProvider,
};

export default meta;

const Template: Story<Props> = args => (
  <AdessoThemeProvider {...args}>
    <Typography variant='h4'>Adesso Theme applied</Typography>
  </AdessoThemeProvider>
);

export const UseAdessoTheme = Template.bind({});

UseAdessoTheme.args = {};
