import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Fab, Props } from '../src/components/inputs/Fab';

const meta: Meta = {
  title: 'Inputs/Fab',
  component: Fab,
};

export default meta;

const Template: Story<Props> = args => <Fab {...args}>V</Fab>;

export const DefaultFab = Template.bind({});

DefaultFab.args = {
};
