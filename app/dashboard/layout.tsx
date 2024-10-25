'use client';

import Sidebar, { drawerClosedWidth } from '@/components/Sidebar/Sidebar';
import TopBar from '@/components/TopBar/TopBar';
import { Box, styled } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
const ContentArea = styled(Box)({
    marginLeft: `${drawerClosedWidth}px`,
    padding: '20px',
    marginTop: '20px',
})

export default function RootLayout({ children }: Props) {
  return (
    <Box>
        <Sidebar></Sidebar>
        <TopBar></TopBar>
        <ContentArea >
            {children}
        </ContentArea>
    </Box>
  );
}
