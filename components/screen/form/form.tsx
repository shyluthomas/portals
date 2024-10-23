'use client';

import PButton from "@/components/PButton/PButton";
import PForm from "@/components/PForm/PForm";
import { Field, PFormRef } from "@/components/PForm/PFormTypes";
import { formValidationSchema } from "@/lib/validators/test/formValidationSchema";
import { Box, Container } from "@mui/material";
import React, { useId, useRef } from "react";
const FormComponent = () => {
   
  const formRef = useRef<PFormRef>(null);
  const key = useId();

  // Dynamic default values and fields array
  const defaultValues = {
    username: 'JohnDoe',
    age: 25,
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
      />
    
      <PButton onClick={() => formRef.current?.submit()}>Submit</PButton>
        
      </Box>
      
    </Container>
       
    );
}

export default FormComponent;