import React, { ReactNode } from 'react';
import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../theme/theme';

export interface Props extends MuiCardProps {
  /*The content of the component.*/
  children?: ReactNode;

  /**The spacing of the component. */
  padding?: number;
}

/**Card with adesso theme. Custom padding included. */
export const Card = ({ children, padding, ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiCard {...props} style={{ padding: padding || 8 }}>
        {children}
      </MuiCard>
    </ThemeProvider>
  );
};
