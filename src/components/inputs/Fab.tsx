import React, { ReactNode } from 'react';
import {
  Fab as MuiFab,
  FabProps as MuiFabProps,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { OverridableStringUnion } from '@mui/types';
import { PropTypes } from '@mui/material';

import { theme } from '../../theme/theme';


export interface FabPropsColorOverrides {}

export interface Props extends MuiFabProps {
  /*The content of the component.*/
  children?: ReactNode;
  color?: OverridableStringUnion<PropTypes.Color | 'success' | 'error' | 'info' | 'warning', FabPropsColorOverrides>;
}

/**Button with adesso theme. */
export const Fab = ({ children, color='primary', ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiFab {...props} color={color}>{children}</MuiFab>
    </ThemeProvider>
  );
};
