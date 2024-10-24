'use client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { SessionProvider } from 'next-auth/react';
import { Box } from '@mui/material';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
        <Box 
          component="html"
          lang='en'
          sx={{ height: '100%' }}
        >
          <Box
            component='body'
            sx={{ height: '100%', overflow: 'hidden' }}
          >
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <SessionProvider>
                {props.children}
                </SessionProvider>
              </ThemeProvider>
            </AppRouterCacheProvider>
        </Box>
        </Box>
  );
}
