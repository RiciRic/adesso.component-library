import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Paper, Props } from '../src/components/surfaces/Paper';

import { Typography } from '../src/components/data-display/Typography';

const meta: Meta = {
  title: 'Surfaces/Paper',
  component: Paper,
  argTypes: {
    padding: { control: { type: 'range', min: 0, max: 10, step: 1 } },
  },
};

export default meta;

const Template: Story<Props> = args => (
  <Paper {...args}>
    <Typography variant="h4">Example H1</Typography>
    <Typography variant="subtitle1">Subtitle 1</Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </Typography>
  </Paper>
);

export const DefaultPaper = Template.bind({});

/*DefaultCard.args = {
  children: 'Contained Button',
};*/
