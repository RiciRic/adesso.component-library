import React, { ReactNode } from 'react';
import {
  Button as MuiButto,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../theme/theme';

export interface Props extends MuiButtonProps {
  /*The content of the component.*/
  children?: ReactNode;
}

/**Button with adesso theme. */
export const Button = ({ children, ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButto {...props}>{children}</MuiButto>
    </ThemeProvider>
  );
};
