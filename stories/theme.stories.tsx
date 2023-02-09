import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Props } from '../src/components/theme/AdessoThemeProvider';

import { Container, Link } from '@mui/material';

import { Typography } from '../src/components/data-display/Typography';

const meta: Meta = {
  title: 'Theme/theme',
  component: Container,
};

export default meta;

const Template: Story<Props> = args => (
  <Container>
    <Typography variant='h6'>This is not a component!</Typography>
    <Typography variant='body1'>"theme" is a variable that uses createTheme and contains all relevant colors and fonts for the component library.</Typography>
    <Link target={"_blank"} href={"https://mui.com/material-ui/customization/theming/"}>Material-UI documentation</Link>
  </Container>
);

export const Theme_object_for_ThemeProvider = Template.bind({});

Theme_object_for_ThemeProvider.args = {};
