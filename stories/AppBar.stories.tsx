import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AppBar, Props } from '../src/components/AppBar';

import { AdessoLogo } from '../src/components/AdessoLogo';

const meta: Meta = {
  title: 'AppBar',
  component: AppBar,
  argTypes: {
    padding: { control: { type: 'range', min: 0, max: 10, step: 1 } },
  },
};

export default meta;

const Template: Story<Props> = args => (
  <AppBar {...args}>
    <AdessoLogo variant="logo" size={100}></AdessoLogo>
  </AppBar>
);

export const DefaultHeader = Template.bind({});

DefaultHeader.args = {
  color: 'default',
};

const TemplateWhiteLogo: Story<Props> = args => (
  <AppBar {...args}>
    <AdessoLogo
      variant="logo"
      color="unicolor"
      fill="#ffffff"
      size={100}
    ></AdessoLogo>
  </AppBar>
);

export const PrimaryHeader = TemplateWhiteLogo.bind({});

PrimaryHeader.args = {
  color: 'primary',
};

export const SecondaryHeader = TemplateWhiteLogo.bind({});

SecondaryHeader.args = {
  color: 'secondary',
};
