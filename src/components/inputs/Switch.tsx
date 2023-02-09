import React from 'react';
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../../theme/theme';

export interface Props extends MuiSwitchProps {}

/**Switch with adesso theme. */
export const Switch = ({ ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiSwitch {...props}></MuiSwitch>
    </ThemeProvider>
  );
};
