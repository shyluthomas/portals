import * as yup from 'yup';

export const formValidationSchema = yup.object({
    username: yup
      .string()
      .required('Username is required')
      .min(3, 'Must be at least 3 characters'),
    age: yup
      .number()
      .required('Age is required')
      .min(18, 'Must be at least 18 years old'),
   
  });