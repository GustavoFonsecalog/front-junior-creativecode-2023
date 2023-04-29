import { useContext } from 'react';
import { AppBar, Button, Box, Toolbar, Typography, IconButton, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link, useNavigate } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import styled from '@emotion/styled';

import { AuthContext } from '../../Auth/authContext';

const LogoImg = styled("img")({
    maxWidth: '120px',
    maxHeiht: '150px',
})

export default function ButtonAppBar() {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        await auth.signout();
        navigate('/')
    }

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
                                <MenuIcon sx={{ color: '#f8de64' }} />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '170px' }}>
                                <Link to={'/'}>
                                    <LogoImg src={Logo} className='hidden-mobile' />
                                </Link>
                            </Typography>
                            <Link to={'/'}>
                                <Button sx={{ color: '#f8de64', fontWeight: 'bold' }}> Home </Button>
                            </Link>
                            <Link to={'/private'}>
                                <Button sx={{ color: '#f8de64', fontWeight: 'bold' }}> Contatos </Button>
                            </Link>
                            {auth.user ? (
                                <Button sx={{ color: '#f8de64', fontWeight: 'bold' }} onClick={handleLogout}> Sair </Button>
                            ) : (
                                <Link to={'/login'}>
                                    <Button sx={{ color: '#f8de64', fontWeight: 'bold' }}> Login </Button>
                                </Link>
                            )}
                        </Toolbar>
                    </AppBar>
                </Box>
            </Grid>
        </Grid>

    );
}