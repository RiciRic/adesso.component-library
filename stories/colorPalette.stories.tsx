import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Props } from '../src/components/theme/AdessoThemeProvider';

import { List, Container } from '@mui/material';

import { colorPalette } from '../src/theme/colorPalette';

import { Typography } from '../src/components/data-display/Typography';

const meta: Meta = {
  title: 'Theme/colorPalette',
  component: Container,
};

export default meta;

const names: any[] = [];
const colors: any[] = [];
for (const property in colorPalette) {
  names.push(property);
  colors.push(colorPalette[property]);
}

function ColorList() {
  return (
    <List component="div">
      {names.map((key, index) => (
        <div style={{display:'flex', flexDirection:'row'}}>
          <Typography variant="body1">{key}{' - '}</Typography>
          <Typography variant="body1" color={colors[index]}>
            {colors[index]}
          </Typography>
        </div>
      ))}
    </List>
  );
}

const Template: Story<Props> = args => (
  <Container >
    <Typography variant='h6'>This is not a component!</Typography>
    <Typography variant='body1'>"colorPalette" is an object that contains all relevant colors for the component library.</Typography>
    <ColorList />
  </Container>
);

export const Colors_in_colorPalette = Template.bind({});

Colors_in_colorPalette.args = {};
