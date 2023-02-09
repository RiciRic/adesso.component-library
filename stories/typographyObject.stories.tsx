import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Props } from '../src/components/theme/AdessoThemeProvider';

import { List, Container } from '@mui/material';

import { typography } from '../src/theme/typography';

import { Typography } from '../src/components/data-display/Typography';

const meta: Meta = {
  title: 'Theme/typography',
  component: Container,
};

export default meta;

const names: any[] = [];
const fonts: any[] = [];
for (const property in typography) {
  names.push(property);
  fonts.push(typography[property]);
}

function FontList() {
  return (
    <List component="div">
      {names.map((key, index) => (
        <div>
          <Typography variant="body1" sx={{ font: fonts[index] }}>
            {fonts[index]}
          </Typography>
        </div>
      ))}
    </List>
  );
}

const Template: Story<Props> = args => (
  <Container>
    <Typography variant="h6">This is not a component!</Typography>
    <Typography variant="body1">
      "typography" is an object that contains all relevant fonts for the
      component library.
    </Typography>
    <FontList />
  </Container>
);

export const Fonts_in_typography = Template.bind({});

Fonts_in_typography.args = {};
