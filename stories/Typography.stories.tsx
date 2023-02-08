import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography, Props } from '../src/components/Typography';

const meta: Meta = {
  title: 'Typography',
  component: Typography,
  argTypes: {
    color: { control: { type: 'color', presetColors: ['red'] } },
  },
};

export default meta;

const TemplateShowcase: Story<Props> = args => (
  <>
    <Typography {...args} variant="h1">Example H1</Typography>
    <Typography {...args} variant="h2">Example H2</Typography>
    <Typography {...args} variant="h3">Example H3</Typography>
    <Typography {...args} variant="h4">Example H4</Typography>
    <Typography {...args} variant="h5">Example H5</Typography>
    <Typography {...args} variant="h6">Example H6</Typography>
    <Typography {...args} variant="subtitle1">Example Subtitle1</Typography>
    <Typography {...args} variant="subtitle2">Example Subtitle2</Typography>
    <Typography {...args} variant="body1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Typography>
    <br/>
    <Typography {...args} variant="body2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Typography>
  </>
);

export const Showcase = TemplateShowcase.bind({});

const Template: Story<Props> = args => <Typography {...args}></Typography>;

export const H1 = Template.bind({});

H1.args = {
  variant: 'h1',
  children: 'Example H1',
};

export const H2 = Template.bind({});

H2.args = {
  variant: 'h2',
  children: 'Example H2',
};

export const H3 = Template.bind({});

H3.args = {
  variant: 'h3',
  children: 'Example H3',
};

export const H4 = Template.bind({});

H4.args = {
  variant: 'h4',
  children: 'Example H4',
};

export const H5 = Template.bind({});

H5.args = {
  variant: 'h5',
  children: 'Example H5',
};

export const H6 = Template.bind({});

H6.args = {
  variant: 'h6',
  children: 'Example H6',
};

export const Subtitle1 = Template.bind({});

Subtitle1.args = {
  variant: 'subtitle1',
  children: 'Example Subtitle1',
};

export const Subtitle2 = Template.bind({});

Subtitle2.args = {
  variant: 'subtitle2',
  children: 'Example Subtitle2',
};

export const Body1 = Template.bind({});

Body1.args = {
  variant: 'body1',
  children:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
};

export const Body2 = Template.bind({});

Body2.args = {
  variant: 'body2',
  children:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
};
