import React, { ReactNode } from 'react';

import { colorPalette } from '../../theme/colorPalette';

import { styled, alpha } from '@mui/material/styles';

import {  Select as MuiSelect, SelectProps as MuiSelectProps } from '@mui/material';

const StyledSelectBase = styled(MuiSelect)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    paddingTop: 6,
    paddingBottom: 6,
    // vertical padding + font size from searchIcon
    //paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    transition: theme.transitions.create('width'),
    //width: `calc(1em + ${theme.spacing(4)})`,
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(colorPalette.buttonLightGray, 0.15),
    '&:hover': {
      backgroundColor: alpha(colorPalette.buttonLightGray, 0.12),
    },
    outline: 'none',
    border:'none'
  },
}));

export interface Props extends MuiSelectProps {
  /*The content of the component.*/
  children?: ReactNode;
}

/**Select with adesso theme. */
export const Select = ({ children, ...props }: Props) => {
  return (
      <StyledSelectBase {...props}>{children}</StyledSelectBase>
  );
};
