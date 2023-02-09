import React, { ReactNode } from 'react';

import { colorPalette } from '../../theme/colorPalette';

import { styled, alpha } from '@mui/material/styles';

import {
  InputBase as MuiInputBase,
  InputBaseProps as MuiInputBaseProps,
} from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(colorPalette.buttonLightGray, 0.15),
  '&:hover': {
    backgroundColor: alpha(colorPalette.buttonLightGray, 0.12),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
  paddingLeft: 12,
  paddingRight: 12,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const SearchIconWrapperLeft = styled('div')(() => ({
  paddingTop: 6,
  paddingBottom: 6,
  paddingRight: 8,
  position: 'relative',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const SearchIconWrapperRight = styled('div')(() => ({
  paddingTop: 6,
  paddingBottom: 6,
  paddingLeft: 8,
  position: 'relative',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(MuiInputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    paddingTop: 6,
    paddingBottom: 6,
    // vertical padding + font size from searchIcon
    //paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    //width: `calc(1em + ${theme.spacing(4)})`,
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export interface Props extends MuiInputBaseProps {
  /**Item, witch appears left next to the Textinput. */
  leftItem?: ReactNode;

  /**Item, witch appears right next to the Textinput. */
  rightItem?: ReactNode;
}

/**TextField with adesso theme. */
export const TextField = ({ leftItem, rightItem, ...props }: Props) => {
  return (
    <Search>
      {leftItem ? (
        <SearchIconWrapperLeft>{leftItem}</SearchIconWrapperLeft>
      ) : null}
      <StyledInputBase fullWidth={true} {...props} />
      {rightItem ? (
        <SearchIconWrapperRight>{rightItem}</SearchIconWrapperRight>
      ) : null}
    </Search>
  );
};
