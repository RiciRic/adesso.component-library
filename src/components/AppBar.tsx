import React, { ReactNode } from 'react';
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../theme/theme';

export interface Props extends MuiAppBarProps {
  /**The content of the component. */
  children?: ReactNode;

  /**The spacing of the component. */
  padding?: number;
  variant?: 'elevation' | 'outlined';
}

/**App Bar with adesso theme. Custom padding included*/
export const AppBar = ({ children, padding, variant, ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiAppBar
        {...props}
        variant={variant ? variant : 'elevation'}
        style={{ padding: padding || 5 }}
      >
        {children}
      </MuiAppBar>
    </ThemeProvider>
  );
};
