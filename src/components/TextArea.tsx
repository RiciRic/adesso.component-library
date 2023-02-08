import React, { HTMLAttributes } from 'react';

import { colorPalette } from '../theme/colorPalette';

import { alpha } from '@mui/material/styles';

/*const TextareaWrapper = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(colorPalette.buttonLightGray, 0.15),
  '&:hover': {
    backgroundColor: alpha(colorPalette.buttonLightGray, 0.12),
  },
  width: '100%',
  height: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    height: 'auto',
  },
  paddingLeft: 8,
  paddingRight: 8,
}));*/

export interface Props
  extends HTMLAttributes<HTMLTextAreaElement> {
    style: Object;
  }

/**TextArea with adesso theme. All available Props can be found here: https://beta.reactjs.org/reference/react-dom/components/textarea */
export const TextArea = ({style, ...props }: Props) => {
  let obj1 = { borderRadius: 4, padding: 10, width: '100%', height: '100%', border: "none", outline: "none", overflow: "hidden", backgroundColor: alpha(colorPalette.buttonLightGray, 0.15), color: "#000000DE", fontWeight: 400, fontSize: 14, lineHeight: "20px"}
  let obj2 = style;
  let stl = {...obj1, ...obj2};
  return (
      <textarea 
        style={stl}
        {...props}
      />
  );
};
