import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextArea, Props } from '../src/components/inputs/TextArea';

const meta: Meta = {
  title: 'Inputs/TextArea',
  component: TextArea,
};

export default meta;

const Template: Story<Props> = args => <TextArea {...args}></TextArea>;

export const DefaultTextArea = Template.bind({});

DefaultTextArea.args = {
  placeholder: 'DefaultTextField...',
};
