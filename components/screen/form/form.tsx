'use client';

import PButton from "@/components/PButton/PButton";
import PForm from "@/components/PForm/PForm";
import { Field, PFormRef } from "@/components/PForm/PFormTypes";
import { formValidationSchema } from "@/lib/validators/test/formValidationSchema";
import { Box, Container } from "@mui/material";
import React, { useId, useRef } from "react";
import { FieldValues } from "react-hook-form";
const FormComponent = () => {
   
  const formRef = useRef<PFormRef>(null);
  const key = useId();

  // Dynamic default values and fields array
  const defaultValues = {
    username: '',
    age: 0,
  };
  const fields: Field[] = [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
    },
    {
      name: 'age',
      label: 'Age',
      type: 'text',
    },
  ];

  const onFormsubmit = async<TFieldData extends FieldValues = FieldValues>  (data: TFieldData) => {
    console.log(data);
  }
    return (
      <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      
      <PForm
      defaultValues={defaultValues}
      formFields={fields}
      ref={formRef}
      key={key}
      validators={formValidationSchema}
      onSubmitHandler={onFormsubmit}
      />
    
      <PButton onClick={() => formRef.current?.submit()}>Submit</PButton>
      <PButton onClick={() => formRef.current?.reset()}>Reset</PButton>
        
      </Box>
      
    </Container>
       
    );
}

export default FormComponent;