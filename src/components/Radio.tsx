import React from 'react';
import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../theme/theme';

export interface Props extends MuiRadioProps {}

/**Radio with adesso theme. */
export const Radio = ({ ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiRadio {...props}></MuiRadio>
    </ThemeProvider>
  );
};
