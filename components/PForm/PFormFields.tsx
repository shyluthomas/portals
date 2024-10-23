'use client';
import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Field, FieldStateProps, InputMapType } from './PFormTypes';
import PFormTextfield from './form-controls/PFormTextfield';

// Define the structure of a field



interface FormFieldsProps {
    formFields: Field[];
}

const formInputMap: Record<InputMapType, ForwardRefExoticComponent<Omit<Readonly<FieldStateProps>, "ref"> & RefAttributes<HTMLInputElement>>> = {
    [InputMapType.TEXT]: PFormTextfield,
    [InputMapType.SELECT]: PFormTextfield,
    [InputMapType.CHECKBOX]: PFormTextfield,
};

const PFormFields = ({ formFields }: FormFieldsProps) => {
  const { control } = useFormContext();

  return (
    <>
      { formFields.map((formField: Field) => {
        return (
            <div key={formField.name}>
            <Controller
              name={formField.name}
              control={control}
              render={({ field: { value, onChange }, formState }) => {
                // Render custom component passed via the fields array
                const InputComponent = formInputMap[formField.type as InputMapType];
                const { errors } = formState;
                const fieldError = errors[formField.name];
                return (
                  <InputComponent
                    value={value}
                    onChange={onChange}
                    label={formField.label}
                    error={ fieldError ? fieldError.message as string : undefined }
                  />
                );
              }}
            />
          </div>
        );
    }
)};
</>
)
}

export default PFormFields;
