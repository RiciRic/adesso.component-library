import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip, Props } from '../src/components/data-display/Tooltip';
import { Button } from '../src/components/inputs/Button';

const meta: Meta = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
};

export default meta;

const Template: Story<Props> = args => <Tooltip {...args}><Button variant="contained">Hover for Tooltip</Button></Tooltip>;

export const DeflautTooltip = Template.bind({});

DeflautTooltip.args = {
  title: 'Tooltip',
};
