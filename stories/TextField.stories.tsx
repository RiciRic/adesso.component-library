import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField, Props } from '../src/components/TextField';

import SearchIcon from '@mui/icons-material/Search';
import Clear from '@mui/icons-material/Clear';

const meta: Meta = {
  title: 'TextField',
  component: TextField,
};

export default meta;

const Template: Story<Props> = args => <TextField {...args}></TextField>;

export const DefaultTextField = Template.bind({});

DefaultTextField.args = {
  placeholder: 'DefaultTextField...',
};

const TemplateIconLeft: Story<Props> = args => (
  <TextField {...args} leftItem={<SearchIcon />}></TextField>
);

export const IconLeftTextField = TemplateIconLeft.bind({});

IconLeftTextField.args = {
  placeholder: 'IconLeftTextField...',
};

const TemplateIconRight: Story<Props> = args => (
  <TextField {...args} rightItem={<SearchIcon />}></TextField>
);

export const IconRightTextField = TemplateIconRight.bind({});

IconRightTextField.args = {
  placeholder: 'IconLeftTextField...',
};

const TemplateIconBothSides: Story<Props> = args => (
  <TextField
    {...args}
    leftItem={<SearchIcon />}
    rightItem={<Clear />}
  ></TextField>
);

export const IconBothSides = TemplateIconBothSides.bind({});

IconBothSides.args = {
  placeholder: 'IconLeftTextField...',
};
