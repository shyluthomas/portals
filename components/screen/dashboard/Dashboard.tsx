'use client';
import PDataGrid from "@/components/PDataGrid/PDataGrid";
import { Box, Container, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import dashboradColumnDef from "./dashboradColumnDef";
import { DashBoard } from "@/types/dashborad/dashBoard";
import PTextBox from "@/components/PTextBox/PTextBox";

interface DashboardProps {
  dashboardData: DashBoard[];
}
const Dashboard = ({ dashboardData }: DashboardProps) => {
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
        <PDataGrid 
          columns={dashboradColumnDef}
          rows={dashboardData}
          getRowId={(row) => row.age}
        />
        
      </Box>
      
      <PTextBox  name="name" customLabel="sample text" error="yesy"></PTextBox>
    </Container>
       
    );
}

export default Dashboard;