import React from 'react';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../theme/theme';

export interface Props extends MuiCheckboxProps {}

/**Checkbox with adesso theme. */
export const Checkbox = ({ ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiCheckbox {...props}></MuiCheckbox>
    </ThemeProvider>
  );
};
