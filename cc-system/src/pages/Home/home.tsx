import { Typography, Grid } from '@mui/material'

import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import styled from '@emotion/styled';

const IconContact = styled('div')({
    color: '#fff ',
})

const GifHome = styled('img')({
    maxWidth: '400px',
    borderRadius: '120px',
    margin: '20px 0 0 30px'
})

const Home = () => {
    return (
        <Grid container sx={{ paddingLeft: '15px', paddingRight: '15px' }}>
            <Grid item lg={12} xs={12}>
                <Typography variant='h5' sx={{ color: '#fff', marginTop: '30px' }}>
                    Bem vindos ao projeto front-junior-creativecode-2023, desde ja
                    agradeço a oportunidade de aprender mais com esse desafio e de fazê-lo!
                </Typography>
            </Grid>
            <Grid item lg={12} xs={12} display={'flex'} sx={{ justifyContent: 'center', marginTop: '50px' }}>
                <IconContact>
                    <LoginOutlinedIcon />
                </IconContact>
                <Typography sx={{ margin: '0 20px 0 20px', color: '#fff', fontWeight: 'bold' }}>
                    Clicando em Login, você irá para a página de login, uma vez logado você terá acesso aos contatos
                </Typography>
                <IconContact>
                    <LogoutOutlinedIcon />
                </IconContact>
            </Grid>
            <Grid item lg={12} xs={12} display={'flex'} sx={{ justifyContent: 'center', marginTop: '50px' }}>
                <IconContact>
                    <PermContactCalendarIcon />
                </IconContact>

                <Typography sx={{ marginLeft: '20px', color: '#fff', fontWeight: 'bold' }}>
                    Clicando em contatos (se estiver logado) você poderá ver os contatos ja existentes, adicionar novos ou removê-los!
                </Typography>
            </Grid>
            <Grid item lg={12} xs={12} sx={{ marginTop: '50px' }}>
                <Typography sx={{ marginLeft: '20px', color: '#fff', fontWeight: 'bold' }}>
                    Espero que gostem!
                </Typography>
                <GifHome src="https://media.tenor.com/y2JXkY1pXkwAAAAM/cat-computer.gif" alt="" />

            </Grid>
        </Grid>

        // <Box sx={{
        //     display: 'flex',
        //     height: '1vh',
        //     flexDirection: 'row',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        // }}>
        // </Box>

    )
}


export default Home

