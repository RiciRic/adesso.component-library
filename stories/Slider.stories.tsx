import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Slider, Props } from '../src/components/Slider';

const meta: Meta = {
  title: 'Slider',
  component: Slider,
};

export default meta;

const Template: Story<Props> = args => <Slider {...args}></Slider>;

export const SliderDefault = Template.bind({});

SliderDefault.args = {
  defaultValue: 30,
};

export const SliderDisabled = Template.bind({});

SliderDisabled.args = {
  defaultValue: 30,
  disabled: true,
};
