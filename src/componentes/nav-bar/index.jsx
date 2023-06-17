import React from 'react';
import CartIcon from '../carrito-icon';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor:'#f26b8a'}} >
                    <IconButton
                    size="large"
                    edge="start"
                    color="red"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography  variant="h6" color= "white"component="div" sx={{ flexGrow: 1 }}>
                    Aby's Cabinet
                </Typography>
                <CartIcon/>
                </Toolbar>
            </AppBar>
        </Box>
        
    );
}

export default NavBar;