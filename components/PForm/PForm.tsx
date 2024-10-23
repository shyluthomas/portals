'use client';

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Field, FormValues, PFormRef } from "./PFormTypes";
import PFormFields from "./PFormFields";
import { forwardRef, useImperativeHandle } from "react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface PFormProps {
    formFields: Field[];
    defaultValues: FormValues;
    validators: yup.ObjectSchema<FormValues>;
}

 const PForm = forwardRef<PFormRef, PFormProps> (({ formFields, defaultValues, validators }, ref) => {
    const methods = useForm<FormValues>({
        defaultValues,
        resolver: yupResolver(validators),
      });
      const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        console.log('Form Data:', data);
      };

      useImperativeHandle(
        ref, () => ({
            submit: () => methods.handleSubmit(onSubmit),
            reset: () => methods.reset(),
        })
      );
      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* Pass the dynamic fields array to the FormFields component */}
            <PFormFields formFields={formFields} />
    
            {/* Hidden submit button */}
            <button type="submit"style={{ display: 'none' }}>
              Submit
            </button>
          </form>
    
        
        </FormProvider>
      );

});
PForm.displayName = 'PForm';
export default PForm;