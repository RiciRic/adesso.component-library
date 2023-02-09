import React from 'react';

import { colorPalette } from '../../theme/colorPalette';

import { styled } from '@mui/material/styles';

import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
  tooltipClasses
} from '@mui/material';

const LightTooltip = styled(({ className, ...props }: MuiTooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: colorPalette.body1Color,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export interface Props extends MuiTooltipProps {
}

/**Tooltip with adesso theme. */
export const Tooltip = ({ children, ...props }: Props) => {
  return <LightTooltip {...props}>{children}</LightTooltip>;
};
