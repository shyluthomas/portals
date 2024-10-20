'use client';

import { Button as MuiButton, ButtonProps } from "@mui/material"
import { forwardRef } from "react";
import { styled } from '@mui/material/styles';

interface PButtonProps extends ButtonProps {
    rounded?: boolean;
}

const Button = styled(MuiButton, {
    shouldForwardProp: (prop) => prop !== 'rounded',
})<PButtonProps>(({rounded, theme }) => ({
    borderRadius: rounded ? '2px': '0px',
    color: theme.palette.primary.main,
    fontSize: '14px',
    lineHeight: '24px',
   
}));

const PButton = forwardRef<HTMLButtonElement, Readonly<PButtonProps>>(({...props}, ref) => {
    return <Button ref={ref} {...props} />
    },
);
PButton.displayName='PButton';

export default PButton;