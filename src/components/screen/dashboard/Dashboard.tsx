'use client';
import { Box, Container, Typography } from "@mui/material";
import { signOut } from "next-auth/react";


export const Dashboard = () => {

    const signoutEvent = () => {
        signOut({ callbackUrl: '/' });
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
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Box sx={{ maxWidth: 'sm' }}>
        <button onClick={() => signoutEvent() }>Sign Out</button>
        </Box>
      </Box>
    </Container>
       
    );
}