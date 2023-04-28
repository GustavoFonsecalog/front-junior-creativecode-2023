import * as React from 'react';
import { AppBar, Button, Box, Toolbar, Typography, IconButton, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import styled from '@emotion/styled';

const LogoImg = styled("img")({
    maxWidth: '120px',
    maxHeiht: '150px',
})

export default function ButtonAppBar() {
    return (
        <Grid container>
            <Grid item lg={12} md={12} xs={12}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" sx={{ backgroundColor: '#620cca' }}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon sx={{ color: '#000' }} />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '100px' }}>
                                <Link to={'/'}>
                                    <LogoImg src={Logo} />
                                </Link>
                            </Typography>
                            <Link to={'/private'}>
                                <Button sx={{ color: '#000', fontWeight: 'bold' }}> Contatos </Button>
                            </Link>
                            <Link to={'/login'}>
                                <Button sx={{ color: '#000', fontWeight: 'bold' }}>Login</Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Grid>
        </Grid>

    );
}