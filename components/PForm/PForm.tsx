'use client';

import { FieldValues, FormProvider, SubmitHandler, UseFormProps, useForm } from "react-hook-form";
import { Field, FormValues, PFormRef } from "./PFormTypes";
import PFormFields from "./PFormFields";
import { forwardRef, useImperativeHandle } from "react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { styled } from "@mui/material";
import clsx from "clsx";

interface PFormProps<TFieldValues extends FieldValues = FieldValues> {
    formFields: Field[];
    defaultValues: UseFormProps<TFieldValues>['defaultValues'];
    validators?: yup.ObjectSchema<FormValues>;
    onSubmitHandler: (data: TFieldValues) => Promise<void>,
    onResetHandler?: (data: TFieldValues) => void,
    classNames?: string;
}
const PformClass: Record<string, string> = {
    ROOT: 'PForm-root',
};

const Form = styled('form')({});

 const PForm = forwardRef<PFormRef, PFormProps> (({ formFields, defaultValues, validators, onSubmitHandler, classNames }, ref) => {
    const methods = useForm<FormValues>({
        defaultValues,
        resolver: validators && yupResolver(validators),
      });
      const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        onSubmitHandler(data);
      };

    //   const onReset: ResetHa<FormValues> = (data: FormValues) => {
    //     onSubmitHandler(data);
    //   };

      useImperativeHandle(
        ref, () => ({
            ...methods,
            submit: () => methods.handleSubmit(onSubmit)(),
            reset: () => methods.reset(),
        })
      );
      return (
        <FormProvider {...methods}>
          <Form
          className={clsx(classNames,PformClass.ROOT)}
          onSubmit={methods.handleSubmit(onSubmit)}>
            {/* Pass the dynamic fields array to the FormFields component */}
            <PFormFields formFields={formFields} />
    
            {/* Hidden submit button */}
            <button type="submit"style={{ display: 'none' }}>
              Submit
            </button>
          </Form>
    
        
        </FormProvider>
      );

});
PForm.displayName = 'PForm';
export default PForm;