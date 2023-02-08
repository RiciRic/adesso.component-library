import React, { ReactNode } from 'react';
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../theme/theme';

export interface Props extends MuiTypographyProps {
  /*The content of the component.*/
  children?: ReactNode;
}

/**Typography with adesso theme. */
export const Typography = ({ children, ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTypography {...props}>{children}</MuiTypography>
    </ThemeProvider>
  );
};
