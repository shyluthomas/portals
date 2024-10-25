'use client';

import { Toolbar, Typography, styled } from "@mui/material";
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import { drawerClosedWidth } from "../Sidebar/Sidebar";

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
    marginLeft: '200px',
    width: `calc(100% - ${drawerClosedWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }));
const TopBar = () => {
    return (
        <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;