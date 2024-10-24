'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Typography, styled } from '@mui/material';
import PTextBox from '@/components/PTextBox/PTextBox';
import PButton from '@/components/PButton/PButton';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const Form = styled('form')({
  padding: '20px'
})

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError(res.error);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <Container>
      <Typography variant='h3'> Sign In </Typography>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Form onSubmit={handleSubmit}>
        <PTextBox
          customLabel='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <PTextBox
          customLabel='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <PButton type='submit' variant='contained'>Sign In</PButton>
      </Form>
    </Container>
  );
};

export default Login;
