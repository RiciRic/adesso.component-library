import React, { ReactNode } from 'react';
import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../../theme/theme';

export interface Props extends MuiPaperProps {
  /*The content of the component.*/
  children?: ReactNode;

  /**The spacing of the component. */
  padding?: number;
}

/**Paper with adesso theme. Custom padding included. */
export const Paper = ({ children, padding, ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiPaper {...props} style={{ padding: padding || 0 }}>
        {children}
      </MuiPaper>
    </ThemeProvider>
  );
};
