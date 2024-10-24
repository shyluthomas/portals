import React, { forwardRef } from 'react';
import { TextField, TextFieldProps, styled } from '@mui/material';
import PFormControl from '../PFormControl/PFormControl';

export interface CustomTextFieldProps extends Omit<TextFieldProps, 'error'>{
  customLabel: string;
  error?: string;
  className?: string;
  label?: string;
}

const CustomTextField = styled(TextField)({
    marginBottom: '20px',
    '& label.Mui-focused': {
        color: 'blue',
      },
      variants: [
        {
            props: { disabled: true },
            style: {
                '& input': {
                    backgroundColor: '#000'
                }
            }
        }
      ],
});

const PTextBox = forwardRef<HTMLInputElement, Readonly<CustomTextFieldProps>>(({ customLabel, error, className, label, ...props }, ref) => {

  return (
    <PFormControl
    id={props?.id}
    error={error}
    label={label}
    >
    <CustomTextField
      inputRef={ref}
      label={customLabel}
      className={className}
      {...props}
    />
    </PFormControl>
  );
});

PTextBox.displayName= 'PTextBox';

export default PTextBox;
