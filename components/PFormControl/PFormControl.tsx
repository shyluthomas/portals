'use client';

import { FormControl, FormControlProps, FormHelperText, InputLabel } from "@mui/material";
import React, { ReactNode } from "react";
import { useId } from "react";

interface PFormControlProps extends Omit<FormControlProps, 'error'>{
    id?: string;
    children: ReactNode;
    error?: string;
    label?: string;
}

const PFormControl = ({ id, children, error, label }: PFormControlProps) => {
 const customId = useId();
 const idField = id? id: customId;
    return (
        <FormControl fullWidth error={Boolean(error)}>
        { label && <InputLabel id={idField}> { label }</InputLabel> }
            { children }
        { error && <FormHelperText id={idField} > { error } </FormHelperText> }
        </FormControl>
    )
}

export default PFormControl;