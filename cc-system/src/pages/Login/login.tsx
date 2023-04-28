import { Box, Button, Grid, Input, Typography } from '@mui/material'
import { useState, useContext } from 'react'
import { AuthContext } from '../../Auth/authContext'

import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const auth = useContext(AuthContext)

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password)
            if (isLogged) {
                navigate('/private')
            } else {
                alert('Não deu certo')
            }
        }
    }

    return (
        <Grid container sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Grid item md={6} lg={3} xs={12}>
                <Box sx={{
                    background: '#620cca',
                    padding: '100px',
                    borderRadius: '20px'
                }}>
                    <Typography
                        color={'#f8de64'}
                        sx={{ fontWeight: 'bold' }}
                    >
                        Faça seu login!
                    </Typography>
                    <Input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='email'
                        sx={{
                            display: 'grid',
                            color: '#f8de64'
                        }} />
                    <Input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='senha'
                        sx={{
                            display: 'grid',
                            color: '#f8de64'
                        }} />
                    <Button
                        onClick={handleLogin}
                        sx={{ fontWeight: 'bold', color: '#f8de64' }}
                    >
                        Logar
                    </Button>
                </Box>
            </Grid>
        </Grid>


    )
}