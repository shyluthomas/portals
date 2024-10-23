'use client';

import { forwardRef } from "react"
import { FieldStateProps } from "../PFormTypes";
import PTextBox from "@/components/PTextBox/PTextBox";

const PFormTextfield = forwardRef<HTMLInputElement, Readonly<FieldStateProps>> (({ value, onChange, label, error }) => {

    return (
        <PTextBox
        customLabel={label}
        error={error}
        value={value}
        onChange={onChange}
        >
        </PTextBox>
    );
});

PFormTextfield.displayName='PFormTextfield';
export default PFormTextfield;