import React from 'react';
import {
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../theme/theme';

export interface Props extends MuiSliderProps {}

/**Slider with adesso theme. */
export const Slider = ({ ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiSlider {...props}></MuiSlider>
    </ThemeProvider>
  );
};
