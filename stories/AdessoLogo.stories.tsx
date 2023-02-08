import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AdessoLogo, Props } from '../src/components/AdessoLogo';

const meta: Meta = {
  title: 'AdessoLogo',
  component: AdessoLogo,
  argTypes: {
    fill: { control: { type: 'color', presetColors: ['red'] } },
    size: { control: { type: 'range', min: 30, max: 800, step: 2 } },
  },
};

export default meta;

const Template: Story<Props> = args => <AdessoLogo {...args}></AdessoLogo>;

export const ColoredLogo = Template.bind({});

ColoredLogo.args = {
  variant: 'logo',
  color: 'colored',
};

export const UnicolorDefaultLogo = Template.bind({});

UnicolorDefaultLogo.args = {
  variant: 'logo',
  color: 'unicolor',
};

export const UnicolorLogo = Template.bind({});

UnicolorLogo.args = {
  variant: 'logo',
  color: 'unicolor',
  fill: 'dodgerBlue',
};

export const ColoredIcon = Template.bind({});

ColoredIcon.args = {
  variant: 'icon',
  color: 'colored',
};

export const UnicolorDefaultIcon = Template.bind({});

UnicolorDefaultIcon.args = {
  variant: 'icon',
  color: 'unicolor',
};

export const UnicolorIcon = Template.bind({});

UnicolorIcon.args = {
  variant: 'icon',
  color: 'unicolor',
  fill: 'dodgerBlue',
};
