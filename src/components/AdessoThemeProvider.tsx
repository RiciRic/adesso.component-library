import React, { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { theme } from '../theme/theme';

export interface Props {
  /**The content of the component. */
  children?: ReactNode;
}

/**Can be used insead of ThemeProvider automatically provides adesso theme. */
export const AdessoThemeProvider = ({ children }: Props) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
