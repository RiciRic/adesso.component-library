import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, Props } from '../src/components/Card';

import { Typography } from '../src/components/Typography';

const meta: Meta = {
  title: 'Card',
  component: Card,
  argTypes: {
    padding: { control: { type: 'range', min: 0, max: 10, step: 1 } },
  },
};

export default meta;

const Template: Story<Props> = args => (
  <Card {...args}>
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
  </Card>
);

export const DefaultCard = Template.bind({});

/*DefaultCard.args = {
  children: 'Contained Button',
};*/
